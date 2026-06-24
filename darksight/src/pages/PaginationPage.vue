<template>
  <section>
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Pagination</h2>

    <div class="pagination-demo-stack">
      <article class="pagination-card">
        <div class="pagination-row">
          <div class="pagination-group">
            <span class="pagination-label">Page items:</span>
            <button class="pagination-select" type="button">
              10
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </button>
          </div>

          <div class="pagination-group">
            <button class="pagination-icon-btn" type="button" aria-label="Previous page">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="m560-280-200-200 200-200 56 56-144 144 144 144-56 56Z" />
              </svg>
            </button>
            <span class="pagination-results">Results 150 - 160 of 1096</span>
            <button class="pagination-icon-btn" type="button" aria-label="Next page">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M504-480 360-624l56-56 200 200-200 200-56-56 144-144Z" />
              </svg>
            </button>
          </div>

          <div class="pagination-group">
            <span class="pagination-label">Go to:</span>
            <input class="pagination-input" type="text" value="e.g. 102" readonly />
          </div>
        </div>
      </article>

      <article class="pagination-card">
        <div class="pagination-row">
          <span class="pagination-results">Results 150 - 160 of 1096</span>

          <div class="pagination-nav">
            <button class="pagination-text-btn" type="button">Previous</button>
            <button class="pagination-page-btn" type="button">13</button>
            <button class="pagination-page-btn" type="button">14</button>
            <button class="pagination-page-btn is-active" type="button">15</button>
            <button class="pagination-page-btn" type="button">16</button>
            <button class="pagination-page-btn" type="button">17</button>
            <button class="pagination-text-btn" type="button">Next</button>
          </div>

          <div class="pagination-group">
            <span class="pagination-label">Go to:</span>
            <input class="pagination-input" type="text" value="e.g. 102" readonly />
          </div>
        </div>
      </article>

      <article class="pagination-card">
        <div class="pagination-row">
          <span class="pagination-results">Results 150 - 160 of 1096</span>

          <div class="pagination-nav">
            <button class="pagination-icon-btn" type="button" aria-label="Previous page">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="m560-280-200-200 200-200 56 56-144 144 144 144-56 56Z" />
              </svg>
            </button>
            <button class="pagination-page-btn" type="button">13</button>
            <button class="pagination-page-btn" type="button">14</button>
            <button class="pagination-page-btn is-active" type="button">15</button>
            <button class="pagination-page-btn" type="button">16</button>
            <button class="pagination-page-btn" type="button">17</button>
            <button class="pagination-icon-btn" type="button" aria-label="Next page">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M504-480 360-624l56-56 200 200-200 200-56-56 144-144Z" />
              </svg>
            </button>
          </div>

          <div class="pagination-group">
            <span class="pagination-label">Go to:</span>
            <input class="pagination-input" type="text" value="e.g. 102" readonly />
          </div>
        </div>
      </article>

      <article class="pagination-card">
        <div class="pagination-row">
          <div class="pagination-group">
            <span class="pagination-label">Page items:</span>
            <button class="pagination-select" type="button">
              10
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </button>
          </div>

          <div class="pagination-nav">
            <button class="pagination-icon-btn" type="button" aria-label="Previous page">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="m560-280-200-200 200-200 56 56-144 144 144 144-56 56Z" />
              </svg>
            </button>
            <button class="pagination-page-btn" type="button">1</button>
            <span class="pagination-ellipsis">...</span>
            <button class="pagination-page-btn" type="button">14</button>
            <button class="pagination-page-btn is-active" type="button">15</button>
            <button class="pagination-page-btn" type="button">16</button>
            <button class="pagination-page-btn" type="button">...</button>
            <button class="pagination-page-btn" type="button">110</button>
            <button class="pagination-icon-btn" type="button" aria-label="Next page">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
                <path d="M504-480 360-624l56-56 200 200-200 200-56-56 144-144Z" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
