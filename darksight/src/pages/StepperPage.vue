<template>
  <section class="stepper-page">
    <div class="header-subtitle">UI Component Library</div>
    <h1 class="header-title">Stepper</h1>
    <p>
      Steppers break complex workflows into clear, sequential stages so users understand progress and next actions.
      Use them for multi-step tasks where order, completion state, and guidance matter.
    </p>

    <div class="stepper-demo-stack">
      <article class="stepper-example">
        <div class="stepper-example__label">01.</div>
        <div class="stepper-dotline">
          <div class="stepper-dotline__item is-done">
            <span class="stepper-dotline__dot"></span>
            <span class="stepper-dotline__text">Business type</span>
          </div>
          <div class="stepper-dotline__item is-current">
            <span class="stepper-dotline__dot"></span>
            <span class="stepper-dotline__text">Business detail</span>
          </div>
          <div class="stepper-dotline__item">
            <span class="stepper-dotline__dot"></span>
            <span class="stepper-dotline__text">Your details</span>
          </div>
          <div class="stepper-dotline__item">
            <span class="stepper-dotline__dot"></span>
            <span class="stepper-dotline__text">Bank details</span>
          </div>
          <div class="stepper-dotline__item">
            <span class="stepper-dotline__dot"></span>
            <span class="stepper-dotline__text">Statement</span>
          </div>
          <div class="stepper-dotline__item">
            <span class="stepper-dotline__dot"></span>
            <span class="stepper-dotline__text">Verification</span>
          </div>
        </div>
      </article>

      <article class="stepper-example">
        <div class="stepper-example__label">02.</div>
        <div class="stepper-numbered">
          <div class="stepper-numbered__line"></div>
          <div class="stepper-numbered__item is-done">
            <span class="stepper-numbered__marker">✓</span>
            <strong>Business type</strong>
            <span>Support text</span>
          </div>
          <div class="stepper-numbered__item is-current">
            <span class="stepper-numbered__marker">02</span>
            <strong>Business details</strong>
            <span>Support text</span>
          </div>
          <div class="stepper-numbered__item">
            <span class="stepper-numbered__marker">03</span>
            <strong>Your details</strong>
            <span>Support text</span>
          </div>
          <div class="stepper-numbered__item">
            <span class="stepper-numbered__marker">04</span>
            <strong>Bank details</strong>
            <span>Support text</span>
          </div>
          <div class="stepper-numbered__item">
            <span class="stepper-numbered__marker">05</span>
            <strong>Statement</strong>
            <span>Support text</span>
          </div>
        </div>
      </article>

      <article class="stepper-example">
        <div class="stepper-example__label">03.</div>
        <div class="stepper-icon-tabs-wrap">
          <div class="stepper-icon-tabs">
            <div class="stepper-icon-tabs__item is-active">
              <span class="stepper-icon-tabs__icon" aria-hidden="true">
                <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                  <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h400l240 240v400q0 33-23.5 56.5T720-120H160Zm360-520v-160H160v560h560v-400H520ZM240-320h400v-80H240v80Zm0-160h400v-80H240v80Zm280-200h120L520-800v120Z"/>
                </svg>
              </span>
              <strong>Personal info</strong>
              <span>Support text</span>
            </div>
            <div class="stepper-icon-tabs__item is-current">
              <span class="stepper-icon-tabs__icon" aria-hidden="true">
                <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                  <path d="m640-280 136-136-56-56-80 80v-208h-80v208l-80-80-56 56 136 136Zm-400 40q-83 0-141.5-58.5T40-440q0-83 58.5-141.5T240-640h36q14-109 96.5-184.5T560-900q109 0 192.5 67T880-660q66 8 113 57t47 115q0 72-50 122t-122 50H760q-17 0-28.5-11.5T720-360q0-17 11.5-28.5T760-400h108q39 0 65.5-26.5T960-492q0-39-26.5-65.5T868-584h-28v-76q0-83-58.5-141.5T640-860q-83 0-141.5 58.5T440-660v20h-40q-66 0-113 47t-47 113q0 66 47 113t113 47h120q17 0 28.5 11.5T560-280q0 17-11.5 28.5T520-240H240Z"/>
                </svg>
              </span>
              <strong>Social accounts</strong>
              <span>Support text</span>
            </div>
            <div class="stepper-icon-tabs__item">
              <span class="stepper-icon-tabs__icon" aria-hidden="true">
                <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                  <path d="M80-200v-80h112q11-35 27.5-68t39.5-60l-80-80 56-56 80 80q27-23 60-39.5t68-27.5v-112h80v112q35 11 68 27.5t60 39.5l80-80 56 56-80 80q23 27 39.5 60t27.5 68h112v80H808q-11 35-27.5 68T741-72l80 80-56 56-80-80q-27 23-60 39.5T557 51v112h-80V51q-35-11-68-27.5T349-16l-80 80-56-56 80-80q-23-27-39.5-60T226-200H80Zm400 120q83 0 141.5-58.5T680-280q0-83-58.5-141.5T480-480q-83 0-141.5 58.5T280-280q0 83 58.5 141.5T480-80Zm0-120q-33 0-56.5-23.5T400-280q0-33 23.5-56.5T480-360q33 0 56.5 23.5T560-280q0 33-23.5 56.5T480-200Z"/>
                </svg>
              </span>
              <strong>Integrations</strong>
              <span>Support text</span>
            </div>
            <div class="stepper-icon-tabs__item">
              <span class="stepper-icon-tabs__icon" aria-hidden="true">
                <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                  <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720ZM160-560h640v-160H160v160Zm0 80v240h640v-240H160Zm120 160h160v-80H280v80Z"/>
                </svg>
              </span>
              <strong>Payment info</strong>
              <span>Support text</span>
            </div>
          </div>
          <div class="stepper-icon-tabs__progress">
            <span style="width: 33%"></span>
          </div>
        </div>
      </article>

      <article class="stepper-example">
        <div class="stepper-example__label">04.</div>
        <div class="stepper-status">
          <div class="stepper-status__line"></div>
          <div class="stepper-status__item is-done">
            <span class="stepper-status__dot"></span>
            <small>Step 1</small>
            <strong>Personal info</strong>
            <em>Completed</em>
          </div>
          <div class="stepper-status__item is-current">
            <span class="stepper-status__dot"></span>
            <small>Step 2</small>
            <strong>Social accounts</strong>
            <em>In progress</em>
          </div>
          <div class="stepper-status__item">
            <span class="stepper-status__dot"></span>
            <small>Step 3</small>
            <strong>Payment info</strong>
            <em>Pending</em>
          </div>
          <div class="stepper-status__item">
            <span class="stepper-status__dot"></span>
            <small>Step 4</small>
            <strong>Payment info</strong>
            <em>Pending</em>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
