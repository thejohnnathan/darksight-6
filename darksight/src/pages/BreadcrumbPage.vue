<template>
  <section class="breadcrumb-page">
    <header class="hero">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Breadcrumb</h2>
    <p>
      Breadcrumbs show a clear path through hierarchy and help users navigate back to previous levels.
      Keep labels concise and reflect the current location with a distinct active state.
    </p>
    </header>

    <div class="breadcrumb-demo-stack">
      <article class="breadcrumb-example">
        <div class="breadcrumb-example__index">1</div>
        <div class="breadcrumb-example__content">
          <h4 class="breadcrumb-example__title">Classic chevron</h4>
          <nav class="breadcrumb-row breadcrumb-row--chevron" aria-label="Classic breadcrumb">
            <a href="#" class="breadcrumb-item breadcrumb-item--icon" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M240-200h160v-240h160v240h160v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H480v-240h-80v240H160Zm320-350Z"/>
              </svg>
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <a href="#" class="breadcrumb-item" @click.prevent>My courses</a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <a href="#" class="breadcrumb-item" @click.prevent>Course name</a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <a href="#" class="breadcrumb-item is-current" @click.prevent aria-current="page">Resources</a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <span class="breadcrumb-item is-muted">Icons</span>
          </nav>
        </div>
      </article>

      <article class="breadcrumb-example">
        <div class="breadcrumb-example__index">2</div>
        <div class="breadcrumb-example__content">
          <h4 class="breadcrumb-example__title">Icon + chevron</h4>
          <nav class="breadcrumb-row breadcrumb-row--icon-chevron" aria-label="Icon breadcrumb">
            <a href="#" class="breadcrumb-item breadcrumb-item--icon-left" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M240-200h160v-240h160v240h160v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H480v-240h-80v240H160Zm320-350Z"/></svg>
              Home
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <a href="#" class="breadcrumb-item breadcrumb-item--icon-left" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M120-120v-720h320v240h400v480H120Zm80-80h560v-320H360v-240H200v560Zm160-400h400-400Z"/></svg>
              My courses
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <a href="#" class="breadcrumb-item breadcrumb-item--icon-left is-current" @click.prevent aria-current="page">
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h320v-80H240v80Zm-40 400q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
              Course
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
            <span class="breadcrumb-item is-muted">Resources</span>
          </nav>
        </div>
      </article>

      <article class="breadcrumb-example">
        <div class="breadcrumb-example__index">3</div>
        <div class="breadcrumb-example__content">
          <h4 class="breadcrumb-example__title">Slash breadcrumb</h4>
          <nav class="breadcrumb-row breadcrumb-row--slash" aria-label="Slash breadcrumb">
            <a href="#" class="breadcrumb-item breadcrumb-item--icon-left" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M160-200v-560h80v560h-80Zm180 0v-560h80v560h-80Zm180 0v-560h80v560h-80Zm180 0v-560h80v560h-80Z"/></svg>
              Cart
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">/</span>
            <a href="#" class="breadcrumb-item breadcrumb-item--icon-left" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M240-200q-33 0-56.5-23.5T160-280v-320h80v320h480v-320h80v320q0 33-23.5 56.5T720-200H240Zm240-440L280-440l-56-56 256-256 256 256-56 56-200-200Z"/></svg>
              Delivery
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">/</span>
            <a href="#" class="breadcrumb-item breadcrumb-item--icon-left is-current" @click.prevent aria-current="page">
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M480-80q-17 0-28.5-11.5T440-120v-160H280q-17 0-28.5-11.5T240-320v-320q0-17 11.5-28.5T280-680h400q17 0 28.5 11.5T720-640v320q0 17-11.5 28.5T680-280H520v160q0 17-11.5 28.5T480-80Zm-160-280h320v-240H320v240Z"/></svg>
              Services
            </a>
            <span class="breadcrumb-separator" aria-hidden="true">/</span>
            <span class="breadcrumb-item is-muted">Billing</span>
          </nav>
        </div>
      </article>

      <article class="breadcrumb-example">
        <div class="breadcrumb-example__index">4</div>
        <div class="breadcrumb-example__content">
          <h4 class="breadcrumb-example__title">Connected steps</h4>
          <div class="breadcrumb-steps-line" role="list" aria-label="Connected steps breadcrumb">
            <div class="breadcrumb-step is-done" role="listitem">
              <span class="breadcrumb-step__dot">✓</span>
              <span class="breadcrumb-step__label">Cart</span>
            </div>
            <div class="breadcrumb-step is-done" role="listitem">
              <span class="breadcrumb-step__dot">✓</span>
              <span class="breadcrumb-step__label">Delivery</span>
            </div>
            <div class="breadcrumb-step is-current" role="listitem">
              <span class="breadcrumb-step__dot"></span>
              <span class="breadcrumb-step__label">Services</span>
            </div>
            <div class="breadcrumb-step" role="listitem">
              <span class="breadcrumb-step__dot"></span>
              <span class="breadcrumb-step__label">Billing</span>
            </div>
            <div class="breadcrumb-step" role="listitem">
              <span class="breadcrumb-step__dot"></span>
              <span class="breadcrumb-step__label">Overview</span>
            </div>
          </div>
        </div>
      </article>

      <article class="breadcrumb-example">
        <div class="breadcrumb-example__index">5</div>
        <div class="breadcrumb-example__content">
          <h4 class="breadcrumb-example__title">Dot progress</h4>
          <div class="breadcrumb-progress" aria-label="Dot progress breadcrumb">
            <div class="breadcrumb-progress__rail"></div>
            <div class="breadcrumb-progress__fill" style="width: 52%"></div>
            <div class="breadcrumb-progress__steps">
              <div class="breadcrumb-progress__step is-done">Cart</div>
              <div class="breadcrumb-progress__step is-done">Delivery</div>
              <div class="breadcrumb-progress__step is-current">Services</div>
              <div class="breadcrumb-progress__step">Billing</div>
              <div class="breadcrumb-progress__step">Overview</div>
            </div>
          </div>
        </div>
      </article>

      <article class="breadcrumb-example">
        <div class="breadcrumb-example__index">6</div>
        <div class="breadcrumb-example__content">
          <h4 class="breadcrumb-example__title">Pill breadcrumb</h4>
          <nav class="breadcrumb-pills" aria-label="Pill breadcrumb">
            <a href="#" class="breadcrumb-pill" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M160-200v-80h80v80h-80Zm80-160v-80h320v80H240Zm0-160v-80h480v80H240Zm0-160v-80h560v80H240Z"/></svg>
              Cart
            </a>
            <a href="#" class="breadcrumb-pill" @click.prevent>
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M120-200v-560h80v560h-80Zm160 0v-560h80v560h-80Zm160 0v-560h80v560h-80Zm160 0v-560h80v560h-80Z"/></svg>
              Delivery
            </a>
            <a href="#" class="breadcrumb-pill is-active" @click.prevent aria-current="page">
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M480-80q-17 0-28.5-11.5T440-120v-160H280q-17 0-28.5-11.5T240-320v-320q0-17 11.5-28.5T280-680h400q17 0 28.5 11.5T720-640v320q0 17-11.5 28.5T680-280H520v160q0 17-11.5 28.5T480-80Zm-160-280h320v-240H320v240Z"/></svg>
              Services
            </a>
            <span class="breadcrumb-pill is-muted">
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
              Billing
            </span>
            <span class="breadcrumb-pill is-muted">
              <svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M120-280v-80h720v80H120Zm0-160v-80h720v80H120Z"/></svg>
              Overview
            </span>
          </nav>
        </div>
      </article>
    </div>
  </section>
</template>
