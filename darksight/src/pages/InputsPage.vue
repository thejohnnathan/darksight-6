<template>
  <section class="inputs-page">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Inputs</h2>

    <h4 class="heading-with-line">Text Input Variants</h4>
    <div class="inputs-demo">
      <div class="input-row">
        <span class="input-index">1</span>
        <div class="input-example">
          <label class="input-label" for="variant-default">Label</label>
          <input id="variant-default" type="text" class="ds-input" placeholder="e.g. placeholder" />
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">2</span>
        <div class="input-example">
          <label class="input-label" for="variant-icon">Label</label>
          <div class="input-with-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5Z" />
            </svg>
            <input id="variant-icon" type="text" class="ds-input ds-input-icon" placeholder="e.g. placeholder" />
          </div>
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">3</span>
        <div class="input-example">
          <fieldset class="outlined-fieldset">
            <legend>Label</legend>
            <input type="text" class="ds-input ds-input-outlined" placeholder="e.g. placeholder" />
          </fieldset>
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">4</span>
        <div class="input-example">
          <label class="input-label" for="variant-underline">Label</label>
          <input id="variant-underline" type="text" class="ds-input ds-input-underline" placeholder="e.g. placeholder" />
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">5</span>
        <div class="input-example input-inline">
          <label class="input-label-inline" for="variant-inline">Label:</label>
          <input id="variant-inline" type="text" class="ds-input" placeholder="e.g. placeholder" />
        </div>
      </div>
    </div>

    <h4 class="heading-with-line">Text Field States</h4>
    <div class="inputs-demo">
      <div class="input-row">
        <span class="input-index">1</span>
        <div class="input-example">
          <label class="input-label" for="state-default">Default</label>
          <input id="state-default" type="text" class="ds-input" placeholder="e.g. placeholder" />
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">2</span>
        <div class="input-example">
          <label class="input-label" for="state-hover">Hover</label>
          <input id="state-hover" type="text" class="ds-input is-hover" placeholder="e.g. placeholder" />
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">3</span>
        <div class="input-example">
          <label class="input-label is-focus-label" for="state-typing">Typing</label>
          <input id="state-typing" type="text" class="ds-input is-focus" placeholder="|" />
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">4</span>
        <div class="input-example">
          <label class="input-label" for="state-typed">Typed</label>
          <input id="state-typed" type="text" class="ds-input" value="Lorem ipsum" />
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">5</span>
        <div class="input-example">
          <label class="input-label is-error-label" for="state-error">Error</label>
          <input id="state-error" type="text" class="ds-input is-error" value="Lorem" />
          <p class="input-helper-error">This is concrete error message!</p>
        </div>
      </div>

      <div class="input-row">
        <span class="input-index">6</span>
        <div class="input-example">
          <label class="input-label" for="state-disabled">Disabled</label>
          <input id="state-disabled" type="text" class="ds-input" placeholder="e.g. placeholder" disabled />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inputs-page {
  width: 100%;
}

.inputs-demo {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 40px;
}

.input-row {
  display: grid;
  grid-template-columns: 40px minmax(260px, 1fr);
  align-items: start;
  gap: 16px;
  max-width: 760px;
}

.input-index {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: #e9e8ff;
  color: #4338ca;
  font-size: 13px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
}

.input-example {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-label {
  display: inline-block;
  margin-bottom: 0;
  font-size: 27px;
  font-weight: 700;
  color: #334155;
  line-height: 1;
}

.input-label-inline {
  font-size: 27px;
  font-weight: 700;
  color: #334155;
  line-height: 1;
  white-space: nowrap;
}

.ds-input {
  width: 100%;
  max-width: 560px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #b7c4d6;
  background: #f8fbff;
  padding: 0 16px;
  font-family: inherit;
  font-size: 25px;
  font-weight: 500;
  color: #334155;
  transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
}

.ds-input::placeholder {
  color: #8393a8;
}

.ds-input:hover {
  border-color: #6a5cff;
}

.ds-input:focus {
  outline: none;
  border-color: #7b63ff;
  box-shadow: 0 0 0 3px rgba(95, 70, 255, 0.2);
}

.ds-input:disabled {
  background: #ececf3;
  border-color: #e4e7ef;
  color: #aab2c3;
  cursor: not-allowed;
}

.input-with-icon {
  position: relative;
  width: 100%;
  max-width: 560px;
}

.input-with-icon svg {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  fill: #667085;
  pointer-events: none;
}

.ds-input-icon {
  padding-left: 48px;
}

.outlined-fieldset {
  border: 1px solid #b7c4d6;
  border-radius: 8px;
  padding: 4px 14px 12px;
  max-width: 560px;
  background: #f8fbff;
}

.outlined-fieldset legend {
  font-size: 14px;
  font-weight: 700;
  color: #334155;
  padding: 0 6px;
}

.ds-input-outlined {
  border: 0;
  box-shadow: none;
  background: transparent;
  height: 42px;
  padding: 0 2px;
  max-width: 100%;
}

.ds-input-outlined:focus {
  box-shadow: none;
}

.ds-input-underline {
  border: 0;
  border-bottom: 2px solid #9aa8bb;
  border-radius: 0;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  height: 50px;
}

.ds-input-underline:focus {
  border-bottom-color: #6a5cff;
  box-shadow: none;
}

.input-inline {
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 760px;
  padding-top: 2px;
}
.input-inline .input-label-inline {
  margin-right: 4px;
}

.input-inline .ds-input {
  max-width: 440px;
}

.is-hover {
  border-color: #7b63ff;
  box-shadow: 0 0 0 3px rgba(95, 70, 255, 0.12);
}

.is-focus-label {
  color: #6a5cff;
}

.is-focus {
  border-color: #7b63ff;
  box-shadow: 0 0 0 3px rgba(95, 70, 255, 0.22);
}

.is-error-label {
  color: #e75f5f;
}

.is-error {
  border-color: #f28b82;
  box-shadow: 0 0 0 2px rgba(242, 139, 130, 0.2);
}

.input-helper-error {
  margin-top: 0;
  color: #e75f5f;
  font-size: 20px;
  font-weight: 600;
}

@media (max-width: 992px) {
  .input-label,
  .input-label-inline {
    font-size: 22px;
  }

  .ds-input {
    font-size: 20px;
    height: 52px;
  }

  .input-helper-error {
    font-size: 17px;
  }
}

@media (max-width: 768px) {
  .inputs-demo {
    gap: 20px;
    margin-bottom: 28px;
  }

  .input-row {
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 10px;
  }

  .input-index {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  .input-label,
  .input-label-inline {
    font-size: 18px;
    line-height: 1.2;
  }

  .ds-input {
    font-size: 17px;
    height: 48px;
    padding: 0 12px;
  }

  .input-inline {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .input-inline .input-label-inline {
    white-space: normal;
  }

  .input-inline .ds-input {
    max-width: 100%;
  }

  .input-helper-error {
    font-size: 15px;
  }
}

@media (max-width: 576px) {
  .inputs-demo {
    gap: 16px;
    margin-bottom: 24px;
  }

  .input-row {
    grid-template-columns: 1fr;
    gap: 8px;
    max-width: 100%;
  }

  .input-index {
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 11px;
  }

  .input-label,
  .input-label-inline {
    font-size: 16px;
  }

  .ds-input {
    max-width: 100%;
    font-size: 15px;
    height: 44px;
    border-radius: 7px;
  }

  .input-with-icon svg {
    width: 20px;
    height: 20px;
    left: 12px;
  }

  .ds-input-icon {
    padding-left: 40px;
  }

  .outlined-fieldset {
    max-width: 100%;
    padding: 4px 10px 10px;
  }

  .outlined-fieldset legend {
    font-size: 12px;
    padding: 0 4px;
  }

  .ds-input-outlined {
    height: 38px;
  }

  .ds-input-underline {
    height: 44px;
  }

  .input-helper-error {
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .input-label,
  .input-label-inline {
    font-size: 15px;
  }

  .ds-input {
    font-size: 14px;
    height: 42px;
    padding: 0 10px;
  }

  .input-with-icon svg {
    width: 18px;
    height: 18px;
    left: 10px;
  }

  .ds-input-icon {
    padding-left: 36px;
  }
}
</style>
