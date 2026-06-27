<script setup>
import { ref } from "vue";
import DsChip from "../components/DsChip.vue";
import DocsSection from "../components/DocsSection.vue";

const chipApiItems = [
  { name: "label", description: "Chip text content." },
  { name: "variant", description: "Type: assist, filter, or input." },
  { name: "selected", description: "Mark chip as selected/toggled." },
  { name: "disabled", description: "Disable chip interactions." },
  { name: "icon", description: "Leading icon name: add, star, calendar." },
  { name: "removable", description: "Show trailing remove button." },
];

const chipNotes = [
  "Assist chips trigger actions like adding items or scheduling.",
  "Filter chips toggle selection to refine content or lists.",
  "Input chips represent attributes like entity values.",
];

const selectedFilterChips = ref(["Entertainment"]);
const selectedInputChips = ref(["John Doe"]);

const handleFilterChipClick = (label) => {
  const index = selectedFilterChips.value.indexOf(label);
  if (index > -1) {
    selectedFilterChips.value.splice(index, 1);
  } else {
    selectedFilterChips.value.push(label);
  }
};

const handleInputChipRemove = (label) => {
  const index = selectedInputChips.value.indexOf(label);
  if (index > -1) {
    selectedInputChips.value.splice(index, 1);
  }
};
</script>

<template>
  <section class="chip-page">
    <header class="hero">
      <div class="header-subtitle">UI Component Library</div>
      <h2 class="header-title">Chip</h2>
      <p>
        Chips are compact elements that represent inputs, choices, or actions.
        Use them for quick selections, filters, or triggering contextual actions.
      </p>
    </header>

    <DocsSection
      title="Assist chips"
      description="Assist chips perform actions and appear in dynamic contexts."
      :api-items="chipApiItems"
      :notes="chipNotes"
    >
      <template #preview>
        <div class="chips-row">
          <DsChip label="Add to calendar" variant="assist" icon="add" />
          <DsChip label="Starred" variant="assist" icon="star" />
          <DsChip label="Schedule" variant="assist" icon="calendar" />
          <DsChip label="Removable" variant="assist" removable />
        </div>
      </template>
    </DocsSection>

    <DocsSection
      title="Filter chips"
      description="Filter chips toggle selection to refine displayed content."
    >
      <template #preview>
        <div class="chips-section">
          <p class="section-label">Select categories:</p>
          <div class="chips-row">
            <DsChip
              label="Entertainment"
              variant="filter"
              :selected="selectedFilterChips.includes('Entertainment')"
              @click="handleFilterChipClick('Entertainment')"
            />
            <DsChip
              label="Technical"
              variant="filter"
              :selected="selectedFilterChips.includes('Technical')"
              @click="handleFilterChipClick('Technical')"
            />
            <DsChip
              label="Politics"
              variant="filter"
              :selected="selectedFilterChips.includes('Politics')"
              @click="handleFilterChipClick('Politics')"
            />
            <DsChip
              label="Sports"
              variant="filter"
              :selected="selectedFilterChips.includes('Sports')"
              @click="handleFilterChipClick('Sports')"
            />
          </div>
          <p class="filter-result">
            <strong>Selected:</strong> {{ selectedFilterChips.join(", ") || "None" }}
          </p>
        </div>
      </template>
    </DocsSection>

    <DocsSection
      title="Input chips"
      description="Input chips represent complex information like entities or attributes."
    >
      <template #preview>
        <div class="chips-section">
          <p class="section-label">Selected contacts:</p>
          <div class="chips-row">
            <DsChip
              label="John Doe"
              variant="input"
              selected
              :selected="selectedInputChips.includes('John Doe')"
              removable
              @remove="handleInputChipRemove('John Doe')"
            />
            <DsChip
              label="Jane Smith"
              variant="input"
              :selected="selectedInputChips.includes('Jane Smith')"
              removable
              @remove="handleInputChipRemove('Jane Smith')"
            />
            <DsChip
              label="Alex Johnson"
              variant="input"
              :selected="selectedInputChips.includes('Alex Johnson')"
              removable
              @remove="handleInputChipRemove('Alex Johnson')"
            />
          </div>
        </div>
      </template>
    </DocsSection>

    <DocsSection title="Chip states" description="Interactive and disabled states for all chip types.">
      <template #preview>
        <div class="chips-column">
          <div class="chips-row">
            <DsChip label="Default" variant="assist" />
            <DsChip label="With icon" variant="assist" icon="add" />
            <DsChip label="Removable" variant="assist" removable />
          </div>
          <div class="chips-row">
            <DsChip label="Selected" variant="filter" selected />
            <DsChip label="Unselected" variant="filter" />
            <DsChip label="Disabled" variant="filter" disabled />
          </div>
          <div class="chips-row">
            <DsChip label="Selected" variant="input" selected />
            <DsChip label="Unselected" variant="input" />
            <DsChip label="Disabled" variant="input" disabled />
          </div>
        </div>
      </template>
    </DocsSection>

    <article class="guidance-card">
      <h3>Usage guidance</h3>
      <ul>
        <li>
          <strong>Assist chips</strong> appear in toolbars, cards, or dialogs for contextual actions.
        </li>
        <li>
          <strong>Filter chips</strong> use with grouped options where multi-select makes sense.
        </li>
        <li>
          <strong>Input chips</strong> represent selected items in forms or complex inputs.
        </li>
        <li>Keep chip labels concise - aim for 1-3 words maximum.</li>
        <li>Use sentence case for chip labels without ending punctuation.</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.chip-page {
  display: grid;
  gap: 1.5rem;
}

.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chips-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chips-section {
  display: grid;
  gap: 0.5rem;
}

.section-label {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.filter-result {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.guidance-card {
  background: var(--surface-card, #ffffff);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--surface);
  padding: 1rem 1.1rem;
  display: grid;
  gap: 0.75rem;
}

.guidance-card h3 {
  margin: 0;
  font-size: 1.1rem;
}

.guidance-card p,
.guidance-card ul {
  margin: 0;
  color: var(--text-primary);
}

.guidance-card ul {
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
}

/* Dark theme */
:root[data-theme="dark"] .chip-page .guidance-card {
  background: var(--dark-surface-2);
  border-color: var(--dark-border);
}

:root[data-theme="dark"] .chip-page .guidance-card h3 {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .chip-page p,
:root[data-theme="dark"] .chip-page .guidance-card ul {
  color: var(--dark-text-primary);
}

@media (max-width: 600px) {
  .chips-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
