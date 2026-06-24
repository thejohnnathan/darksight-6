<template>
  <div
    v-if="visible"
    class="ds-snackbar"
    :class="[
      `ds-snackbar--${type}`,
      {
        'ds-snackbar--dismissible': dismissible,
        'ds-snackbar--with-action': !!actionLabel
      }
    ]"
    role="status"
    aria-live="polite"
  >
    <div class="ds-snackbar__icon" aria-hidden="true">
      <svg v-if="type === 'info'" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="M12 10.2V15.4" stroke="#fff" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="12" cy="7.8" r="1.1" fill="#fff" />
      </svg>

      <svg v-else-if="type === 'success'" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="M8.2 12.3 10.8 14.9 15.8 9.9" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <svg v-else-if="type === 'error'" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="m9.2 9.2 5.6 5.6m0-5.6-5.6 5.6" stroke="#fff" stroke-width="1.9" stroke-linecap="round" />
      </svg>

      <svg v-else viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="currentColor" />
        <path d="M12 7.8v6.2" stroke="#fff" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="12" cy="16.9" r="1.1" fill="#fff" />
      </svg>
    </div>

    <p class="ds-snackbar__message">{{ message }}</p>

    <button
      v-if="actionLabel"
      type="button"
      class="ds-snackbar__action"
      @click="$emit('action')"
    >
      {{ actionLabel }}
    </button>

    <button
      v-if="dismissible"
      type="button"
      class="ds-snackbar__close"
      aria-label="Dismiss message"
      @click="$emit('close')"
    >
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m7 7 10 10m0-10L7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'error', 'warning'].includes(value)
  },
  message: {
    type: String,
    required: true
  },
  actionLabel: {
    type: String,
    default: ''
  },
  dismissible: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: true
  }
})

defineEmits(['action', 'close'])
</script>
