<script setup>
import DsTooltip from "../components/DsTooltip.vue";
</script>

<template>
  <section class="tooltip-page">
    <header class="hero">
      <div class="header-subtitle">UI Component Library</div>
      <h2 class="header-title">Tooltip</h2>
      <p>
        Tooltips display concise, contextual guidance when users hover or focus an element.
        Keep messages short and helpful, similar to Material Design patterns.
      </p>
    </header>

    <section class="demo-card">
      <h3>Basic usage</h3>
      <p>Hover or focus the examples to preview different placements.</p>
      <div class="examples-grid">
        <DsTooltip text="Add to favorites" placement="top">
          <button class="demo-btn" type="button">Top</button>
        </DsTooltip>

        <DsTooltip text="Open details panel" placement="right">
          <button class="demo-btn" type="button">Right</button>
        </DsTooltip>

        <DsTooltip text="Download report" placement="bottom">
          <button class="demo-btn" type="button">Bottom</button>
        </DsTooltip>

        <DsTooltip text="Remove item" placement="left">
          <button class="demo-btn" type="button">Left</button>
        </DsTooltip>
      </div>

      <h4>API</h4>
      <ul>
        <li><code>text</code> - Tooltip content text.</li>
        <li><code>placement</code> - Position: top, right, bottom, left.</li>
        <li><code>disabled</code> - Disable tooltip interactions.</li>
        <li><code>forceVisible</code> - Force tooltip to show regardless of hover/focus.</li>
      </ul>

      <h4>Accessibility notes</h4>
      <ul>
        <li>Tooltips appear on hover and keyboard focus.</li>
        <li>Escape key dismisses visible tooltip state.</li>
        <li>Use concise helper text, not critical instructions.</li>
      </ul>
    </section>

    <article class="demo-card">
      <h2>Guidance</h2>
      <ul>
        <li>Use tooltips for short helper text, not critical instructions.</li>
        <li>Support both mouse and keyboard users with hover + focus triggers.</li>
        <li>Prefer sentence case and avoid punctuation-heavy copy.</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.tooltip-page {
  display: grid;
  gap: 1.5rem;
}

.hero {
  display: grid;
  gap: 0.5rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  font-weight: 600;
}

.hero h1 {
  margin: 0;
  font-size: clamp(1.8rem, 2.3vw, 2.3rem);
}

.hero p {
  margin: 0;
  max-width: 65ch;
  color: var(--text-primary);
}

.demo-card {
  background: var(--surface-card, #ffffff);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--surface);
  padding: 1rem 1.1rem;
  display: grid;
  gap: 0.75rem;
}

.demo-card h2 {
  margin: 0;
  font-size: 1.1rem;
}

.demo-card p,
.demo-card ul {
  margin: 0;
  color: var(--text-primary);
}

.demo-card ul {
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
}

.examples-grid {
  margin-top: 0.2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, min-content));
  gap: 0.9rem;
  place-items: center;
}

.demo-btn {
  width: 100%;
  border: 1px solid var(--border-color);
  background: var(--surface-elevated);
  color: var(--text-primary);
  border-radius: 10px;
  padding: 0.55rem 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
}

.demo-btn:hover,
.demo-btn:focus-visible {
  border-color: color-mix(in srgb, var(--accent-color, #7c4dff) 60%, var(--border-color) 40%);
  box-shadow: 0 8px 20px rgba(124, 77, 255, 0.16);
  transform: translateY(-1px);
}

:root[data-theme="dark"] .tooltip-page .demo-card {
  background: var(--dark-surface-2);
  border-color: var(--dark-border);
}

:root[data-theme="dark"] .tooltip-page .demo-card h2 {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .tooltip-page p {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .tooltip-page .demo-card p,
:root[data-theme="dark"] .tooltip-page .demo-card ul {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .tooltip-page .demo-btn {
  background: var(--dark-surface-3);
  border-color: var(--dark-border);
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .tooltip-page .demo-btn:hover,
:root[data-theme="dark"] .tooltip-page .demo-btn:focus-visible {
  border-color: var(--dark-primary);
  box-shadow: 0 8px 20px rgba(139, 123, 255, 0.22);
}

@media (max-width: 600px) {
  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
