<script setup>
import Badge from "../Badge.vue";
</script>

<template>
  <section class="examples-root">
    <section class="demo-card">
      <h3>Badge positions</h3>
      <p class="section-description">Position badges at different corner points of their container.</p>
      <div class="badge-positions-grid">
        <div class="badge-position-item">
          <button class="demo-btn" type="button">
            Top End
            <Badge value="3" position="top-end" />
          </button>
        </div>
        <div class="badge-position-item">
          <button class="demo-btn" type="button">
            Top Start
            <Badge value="12" position="top-start" />
          </button>
        </div>
        <div class="badge-position-item">
          <button class="demo-btn" type="button">
            Bottom End
            <Badge value="99+" position="bottom-end" />
          </button>
        </div>
        <div class="badge-position-item">
          <button class="demo-btn" type="button">
            Bottom Start
            <Badge value="New" position="bottom-start" />
          </button>
        </div>
      </div>
      <h4>API</h4>
      <ul>
        <li><code>value</code> - Badge content (number or string).</li>
        <li><code>max</code> - Maximum value to show before using '+' (default: 99).</li>
        <li><code>size</code> - Badge size: small, medium, or large.</li>
        <li><code>color</code> - Badge color: primary, secondary, error, warning, success, or info.</li>
        <li><code>position</code> - Position: top-end, top-start, bottom-end, or bottom-start.</li>
        <li><code>dot</code> - Show as a small notification dot only.</li>
        <li><code>overlap</code> - Enable overlap mode for avatar/icon badges.</li>
      </ul>
      <h4>Accessibility notes</h4>
      <ul>
        <li>Use badges to display notification counts or status indicators.</li>
        <li>Position badges at corner points of their container element.</li>
        <li>The dot variant is useful for online/offline status indicators.</li>
      </ul>
    </section>

    <section class="demo-card">
      <h3>Badge sizes</h3>
      <p class="section-description">Choose the right size for your use case.</p>
      <div class="badge-sizes-grid">
        <div class="badge-size-item">
          <button class="demo-btn-small" type="button">
            Small
            <Badge value="5" size="small" />
          </button>
        </div>
        <div class="badge-size-item">
          <button class="demo-btn" type="button">
            Medium
            <Badge value="5" size="medium" />
          </button>
        </div>
        <div class="badge-size-item">
          <button class="demo-btn-large" type="button">
            Large
            <Badge value="5" size="large" />
          </button>
        </div>
      </div>
    </section>

    <section class="demo-card">
      <h3>Badge colors</h3>
      <p class="section-description">Use different colors to convey meaning.</p>
      <div class="badge-colors-grid">
        <div class="badge-color-item">
          <button class="demo-btn" type="button">
            Primary
            <Badge value="8" color="primary" />
          </button>
        </div>
        <div class="badge-color-item">
          <button class="demo-btn" type="button">
            Secondary
            <Badge value="8" color="secondary" />
          </button>
        </div>
        <div class="badge-color-item">
          <button class="demo-btn" type="button">
            Success
            <Badge value="8" color="success" />
          </button>
        </div>
        <div class="badge-color-item">
          <button class="demo-btn" type="button">
            Warning
            <Badge value="8" color="warning" />
          </button>
        </div>
        <div class="badge-color-item">
          <button class="demo-btn" type="button">
            Error
            <Badge value="8" color="error" />
          </button>
        </div>
        <div class="badge-color-item">
          <button class="demo-btn" type="button">
            Info
            <Badge value="8" color="info" />
          </button>
        </div>
      </div>
    </section>

    <section class="demo-card">
      <h3>Notification dot</h3>
      <p class="section-description">Use the dot variant for status indicators.</p>
      <div class="badge-dots-grid">
        <div class="badge-dot-item">
          <span class="avatar-badge-wrap">
            <span class="demo-avatar">JD</span>
            <Badge dot size="small" position="top-end" color="success" />
          </span>
        </div>
        <div class="badge-dot-item">
          <span class="avatar-badge-wrap">
            <span class="demo-avatar">AB</span>
            <Badge dot size="medium" position="top-end" color="error" />
          </span>
        </div>
        <div class="badge-dot-item">
          <span class="avatar-badge-wrap large">
            <span class="demo-avatar large">MK</span>
            <Badge dot size="large" position="top-end" color="warning" />
          </span>
        </div>
      </div>
    </section>

    <section class="demo-card">
      <h3>With avatars</h3>
      <p class="section-description">Use overlap mode with avatar images.</p>
      <div class="badge-avatars-grid">
        <div class="badge-avatar-item">
          <span class="avatar-badge-wrap">
            <span class="demo-avatar">A</span>
            <Badge value="2" overlap position="top-end" color="primary" />
          </span>
        </div>
        <div class="badge-avatar-item">
          <span class="avatar-badge-wrap">
            <span class="demo-avatar">B</span>
            <Badge value="12" overlap position="top-end" color="error" />
          </span>
        </div>
        <div class="badge-avatar-item">
          <span class="avatar-badge-wrap">
            <span class="demo-avatar primary">C</span>
            <Badge value="99+" overlap position="top-end" color="success" />
          </span>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.examples-root {
  display: grid;
  gap: 1.5rem;
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

.demo-card ul {
  margin: 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
  color: var(--text-primary);
}

.badge-positions-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 1rem;
  width: 100%;
}

.badge-position-item,
.badge-size-item,
.badge-color-item,
.badge-dot-item,
.badge-avatar-item {
  display: flex;
  justify-content: center;
}

.badge-sizes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 1rem;
  width: 100%;
  align-items: center;
}

.badge-colors-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 1rem;
  width: 100%;
}

.badge-dots-grid,
.badge-avatars-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  gap: 1rem;
  width: 100%;
  align-items: center;
}

.demo-btn,
.demo-btn-small,
.demo-btn-large {
  position: relative;
  width: 100%;
  border: 1px solid var(--border-color);
  background: var(--surface-elevated);
  color: var(--text-primary);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
}

.demo-btn {
  min-width: 100px;
  padding: 0.55rem 0.75rem;
}

.demo-btn-small {
  min-width: 80px;
  padding: 0.45rem 0.65rem;
  font-size: 13px;
}

.demo-btn-large {
  min-width: 100px;
  padding: 0.65rem 0.85rem;
  font-size: 15px;
}

.demo-btn:hover,
.demo-btn:focus-visible,
.demo-btn-small:hover,
.demo-btn-small:focus-visible,
.demo-btn-large:hover,
.demo-btn-large:focus-visible {
  border-color: color-mix(in srgb, var(--accent-color, #7c4dff) 60%, var(--border-color) 40%);
  box-shadow: 0 8px 20px rgba(124, 77, 255, 0.16);
  transform: translateY(-1px);
}

.avatar-badge-wrap {
  position: relative;
  display: inline-flex;
}

.demo-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #e2e8f0;
  color: #475569;
  font-size: 16px;
  font-weight: 600;
}

.demo-avatar.large {
  width: 56px;
  height: 56px;
  font-size: 20px;
}

.demo-avatar.primary {
  background: var(--primary-color);
  color: #ffffff;
}

:root[data-theme="dark"] .demo-card {
  background: var(--dark-surface-2);
  border-color: var(--dark-border);
}

:root[data-theme="dark"] .demo-card ul,
:root[data-theme="dark"] .demo-btn,
:root[data-theme="dark"] .demo-btn-small,
:root[data-theme="dark"] .demo-btn-large {
  color: var(--dark-text-primary);
}

:root[data-theme="dark"] .demo-btn,
:root[data-theme="dark"] .demo-btn-small,
:root[data-theme="dark"] .demo-btn-large {
  background: var(--dark-surface-3);
  border-color: var(--dark-border);
}

@media (max-width: 600px) {
  .badge-positions-grid,
  .badge-sizes-grid {
    grid-template-columns: 1fr;
  }

  .badge-colors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
