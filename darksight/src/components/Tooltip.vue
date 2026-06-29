<script setup>
import { computed, onBeforeUnmount, ref, watch } from "vue";

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
const tooltipPosition = ref({ top: 0, left: 0 });

const updateTooltipPosition = () => {
  const triggerEl = triggerRef.value;
  if (!triggerEl) return;

  const rect = triggerEl.getBoundingClientRect();
  const gap = 10;

  let top = rect.top + rect.height / 2;
  let left = rect.left + rect.width / 2;

  if (props.placement === "right") {
    left = rect.right + gap;
    top = rect.top + rect.height / 2;
  } else if (props.placement === "left") {
    left = rect.left - gap;
    top = rect.top + rect.height / 2;
  } else if (props.placement === "bottom") {
    left = rect.left + rect.width / 2;
    top = rect.bottom + gap;
  } else {
    left = rect.left + rect.width / 2;
    top = rect.top - gap;
  }

  tooltipPosition.value = { top, left };
};

const showTooltip = () => {
  if (props.disabled) return;
  updateTooltipPosition();
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

const handleViewportChange = () => {
  if (!shouldShow.value) return;
  updateTooltipPosition();
};

const tooltipClasses = computed(() => ["tooltip-bubble", `is-${props.placement}`]);
const shouldShow = computed(() => (props.disabled ? false : props.forceVisible || isVisible.value));
const tooltipStyle = computed(() => ({
  position: "fixed",
  top: `${tooltipPosition.value.top}px`,
  left: `${tooltipPosition.value.left}px`,
}));

watch(
  () => props.forceVisible,
  (value) => {
    if (value) {
      updateTooltipPosition();
    }
  }
);

watch(shouldShow, (value) => {
  if (value) {
    updateTooltipPosition();
    window.addEventListener("scroll", handleViewportChange, true);
    window.addEventListener("resize", handleViewportChange);
    return;
  }

  window.removeEventListener("scroll", handleViewportChange, true);
  window.removeEventListener("resize", handleViewportChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleViewportChange, true);
  window.removeEventListener("resize", handleViewportChange);
});
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
    <Teleport to="body">
      <transition name="tooltip-fade">
        <span
          v-if="shouldShow"
          :id="tooltipId"
          role="tooltip"
          :class="tooltipClasses"
          :data-tooltip-visible="shouldShow ? 'true' : 'false'"
          :data-placement="placement"
          :style="tooltipStyle"
        >
          {{ text }}
        </span>
      </transition>
    </Teleport>
  </span>
</template>
