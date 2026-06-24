<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  apiItems: {
    type: Array,
    default: () => []
  },
  notes: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="docs-section">
    <header class="docs-section__header">
      <h2 class="docs-section__title">{{ title }}</h2>
      <p v-if="description" class="docs-section__description">{{ description }}</p>
    </header>

    <div class="docs-section__preview">
      <slot name="preview" />
    </div>

    <div v-if="$slots.code" class="docs-section__code">
      <h3 class="docs-section__subtitle">Code</h3>
      <slot name="code" />
    </div>

    <div v-if="apiItems.length" class="docs-section__api">
      <h3 class="docs-section__subtitle">API</h3>
      <ul class="docs-section__list">
        <li v-for="item in apiItems" :key="item.name" class="docs-section__list-item">
          <code>{{ item.name }}</code>
          <span>{{ item.description }}</span>
        </li>
      </ul>
    </div>

    <div v-if="notes.length" class="docs-section__notes">
      <h3 class="docs-section__subtitle">Accessibility notes</h3>
      <ul class="docs-section__list">
        <li v-for="note in notes" :key="note" class="docs-section__list-item">
          <span>{{ note }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.docs-section {
  background: var(--surface-card, #ffffff);
  border: 1px solid var(--border-subtle, #e6ebf5);
  border-radius: 16px;
  padding: 18px;
  display: grid;
  gap: 14px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
}

.docs-section__header {
  display: grid;
  gap: 6px;
}

.docs-section__title {
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
  color: var(--text-primary);
  background: none;
  -webkit-text-fill-color: currentColor;
}

.docs-section__description {
  margin: 0;
  color: var(--text-secondary, #475569);
}

.docs-section__subtitle {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--text-primary, #0f172a);
  background: none;
  -webkit-text-fill-color: currentColor;
}

.docs-section__list {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
}

.docs-section__list-item {
  color: var(--text-secondary, #475569);
  display: grid;
  gap: 2px;
}

.docs-section__list-item code {
  color: var(--text-primary, #0f172a);
  font-weight: 700;
  background: color-mix(in srgb, var(--surface-elevated, #ffffff) 85%, #000 15%);
  border: 1px solid var(--border-subtle, #e6ebf5);
  border-radius: 6px;
  padding: 0.1rem 0.35rem;
  display: inline-block;
  width: fit-content;
}

.docs-section__preview :deep(.demo-card),
.docs-section__preview :deep(.snackbar-example-row) {
  background: var(--surface, #ffffff);
  border-color: var(--border-color, #e6ebf5);
}

:root[data-theme="dark"] .docs-section {
  background: var(--dark-surface-1);
  border-color: var(--dark-border);
  box-shadow: 0 14px 28px rgba(2, 6, 23, 0.34);
}

:root[data-theme="dark"] .docs-section__title,
:root[data-theme="dark"] .docs-section__subtitle,
:root[data-theme="dark"] .docs-section__list-item code {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .docs-section__description,
:root[data-theme="dark"] .docs-section__list-item {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .docs-section__list-item code {
  background: var(--dark-surface-2);
  border-color: var(--dark-border);
}

</style>
