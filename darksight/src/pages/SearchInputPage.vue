<template>
  <section class="search-page">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Search Input</h2>

    <div class="search-demo">
      <div class="search-row">
        <span class="search-index">1</span>
        <div class="search-card search-card--soft">
          <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
          </svg>
          <input type="text" placeholder="What are your searching for?" />
          <button class="icon-btn icon-btn--ghost" type="button" aria-label="Voice search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 14a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3Zm5-3a1 1 0 0 1 2 0 7 7 0 0 1-6 6.92V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3.08A7 7 0 0 1 5 11a1 1 0 1 1 2 0 5 5 0 1 0 10 0Z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="search-row">
        <span class="search-index">2</span>
        <div class="search-card search-card--action">
          <input type="text" placeholder="What are your searching for?" />
          <button class="search-action-square" type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="search-row">
        <span class="search-index">3</span>
        <div class="search-card search-card--menu">
          <button class="icon-btn icon-btn--ghost menu-btn" type="button" aria-label="Menu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            </svg>
          </button>
          <span class="menu-divider" aria-hidden="true"></span>
          <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
          </svg>
          <input type="text" placeholder="What are your searching for?" />
        </div>
      </div>

      <div class="search-row">
        <span class="search-index">4</span>
        <div class="search-line">
          <div class="search-card search-card--pill">
            <input type="text" placeholder="What are your searching for?" />
          </div>
          <button class="search-circle-btn" type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="search-row">
        <span class="search-index">5</span>
        <div class="search-card search-card--label-btn">
          <input type="text" placeholder="What are your searching for?" />
          <button class="search-text-btn" type="button">Search</button>
        </div>
      </div>

      <div class="search-row">
        <span class="search-index">6</span>
        <div class="search-underlined">
          <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.49 20.49 19 15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" />
          </svg>
          <input type="text" placeholder="What are your searching for?" />
          <button class="icon-btn icon-btn--ghost" type="button" aria-label="Voice search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 14a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3Zm5-3a1 1 0 0 1 2 0 7 7 0 0 1-6 6.92V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3.08A7 7 0 0 1 5 11a1 1 0 1 1 2 0 5 5 0 1 0 10 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.search-page {
  width: 100%;
}

.search-demo {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  max-width: 980px;
}

.search-row {
  display: grid;
  grid-template-columns: 44px minmax(260px, 1fr);
  gap: 16px;
  align-items: center;
}

.search-index {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: #ede9ff;
  color: #5f46ff;
  font-size: 13px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
}

.search-card {
  min-height: 60px;
  border: 1px solid #edf1f7;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
  display: flex;
  align-items: center;
  width: 100%;
}

.search-card input,
.search-underlined input {
  border: 0;
  outline: none;
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: #1f2937;
  font-family: inherit;
  line-height: 1.1;
}

.search-card input::placeholder,
.search-underlined input::placeholder {
  color: #9aa3b2;
}

.search-icon {
  width: 26px;
  height: 26px;
  fill: #8a94a5;
  flex-shrink: 0;
}

.icon-btn {
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 34px;
  min-width: 34px;
  height: 34px;
  padding: 0;
  color: #8a94a5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-btn svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.icon-btn:hover {
  background: #f2f4fa;
  box-shadow: none;
}

.icon-btn--ghost:focus-visible {
  outline: 2px solid rgba(95, 70, 255, 0.3);
  outline-offset: 2px;
  border-radius: 8px;
}

.search-card--soft {
  gap: 10px;
  padding: 0 14px;
}

.search-card--action {
  padding: 0 8px 0 18px;
  gap: 10px;
}

.search-action-square {
  width: 46px;
  min-width: 46px;
  height: 46px;
  border-radius: 8px;
  border: 0;
  background: #5f46ff;
  color: #ffffff;
  box-shadow: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.search-action-square svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.search-action-square:hover {
  background: #715bff;
  box-shadow: none;
}

.search-card--menu {
  padding: 0 14px 0 8px;
  gap: 10px;
}

.menu-btn {
  width: 36px;
  min-width: 36px;
  height: 36px;
}

.menu-divider {
  width: 1px;
  height: 34px;
  background: #d6dbe7;
  flex-shrink: 0;
}

.search-line {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-card--pill {
  border-radius: 999px;
  padding: 0 18px;
}

.search-circle-btn {
  width: 58px;
  min-width: 58px;
  height: 58px;
  border-radius: 999px;
  border: 0;
  background: #5f46ff;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 22px rgba(95, 70, 255, 0.25);
  padding: 0;
}

.search-circle-btn svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.search-circle-btn:hover {
  background: #715bff;
}

.search-card--label-btn {
  padding: 0 8px 0 18px;
  gap: 12px;
}

.search-text-btn {
  min-width: 112px;
  height: 46px;
  border-radius: 8px;
  border: 0;
  background: #5f46ff;
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  line-height: 1;
  box-shadow: none;
}

.search-text-btn:hover {
  background: #715bff;
  box-shadow: none;
}

.search-underlined {
  min-height: 54px;
  border-bottom: 2px solid #cfd6e4;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 6px;
  width: 100%;
}

.search-underlined:focus-within {
  border-bottom-color: #6a5cff;
}

@media (max-width: 992px) {
  .search-card input,
  .search-underlined input,
  .search-text-btn {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .search-row {
    grid-template-columns: 34px 1fr;
    gap: 10px;
  }

  .search-index {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  .search-card,
  .search-underlined {
    min-height: 50px;
  }

  .search-card input,
  .search-underlined input,
  .search-text-btn {
    font-size: 17px;
  }

  .search-action-square,
  .search-text-btn {
    height: 40px;
    min-width: 88px;
    font-size: 17px;
  }

  .search-circle-btn {
    width: 48px;
    min-width: 48px;
    height: 48px;
  }

  .search-text-btn {
    min-width: 88px;
  }
}
</style>
