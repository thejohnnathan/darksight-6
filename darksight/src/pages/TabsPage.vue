<template>
  <section class="tabs-page">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Tabs</h2>

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
            <button class="tabs-item" type="button">Projects</button>
            <button class="tabs-item" type="button">Messages</button>
            <button class="tabs-item" type="button">Files</button>
            <button class="tabs-item" type="button">Team</button>
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
