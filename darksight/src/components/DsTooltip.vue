<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    default: "top",
    validator: (value) => ["top", "right", "bottom", "left"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  forceVisible: {
    type: Boolean,
    default: false,
  },
});

const isVisible = ref(false);
const tooltipId = `ds-tooltip-${Math.random().toString(36).slice(2, 9)}`;

const showTooltip = () => {
  if (props.disabled) return;
  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};

const tooltipClasses = computed(() => ["ds-tooltip-bubble", `is-${props.placement}`]);
const shouldShow = computed(() => (props.disabled ? false : props.forceVisible || isVisible.value));
</script>

<template>
  <span
    class="ds-tooltip"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focusin="showTooltip"
    @focusout="hideTooltip"
  >
    <span class="ds-tooltip-trigger" :aria-describedby="shouldShow ? tooltipId : undefined">
      <slot />
    </span>
    <transition name="ds-tooltip-fade">
      <span
        v-if="shouldShow"
        :id="tooltipId"
        role="tooltip"
        :class="tooltipClasses"
      >
        {{ text }}
      </span>
    </transition>
  </span>
</template>

<style scoped>
.ds-tooltip {
  position: relative;
  display: inline-flex;
  width: auto;
}

.ds-tooltip-trigger {
  display: inline-flex;
  width: auto;
}

.ds-tooltip-bubble {
  position: absolute;
  z-index: 1200;
  pointer-events: none;
  background: color-mix(in srgb, var(--surface-elevated, #1e1f27) 92%, black 8%);
  color: var(--text-primary, #ffffff);
  border: 1px solid color-mix(in srgb, var(--border-color, #ffffff) 12%, transparent 88%);
  border-radius: 8px;
  padding: 0.35rem 0.6rem;
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.01em;
  white-space: nowrap;
  box-shadow: 0 10px 22px rgba(10, 10, 20, 0.24);
}

.ds-tooltip-bubble::after {
  content: "";
  position: absolute;
  width: 0.45rem;
  height: 0.45rem;
  background: inherit;
  border-right: inherit;
  border-bottom: inherit;
}

.ds-tooltip-bubble.is-top {
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translateX(-50%);
}

.ds-tooltip-bubble.is-top::after {
  left: calc(50% - 0.2rem);
  bottom: -0.23rem;
  transform: rotate(45deg);
}

.ds-tooltip-bubble.is-right {
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}

.ds-tooltip-bubble.is-right::after {
  left: -0.22rem;
  top: calc(50% - 0.2rem);
  transform: rotate(135deg);
}

.ds-tooltip-bubble.is-bottom {
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
}

.ds-tooltip-bubble.is-bottom::after {
  left: calc(50% - 0.2rem);
  top: -0.23rem;
  transform: rotate(225deg);
}

.ds-tooltip-bubble.is-left {
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}

.ds-tooltip-bubble.is-left::after {
  right: -0.22rem;
  top: calc(50% - 0.2rem);
  transform: rotate(-45deg);
}

.ds-tooltip-fade-enter-active,
.ds-tooltip-fade-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.ds-tooltip-fade-enter-from,
.ds-tooltip-fade-leave-to {
  opacity: 0;
}
</style>
