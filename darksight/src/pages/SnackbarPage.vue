<template>
  <section class="snackbar-page">
    <header class="hero">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Snackbar</h2>
    <p>
      Snackbars provide brief, non-blocking feedback after user actions such as saves, errors, or status updates.
      Keep messages short, informative, and paired with optional actions when appropriate.
    </p>
    </header>

    <DocsSection
      title="Snackbar queue demo"
      description="Enqueue feedback messages and process them one-by-one with dedupe support."
      :api-items="snackbarApiItems"
      :notes="snackbarNotes"
    >
      <template #preview>
        <div class="snackbar-showcase">
          <article
            v-for="item in snackbarItems"
            :key="item.id"
            class="snackbar-example-row"
          >
            <div class="snackbar-example-heading">
              <span class="snackbar-index">{{ item.id }}</span>
              <h4 class="snackbar-variant-title">{{ item.title }}</h4>
              <button class="btn btn-small btn-outline" type="button" @click="enqueueVariant(item)">
                Enqueue
              </button>
            </div>
          </article>
        </div>
        <div class="spacer">
        <DsSnackbar
          v-if="snackbar.current.value"
          :type="snackbar.current.value.type"
          :message="snackbar.current.value.message"
          :action-label="snackbar.current.value.actionLabel"
          :dismissible="snackbar.current.value.dismissible"
          :visible="snackbar.visible.value"
          @action="snackbar.handleAction"
          @close="snackbar.closeCurrent"
        /></div>
      </template>
    </DocsSection>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import DsSnackbar from '../components/DsSnackbar.vue'
import DocsSection from '../components/DocsSection.vue'
import { useSnackbar } from '../composables/useSnackbar'

const snackbarItems = [
  {
    id: 1,
    type: 'info',
    title: 'Information',
    message: 'This is an info message!'
  },
  {
    id: 2,
    type: 'success',
    title: 'Success',
    message: 'This is a success message!'
  },
  {
    id: 3,
    type: 'error',
    title: 'Error',
    message: 'This is an error message!'
  },
  {
    id: 4,
    type: 'warning',
    title: 'Warning',
    message: 'This is a warning message!'
  }
]

const snackbar = useSnackbar()

const snackbarApiItems = [
  { name: 'type', description: 'Visual style: info, success, error, warning.' },
  { name: 'message', description: 'Short feedback message for the user.' },
  { name: 'actionLabel', description: 'Optional label for a secondary action.' },
  { name: 'dismissible', description: 'Adds manual close button when true.' }
]

const snackbarNotes = [
  'Use polite announcements for non-critical updates.',
  'Error snackbars use assertive live region priority.',
  'Keep content concise and action labels clear.'
]

const demoVariants = computed(() =>
  snackbarItems.map((item) => ({
    ...item,
    actionLabel: 'Retry',
    dismissible: true
  }))
)

const enqueueVariant = (item) => {
  snackbar.enqueue({
    type: item.type,
    message: item.message,
    actionLabel: item.actionLabel,
    dismissible: item.dismissible,
    duration: 4000,
    onAction: () => {
      snackbar.enqueue({
        type: 'success',
        message: `${item.title} action handled`,
        duration: 2200
      })
    }
  })
}

onMounted(() => {
  demoVariants.value.forEach((item) => enqueueVariant(item))
})
</script>

<style scoped>
.snackbar-page {
  display: grid;
  gap: 1.5rem;
}

.snackbar-showcase {
  display: grid;
  gap: 0.8rem;
}

.snackbar-example-row {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--surface);
  padding: 0.7rem 0.85rem;
}

.snackbar-example-heading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.snackbar-index {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.88rem;
  background: color-mix(in srgb, var(--accent-color, #7c4dff) 14%, transparent);
  color: var(--accent-color, #7c4dff);
}

.snackbar-variant-title {
  margin: 0;
  flex: 1;
  color: var(--text-primary);
}

.spacer {
  margin-top: 16px;
}

:root[data-theme="dark"] .snackbar-page .snackbar-example-row {
  background: var(--dark-surface-2);
  border-color: var(--dark-border);
}

:root[data-theme="dark"] .snackbar-page .snackbar-index {
  background: color-mix(in srgb, var(--dark-primary) 26%, var(--dark-surface-2) 74%);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .snackbar-page .snackbar-variant-title {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .snackbar-page .btn.btn-outline {
  color: var(--dark-text-primary);
  border-color: var(--dark-border);
  background: var(--dark-surface-2);
}

:root[data-theme="dark"] .snackbar-page .btn.btn-outline:hover,
:root[data-theme="dark"] .snackbar-page .btn.btn-outline:focus-visible {
  border-color: var(--dark-primary);
  background: var(--dark-surface-3);
  color: var(--dark-text-primary);
}

@media (max-width: 640px) {
  .snackbar-example-heading {
    flex-wrap: wrap;
  }

  .snackbar-example-heading .btn {
    width: 100%;
  }
}
</style>
