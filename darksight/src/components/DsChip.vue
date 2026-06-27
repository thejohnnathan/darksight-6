<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "assist",
    validator: (value) => ["assist", "filter", "input"].includes(value),
  },
  selected: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  removable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click", "remove"]);

const chipClasses = computed(() => [
  "ds-chip",
  `ds-chip--${props.variant}`,
  {
    "ds-chip--selected": props.selected,
    "ds-chip--disabled": props.disabled,
  },
]);

const handleClick = () => {
  if (props.disabled) return;
  emit("click");
};

const handleRemove = (event) => {
  if (props.disabled) return;
  event.stopPropagation();
  emit("remove");
};

const getIconPath = (iconName) => {
  const icons = {
    "close":
      "M293.6 246.6L246.6 293.6l84.4-84.4-84.4-84.4 47-47 84.4 84.4L293.6 246.6zM589.4 246.6l-47-47-84.4 84.4 84.4 84.4 47-47-84.4-84.4z",
    "add":
      "M469.2 346.2h-72v-72h-41.4v72h-72v41.4h72v72h41.4v-72h72v-41.4z",
    "calendar":
      "M319.6 445.4h320.8v-41.4H319.6v41.4zm-102-204.8h41.4v-102h-41.4v102zm102 0h41.4v-102h-41.4v102zm102 0h41.4v-102h-41.4v102zm-204 102h41.4v-102h-41.4v102zm102 0h41.4v-102h-41.4v102zm102 0h41.4v-102h-41.4v102zm-306 102h41.4v-102h-41.4v102zm102 0h41.4v-102h-41.4v102zm102 0h41.4v-102h-41.4v102zM248.4 628.2c-25.4 0-46.6-8.2-64-24.6s-26.2-38.6-26.2-64.2V372.6c0-25.6 8.8-46.8 26.2-63.4s38.6-24.8 64-24.8h409.2c25.4 0 46.6 8.2 64 24.6s26.2 38.8 26.2 64.4v166.8c0 25.6-8.8 46.8-26.2 63.4s-38.6 24.8-64 24.8H248.4z",
    "checkmark":
      "M381.6 498.8l-118-118L212 432.4l169.6 169.6 296-296-51.2-51.2-243.8 245.2z",
    "star":
      "M476.8 665.2l-45.2-263.4 186.2-135.8-204.6-149.6-186.2 135.8-45.2 263.4 118.2 59.6z",
  };
  return icons[iconName] || "";
};
</script>

<template>
  <button
    v-if="variant === 'assist'"
    :class="chipClasses"
    :disabled="disabled"
    :aria-selected="selected"
    @click="handleClick"
  >
    <span v-if="icon" class="ds-chip__leading-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path :d="getIconPath(icon)" />
      </svg>
    </span>
    <span class="ds-chip__label">{{ label }}</span>
    <span v-if="removable" class="ds-chip__trailing-icon" @click="handleRemove">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path d="M293.6 246.6L246.6 293.6l84.4-84.4-84.4-84.4 47-47 84.4 84.4L293.6 246.6zM589.4 246.6l-47-47-84.4 84.4 84.4 84.4 47-47-84.4-84.4z" />
      </svg>
    </span>
  </button>

  <button
    v-else-if="variant === 'filter'"
    :class="chipClasses"
    :disabled="disabled"
    :aria-selected="selected"
    @click="handleClick"
  >
    <span v-if="selected" class="ds-chip__checkmark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path d="M381.6 498.8l-118-118L212 432.4l169.6 169.6 296-296-51.2-51.2-243.8 245.2z" />
      </svg>
    </span>
    <span v-else class="ds-chip__checkbox" />
    <span class="ds-chip__label">{{ label }}</span>
    <span v-if="removable" class="ds-chip__trailing-icon" @click="handleRemove">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path d="M293.6 246.6L246.6 293.6l84.4-84.4-84.4-84.4 47-47 84.4 84.4L293.6 246.6zM589.4 246.6l-47-47-84.4 84.4 84.4 84.4 47-47-84.4-84.4z" />
      </svg>
    </span>
  </button>

  <button
    v-else-if="variant === 'input'"
    :class="chipClasses"
    :disabled="disabled"
    :aria-selected="selected"
    @click="handleClick"
  >
    <span v-if="selected" class="ds-chip__checkmark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path d="M381.6 498.8l-118-118L212 432.4l169.6 169.6 296-296-51.2-51.2-243.8 245.2z" />
      </svg>
    </span>
    <span class="ds-chip__label">{{ label }}</span>
    <span v-if="removable" class="ds-chip__trailing-icon" @click="handleRemove">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="currentColor"
      >
        <path d="M293.6 246.6L246.6 293.6l84.4-84.4-84.4-84.4 47-47 84.4 84.4L293.6 246.6zM589.4 246.6l-47-47-84.4 84.4 84.4 84.4 47-47-84.4-84.4z" />
      </svg>
    </span>
  </button>
</template>

<style scoped>
.ds-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: 8px;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1;
  cursor: pointer;
  transition: box-shadow 0.15s ease, background-color 0.15s ease, transform 0.15s ease;
  outline: none;
}

.ds-chip:focus-visible {
  box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent-color);
}

.ds-chip--disabled {
  opacity: 0.38;
  cursor: not-allowed;
  pointer-events: none;
}

/* Assist Chip */
.ds-chip--assist {
  background: var(--surface-elevated);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.ds-chip--assist:hover:not(:disabled) {
  background: color-mix(in srgb, var(--surface-elevated) 88%, var(--accent-color) 12%);
  border-color: color-mix(in srgb, var(--border-color) 60%, var(--accent-color) 40%);
}

.ds-chip--assist:active:not(:disabled) {
  background: color-mix(in srgb, var(--surface-elevated) 82%, var(--accent-color) 18%);
  transform: scale(0.98);
}

/* Filter Chip */
.ds-chip--filter {
  background: var(--surface-subtle);
  border: 1px solid transparent;
  color: var(--text-secondary);
}

.ds-chip--filter.ds-chip--selected {
  background: var(--surface-container-highest);
  border-color: var(--chip-selected-border, var(--accent-color));
  color: var(--text-primary);
}

.ds-chip--filter:hover:not(:disabled) {
  background: color-mix(in srgb, var(--surface-subtle) 88%, var(--accent-color) 12%);
}

.ds-chip--filter.ds-chip--selected:hover:not(:disabled) {
  background: color-mix(in srgb, var(--surface-container-highest) 88%, var(--accent-color) 12%);
}

.ds-chip__checkbox {
  width: 0.875rem;
  height: 0.875rem;
  border: 2px solid currentColor;
  border-radius: 2px;
}

.ds-chip--selected .ds-chip__checkbox {
  display: none;
}

/* Input Chip */
.ds-chip--input {
  background: var(--surface-container-high);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.ds-chip--input.ds-chip--selected {
  background: var(--surface-container-high);
  border: 2px solid var(--chip-selected-border, var(--accent-color));
  padding-left: calc(0.75rem - 1px);
}

.ds-chip--input:hover:not(:disabled) {
  background: var(--surface-container-highest);
}

.ds-chip__checkmark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
}

.ds-chip__leading-icon,
.ds-chip__trailing-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
}

.ds-chip__label {
  padding: 0.125rem 0;
}

.ds-chip__trailing-icon {
  margin-left: -0.125rem;
  margin-right: -0.25rem;
  opacity: 0.7;
  border-radius: 50%;
}

.ds-chip__trailing-icon:hover:not(:disabled) {
  opacity: 1;
  background: color-mix(in srgb, currentColor 12%, transparent);
}

/* Dark theme */
:root[data-theme="dark"] .ds-chip--assist {
  background: var(--dark-surface-3);
  border-color: var(--dark-border);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip--assist:hover:not(:disabled) {
  background: color-mix(in srgb, var(--dark-surface-3) 88%, var(--dark-primary) 12%);
  border-color: color-mix(in srgb, var(--dark-border) 60%, var(--dark-primary) 40%);
}

:root[data-theme="dark"] .ds-chip--filter {
  background: var(--dark-surface-2);
  color: var(--dark-text-secondary);
}

:root[data-theme="dark"] .ds-chip--filter.ds-chip--selected {
  background: var(--dark-surface-container-highest);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip--input {
  background: var(--dark-surface-container-high);
  border-color: var(--dark-border);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip--input.ds-chip--selected {
  background: var(--dark-surface-container-high);
  border-color: var(--dark-primary);
}
</style>
