<template>
  <section class="radio-page">
    <header class="hero">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Radio Button</h2>
    <p>
      Radio buttons let users choose a single option from a defined set of mutually exclusive choices.
      Present options clearly and ensure selection states remain obvious and accessible.
    </p>
    </header>

    <div class="radio-demo-grid">
      <div class="radio-column">
        <div class="radio-column-chip">States</div>

        <div class="radio-example-row">
          <div class="radio-index">1</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Not active</h4>
            <label class="radio-line">
              <span class="radio-control" aria-hidden="true"></span>
              <span class="radio-label-text">Option 1</span>
            </label>
          </div>
        </div>

        <div class="radio-example-row">
          <div class="radio-index">2</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Active</h4>
            <label class="radio-line">
              <span class="radio-control is-selected" aria-hidden="true"></span>
              <span class="radio-label-text">Option 1</span>
            </label>
          </div>
        </div>

        <div class="radio-example-row">
          <div class="radio-index">3</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Active</h4>
            <label class="radio-line">
              <span class="radio-control is-selected-outline" aria-hidden="true"></span>
              <span class="radio-label-text">Option 1</span>
            </label>
          </div>
        </div>

        <div class="radio-example-row">
          <div class="radio-index">4</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Disabled</h4>
            <label class="radio-line is-disabled">
              <span class="radio-control is-disabled" aria-hidden="true"></span>
              <span class="radio-label-text">Option 1</span>
            </label>
          </div>
        </div>
      </div>

      <div class="radio-column">
        <div class="radio-column-chip">Inspiration</div>

        <div class="radio-example-row">
          <div class="radio-index">1</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Classics</h4>
            <label class="radio-line">
              <span class="radio-control is-selected" aria-hidden="true"></span>
              <span class="radio-label-text">Option 1</span>
            </label>
          </div>
        </div>

        <div class="radio-example-row">
          <div class="radio-index">2</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Classics with background</h4>
            <label class="radio-line radio-soft-box">
              <span class="radio-control is-selected" aria-hidden="true"></span>
              <span class="radio-label-text">Option 1</span>
            </label>
          </div>
        </div>

        <div class="radio-example-row">
          <div class="radio-index">3</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">Contained + icon</h4>
            <label class="radio-line radio-contained-box">
              <span class="radio-control is-selected" aria-hidden="true"></span>
              <span class="radio-label-text">Credit card</span>
              <span class="radio-trailing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.8" />
                  <path d="M3 10.5H21" stroke="currentColor" stroke-width="1.8" />
                </svg>
              </span>
            </label>
          </div>
        </div>

        <div class="radio-example-row">
          <div class="radio-index">4</div>
          <div class="radio-example-content">
            <h4 class="radio-example-title">With illustration</h4>
            <label class="radio-line radio-contained-box radio-contained-illustration">
              <span class="radio-control is-selected" aria-hidden="true"></span>
              <span class="radio-label-text">Credit card</span>
              <span class="radio-illustration" aria-hidden="true">
                <span class="card-layer card-layer-back"></span>
                <span class="card-layer card-layer-mid"></span>
                <span class="card-layer card-layer-front"></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
