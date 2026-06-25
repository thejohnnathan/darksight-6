<template>
  <section class="tabs-page">
    <header class="hero">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Tabs</h2>
    <p>
      Tabs organize related content into separate views without leaving the current context.
      Use clear labels and active states so users can switch sections confidently.
    </p>
    </header>

    <div class="tabs-demo-stack">
      <article class="tabs-example">
        <div class="tabs-example__index">1</div>
        <div class="tabs-example__content">
          <h4 class="tabs-example__title">Underline tabs</h4>
          <nav class="tabs-row tabs-row--underline" aria-label="Underline tabs example">
            <button class="tabs-item is-active" type="button">Overview</button>
            <button class="tabs-item" type="button">Analytics</button>
            <button class="tabs-item" type="button">Reports</button>
            <button class="tabs-item" type="button">Notifications</button>
            <button class="tabs-item" type="button">Settings</button>
          </nav>
        </div>
      </article>

      <article class="tabs-example">
        <div class="tabs-example__index">2</div>
        <div class="tabs-example__content">
          <h4 class="tabs-example__title">Underline + icon tab</h4>
          <nav class="tabs-row tabs-row--underline" aria-label="Underline icon tabs example">
            <button class="tabs-item is-active tabs-item--icon" type="button">
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M240-200q-33 0-56.5-23.5T160-280v-400q0-33 23.5-56.5T240-760h480q33 0 56.5 23.5T800-680v400q0 33-23.5 56.5T720-200H240Zm0-80h480v-320H240v320Zm0-400h480v-80H240v80Zm0 0v400-400Z"/>
              </svg>
              Dashboard
            </button>
            <button class="tabs-item tabs-item--icon" type="button">
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M140-160v-520h200v520H140Zm240 0v-640h200v640H380Zm240 0v-400h200v400H620Z"/>
              </svg>
              Projects
            </button>
            <button class="tabs-item tabs-item--icon" type="button">
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M80-160v-640h800v640H80Zm80-80h640v-400H160v400Zm320-80 200-140-200-140-200 140 200 140Zm0-240Z"/>
              </svg>
              Messages
            </button>
            <button class="tabs-item tabs-item--icon" type="button">
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240l80 80h240q33 0 56.5 23.5T840-680v480q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H487l-80-80H200v560Zm0 0v-560 560Z"/>
              </svg>
              Files
            </button>
            <button class="tabs-item tabs-item--icon" type="button">
              <svg viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M160-240q-17 0-28.5-11.5T120-280q0-83 83.5-141.5T400-480q113 0 196.5 58.5T680-280q0 17-11.5 28.5T640-240H160Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm320 320v-40q0-45-17.5-85.5T653-436q57 8 92 43.5t35 92.5v60h-60Zm-80-320q0-50-17.5-92.5T573-724q37 4 62 31t25 63q0 36-25 63t-62 31q32-29 49.5-71.5T640-560Z"/>
              </svg>
              Team
            </button>
          </nav>
        </div>
      </article>

      <article class="tabs-example">
        <div class="tabs-example__index">3</div>
        <div class="tabs-example__content">
          <h4 class="tabs-example__title">Pill tabs</h4>
          <nav class="tabs-row tabs-row--pill" aria-label="Pill tabs example">
            <button class="tabs-item is-active" type="button">Profile</button>
            <button class="tabs-item" type="button">Billing</button>
            <button class="tabs-item" type="button">Usage</button>
            <button class="tabs-item" type="button">Security</button>
            <button class="tabs-item" type="button">API keys</button>
          </nav>
        </div>
      </article>

      <article class="tabs-example">
        <div class="tabs-example__index">4</div>
        <div class="tabs-example__content">
          <h4 class="tabs-example__title">Contained tabs</h4>
          <nav class="tabs-row tabs-row--contained" aria-label="Contained tabs example">
            <button class="tabs-item is-active" type="button">Account</button>
            <button class="tabs-item" type="button">Team</button>
            <button class="tabs-item" type="button">Integrations</button>
            <button class="tabs-item" type="button">Domains</button>
            <button class="tabs-item" type="button">Logs</button>
          </nav>
        </div>
      </article>

      <article class="tabs-example">
        <div class="tabs-example__index">5</div>
        <div class="tabs-example__content">
          <h4 class="tabs-example__title">Segmented tabs</h4>
          <nav class="tabs-row tabs-row--segmented" aria-label="Segmented tabs example">
            <button class="tabs-item is-active" type="button">Daily</button>
            <button class="tabs-item" type="button">Weekly</button>
            <button class="tabs-item" type="button">Monthly</button>
            <button class="tabs-item" type="button">Quarterly</button>
            <button class="tabs-item" type="button">Yearly</button>
          </nav>
        </div>
      </article>

      <article class="tabs-example">
        <div class="tabs-example__index">6</div>
        <div class="tabs-example__content">
          <h4 class="tabs-example__title">Soft background tabs</h4>
          <nav class="tabs-row tabs-row--soft" aria-label="Soft tabs example">
            <button class="tabs-item is-active" type="button">General</button>
            <button class="tabs-item" type="button">Members</button>
            <button class="tabs-item" type="button">Permissions</button>
            <button class="tabs-item" type="button">Audit</button>
            <button class="tabs-item" type="button">Advanced</button>
          </nav>
        </div>
      </article>
    </div>
  </section>
</template>
