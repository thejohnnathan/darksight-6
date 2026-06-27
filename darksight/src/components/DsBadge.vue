<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: [Number, String],
    default: "",
  },
  max: {
    type: Number,
    default: 99,
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "error", "warning", "success", "info"].includes(
        value
      ),
  },
  position: {
    type: String,
    default: "top-end",
    validator: (value) =>
      ["top-end", "top-start", "bottom-end", "bottom-start"].includes(value),
  },
  dot: {
    type: Boolean,
    default: false,
  },
  overlap: {
    type: Boolean,
    default: false,
  },
});

const displayValue = computed(() => {
  if (props.dot) return "";
  if (typeof props.value === "number" && props.value > props.max) {
    return `${props.max}+`;
  }
  return props.value;
});

const badgeClasses = computed(() => [
  "ds-badge",
  `ds-badge--${props.size}`,
  `ds-badge--${props.color}`,
  `ds-badge--${props.position}`,
  props.dot && "ds-badge--dot",
  props.overlap && "ds-badge--overlap",
]);
</script>

<template>
  <span v-if="value !== '' || dot" :class="badgeClasses">
    <span v-if="!dot" class="ds-badge__content">{{ displayValue }}</span>
  </span>
</template>

<style scoped>
.ds-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  line-height: 1;
  border-radius: 999px;
  z-index: 10;
}

/* Sizes */
.ds-badge--small {
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  font-size: 10px;
}

.ds-badge--medium {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  font-size: 11px;
}

.ds-badge--large {
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
}

/* Dot variant */
.ds-badge--dot.ds-badge--small {
  min-width: 8px;
  width: 8px;
  height: 8px;
  padding: 0;
}

.ds-badge--dot.ds-badge--medium {
  min-width: 10px;
  width: 10px;
  height: 10px;
  padding: 0;
}

.ds-badge--dot.ds-badge--large {
  min-width: 12px;
  width: 12px;
  height: 12px;
  padding: 0;
}

/* Colors */
.ds-badge--primary {
  background: var(--primary-color);
  color: #ffffff;
}

.ds-badge--secondary {
  background: #64748b;
  color: #ffffff;
}

.ds-badge--error {
  background: #ef4444;
  color: #ffffff;
}

.ds-badge--warning {
  background: #f59e0b;
  color: #1f2937;
}

.ds-badge--success {
  background: #10b981;
  color: #ffffff;
}

.ds-badge--info {
  background: #3b82f6;
  color: #ffffff;
}

/* Positions */
.ds-badge--top-end {
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
}

.ds-badge--top-start {
  top: 0;
  left: 0;
  transform: translate(-30%, -30%);
}

.ds-badge--bottom-end {
  bottom: 0;
  right: 0;
  transform: translate(30%, 30%);
}

.ds-badge--bottom-start {
  bottom: 0;
  left: 0;
  transform: translate(-30%, 30%);
}

/* Overlap mode (for avatars, icons) */
.ds-badge--overlap.ds-badge--top-end {
  transform: translate(50%, -50%);
}

.ds-badge--overlap.ds-badge--top-start {
  transform: translate(-50%, -50%);
}

.ds-badge--overlap.ds-badge--bottom-end {
  transform: translate(50%, 50%);
}

.ds-badge--overlap.ds-badge--bottom-start {
  transform: translate(-50%, 50%);
}

.ds-badge__content {
  white-space: nowrap;
}
</style>
