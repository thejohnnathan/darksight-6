<template>
  <section>
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Card</h2>
    <p>
      Cards group related information and actions into flexible containers that improve scanability.
      Use them to present content blocks with clear hierarchy, spacing, and optional actions.
    </p>

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
  </section>
</template>
