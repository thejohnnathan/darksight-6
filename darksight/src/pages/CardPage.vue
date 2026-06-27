<template>
  <section>
    <header class="hero">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Card</h2>
    <p>
      Cards group related information and actions into flexible containers that improve scanability.
      Use them to present content blocks with clear hierarchy, spacing, and optional actions.
    </p>
    </header>

    <section class="profile-card-section">
      <article class="profile-card">
        <div class="profile-card__image-wrap">
          <img
            class="profile-card__image"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
            alt="Profile portrait"
          />
        </div>

        <div class="profile-card__content">
          <h3 class="profile-card__name">Sarah Rivera</h3>
          <p class="profile-card__role">
            Product Designer at <a href="https://example.com" target="_blank" rel="noopener">Design Studio</a>
          </p>

          <div class="profile-card__tags">
            <span class="profile-card__tag">UI</span>
            <span class="profile-card__tag">UX</span>
            <span class="profile-card__tag">Figma</span>
            <span class="profile-card__tag">Design Systems</span>
          </div>

          <p class="profile-card__bio">
            Passionate about crafting intuitive interfaces and scalable design systems for digital products.
          </p>

          <div class="profile-card__actions">
            <button class="profile-card__btn profile-card__btn-secondary">Message</button>
            <button class="profile-card__btn profile-card__btn-primary">View Profile</button>
          </div>
        </div>
      </article>
    </section>

    <section class="card-showcase">
      <article class="feature-card">
        <div class="feature-card__media">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating in a modern workspace"
          />
        </div>
        <div class="feature-card__body">
          <span class="feature-card__label">Featured Story</span>
          <h3 class="feature-card__title">Designing faster product launches with a unified card system</h3>
          <p class="feature-card__text">
            Learn how teams standardize visual structure with reusable card templates for editorial and product content.
          </p>
          <div class="feature-card__actions">
            <button class="feature-card__btn feature-card__btn-ghost">Read Later</button>
            <button class="feature-card__btn feature-card__btn-primary">Read Article</button>
          </div>
        </div>
      </article>

      <div class="card-grid">
        <article class="product-card">
          <div class="product-card__badge">New</div>
          <h3 class="product-card__title">Aurora Headphones</h3>
          <p class="product-card__subtitle">Wireless Noise Canceling</p>
          <p class="product-card__price">$249.00</p>
          <p class="product-card__text">
            Premium over-ear comfort with adaptive listening profiles for work and travel.
          </p>
          <div class="product-card__actions">
            <button class="product-card__btn product-card__btn-outline">Details</button>
            <button class="product-card__btn product-card__btn-primary">Add to Cart</button>
          </div>
        </article>

        <article class="insight-card">
          <span class="insight-card__eyebrow">Weekly Snapshot</span>
          <h3 class="insight-card__title">Campaign Performance</h3>
          <ul class="insight-card__stats">
            <li><strong>48.2K</strong><span>Impressions</span></li>
            <li><strong>6.9%</strong><span>CTR</span></li>
            <li><strong>1.8K</strong><span>Conversions</span></li>
          </ul>
          <button class="insight-card__cta">View Full Report</button>
        </article>
      </div>
    </section>
  </section>
</template>
