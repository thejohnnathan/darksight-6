<template>
  <section class="themes-page">
    <header class="hero">
      <div class="header-subtitle">UI Component Library</div>
      <h2 class="header-title">Themes</h2>
      <p>
        Themes define the visual foundation of the system through color, contrast, and surface tokens.
        Use consistent theme variables to support branding, accessibility, and light/dark experiences.
      </p>
    </header>

    <article class="theme-preview-card">
      <header class="theme-preview-header theme-preview-header--light">
        <h3 class="theme-preview-title theme-preview-title--light">Light Theme</h3>
        <p class="theme-preview-subtitle theme-preview-subtitle--light">Clean · Neutral · Airy</p>
      </header>

      <div class="theme-preview-grid">
        <div class="theme-pane theme-pane--light">
          <h4 class="theme-pane-title theme-pane-title--light">Core palette</h4>
          <div class="theme-color-row">
            <div class="theme-color-chip theme-color-chip--light theme-color-chip--light-bg">
              <div class="theme-swatch" style="background: #ffffff"></div>
              <p class="theme-swatch-label theme-swatch-label--light">Background</p>
            </div>
            <div class="theme-color-chip theme-color-chip--light theme-color-chip--light-surface">
              <div class="theme-swatch" style="background: #f8fafc"></div>
              <p class="theme-swatch-label theme-swatch-label--light">Surface</p>
            </div>
            <div class="theme-color-chip theme-color-chip--light theme-color-chip--light-primary">
              <div class="theme-swatch" style="background: var(--primary-color)"></div>
              <p class="theme-swatch-label theme-swatch-label--light">Primary</p>
            </div>
            <div class="theme-color-chip theme-color-chip--light theme-color-chip--light-success">
              <div class="theme-swatch" style="background: #22c55e"></div>
              <p class="theme-swatch-label theme-swatch-label--light">Success</p>
            </div>
            <div class="theme-color-chip theme-color-chip--light theme-color-chip--light-warning">
              <div class="theme-swatch" style="background: #f59e0b"></div>
              <p class="theme-swatch-label theme-swatch-label--light">Warning</p>
            </div>
            <div class="theme-color-chip theme-color-chip--light theme-color-chip--light-danger">
              <div class="theme-swatch" style="background: #ef4444"></div>
              <p class="theme-swatch-label theme-swatch-label--light">Danger</p>
            </div>
          </div>
        </div>

        <div class="theme-pane theme-pane--light">
          <h4 class="theme-pane-title theme-pane-title--light">Component preview</h4>
          <div class="theme-ui-row">
            <button class="theme-btn-dark theme-btn-light--primary">Primary action</button>
            <button class="theme-btn-dark theme-btn-light--ghost">Secondary</button>
          </div>
          <ul class="theme-token-list theme-token-list--light">
            <li><code>--background-color</code> for app backgrounds</li>
            <li><code>--toolbar-bg</code> and neutral surfaces for containers</li>
            <li><code>--text-color</code> with muted grays for hierarchy</li>
            <li><code>--primary-color</code> and states for actions/focus</li>
          </ul>
        </div>
      </div>
    </article>

    <article class="theme-preview-card theme-preview-card--dark">
      <header class="theme-preview-header">
        <h3 class="theme-preview-title">Dark Theme</h3>
        <p class="theme-preview-subtitle">Accessible · Modern · High contrast</p>
      </header>

      <div class="theme-preview-grid">
        <div class="theme-pane">
          <h4 class="theme-pane-title">Core palette</h4>
          <div class="theme-color-row">
            <div class="theme-color-chip">
              <div class="theme-swatch" style="background: var(--dark-bg)"></div>
              <p class="theme-swatch-label">Background</p>
            </div>
            <div class="theme-color-chip">
              <div class="theme-swatch" style="background: var(--dark-surface-2)"></div>
              <p class="theme-swatch-label">Surface</p>
            </div>
            <div class="theme-color-chip">
              <div class="theme-swatch" style="background: var(--dark-primary)"></div>
              <p class="theme-swatch-label">Primary</p>
            </div>
            <div class="theme-color-chip">
              <div class="theme-swatch" style="background: var(--dark-success)"></div>
              <p class="theme-swatch-label">Success</p>
            </div>
            <div class="theme-color-chip">
              <div class="theme-swatch" style="background: var(--dark-warning)"></div>
              <p class="theme-swatch-label">Warning</p>
            </div>
            <div class="theme-color-chip">
              <div class="theme-swatch" style="background: var(--dark-danger)"></div>
              <p class="theme-swatch-label">Danger</p>
            </div>
          </div>
        </div>

        <div class="theme-pane">
          <h4 class="theme-pane-title">Component preview</h4>
          <div class="theme-ui-row">
            <button class="theme-btn-dark theme-btn-dark--primary">Primary action</button>
            <button class="theme-btn-dark theme-btn-dark--ghost">Secondary</button>
          </div>
          <ul class="theme-token-list">
            <li><code>--dark-bg</code> for app backgrounds</li>
            <li><code>--dark-surface-*</code> for cards and elevated layers</li>
            <li><code>--dark-text-primary</code> and <code>--dark-text-secondary</code> for typography</li>
            <li><code>--dark-primary</code> and states for CTAs and focus accents</li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>
