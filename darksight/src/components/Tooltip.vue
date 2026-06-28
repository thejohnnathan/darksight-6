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
const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`;
const triggerRef = ref(null);

const showTooltip = () => {
  if (props.disabled) return;
  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};

const onTriggerKeydown = (event) => {
  if (event.key === "Escape") {
    hideTooltip();
    triggerRef.value?.blur?.();
  }
};

const tooltipClasses = computed(() => ["tooltip-bubble", `is-${props.placement}`]);
const shouldShow = computed(() => (props.disabled ? false : props.forceVisible || isVisible.value));
</script>

<template>
  <span
    class="tooltip"
    :data-tooltip-visible="shouldShow ? 'true' : 'false'"
    :data-placement="placement"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focusin="showTooltip"
    @focusout="hideTooltip"
  >
    <span
      ref="triggerRef"
      class="tooltip-trigger"
      tabindex="0"
      :aria-describedby="shouldShow ? tooltipId : undefined"
      :aria-expanded="shouldShow ? 'true' : 'false'"
      :aria-haspopup="'true'"
      @keydown="onTriggerKeydown"
    >
      <slot />
    </span>
    <transition name="tooltip-fade">
      <span
        v-if="shouldShow"
        :id="tooltipId"
        role="tooltip"
        :class="tooltipClasses"
        :data-tooltip-visible="shouldShow ? 'true' : 'false'"
        :data-placement="placement"
      >
        {{ text }}
      </span>
    </transition>
  </span>
</template>
