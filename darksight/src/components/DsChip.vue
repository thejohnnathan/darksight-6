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
    close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    add: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",
    calendar: "M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 15H5V10h14z",
    checkmark: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    star: "m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
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
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
        <path :d="getIconPath(icon)" />
      </svg>
    </span>
    <span class="ds-chip__label">{{ label }}</span>
    <span v-if="removable" class="ds-chip__trailing-icon" @click="handleRemove">
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
        <path :d="getIconPath('close')" />
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
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
        <path :d="getIconPath('checkmark')" />
      </svg>
    </span>
    <span v-else class="ds-chip__checkbox" />
    <span class="ds-chip__label">{{ label }}</span>
    <span v-if="removable" class="ds-chip__trailing-icon" @click="handleRemove">
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
        <path :d="getIconPath('close')" />
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
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
        <path :d="getIconPath('checkmark')" />
      </svg>
    </span>
    <span class="ds-chip__label">{{ label }}</span>
    <span v-if="removable" class="ds-chip__trailing-icon" @click="handleRemove">
      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
        <path :d="getIconPath('close')" />
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
  width: 1rem;
  height: 1rem;
  margin-left: 0.125rem;
  margin-right: -0.125rem;
  padding: 0.125rem;
  opacity: 0.72;
  border-radius: 999px;
  transition: opacity 0.15s ease, background-color 0.15s ease, transform 0.15s ease;
}

.ds-chip__trailing-icon svg {
  width: 14px;
  height: 14px;
}

.ds-chip__trailing-icon:hover:not(:disabled) {
  opacity: 1;
  background: color-mix(in srgb, currentColor 14%, transparent);
  transform: scale(1.04);
}

/* Dark theme */
:root[data-theme="dark"] .ds-chip {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip:focus-visible {
  box-shadow: 0 0 0 2px var(--dark-surface-1), 0 0 0 4px var(--dark-primary);
}

:root[data-theme="dark"] .ds-chip--assist {
  background: var(--dark-surface-3);
  border-color: var(--dark-border);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip--assist:hover:not(:disabled) {
  background: color-mix(in srgb, var(--dark-surface-3) 82%, var(--dark-primary) 18%);
  border-color: color-mix(in srgb, var(--dark-border) 50%, var(--dark-primary) 50%);
}

:root[data-theme="dark"] .ds-chip--filter {
  background: var(--dark-surface-2);
  border-color: transparent;
  color: var(--dark-text-secondary);
}

:root[data-theme="dark"] .ds-chip--filter:hover:not(:disabled) {
  background: color-mix(in srgb, var(--dark-surface-2) 82%, var(--dark-primary) 18%);
}

:root[data-theme="dark"] .ds-chip--filter.ds-chip--selected {
  background: var(--dark-surface-container-highest);
  border-color: var(--dark-primary);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip--filter.ds-chip--selected:hover:not(:disabled) {
  background: color-mix(in srgb, var(--dark-surface-container-highest) 82%, var(--dark-primary) 18%);
}

:root[data-theme="dark"] .ds-chip--input {
  background: var(--dark-surface-container-high);
  border-color: var(--dark-border);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .ds-chip--input:hover:not(:disabled) {
  background: var(--dark-surface-container-highest);
}

:root[data-theme="dark"] .ds-chip--input.ds-chip--selected {
  background: var(--dark-surface-container-high);
  border-color: var(--dark-primary);
}

:root[data-theme="dark"] .ds-chip--disabled {
  opacity: 0.45;
}
</style>
