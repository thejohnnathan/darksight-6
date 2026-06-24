<template>
  <section class="home-splash">
    <div class="home-splash__hero">
      <p class="home-splash__eyebrow">Design System</p>
      <h1 class="home-splash__title">Build consistent, beautiful interfaces with Darksight</h1>
      <p class="home-splash__subtitle">
        Darksight is a modern component library and documentation hub built to help teams ship polished UI faster.
        Explore production-ready components, theme support, and implementation guidance in one place.
      </p>

      <div class="home-splash__actions">
        <RouterLink to="/getting-started" class="btn btn-primary">Get Started</RouterLink>
        <RouterLink to="/documentation" class="btn btn-outline">View Documentation</RouterLink>
      </div>
    </div>

    <div class="home-splash__stats" aria-label="Darksight highlights">
      <article class="home-stat-card">
        <p class="home-stat-card__value">15+</p>
        <p class="home-stat-card__label">UI Patterns</p>
      </article>
      <article class="home-stat-card">
        <p class="home-stat-card__value">Theme Ready</p>
        <p class="home-stat-card__label">Light & Dark Modes</p>
      </article>
      <article class="home-stat-card">
        <p class="home-stat-card__value">Vue 3</p>
        <p class="home-stat-card__label">Developer Friendly</p>
      </article>
    </div>

    <div class="home-splash__feature-grid">
      <article class="home-feature-card">
        <h2 class="home-feature-card__title">Professional Foundation</h2>
        <p class="home-feature-card__text">
          Start with opinionated UI primitives that maintain visual consistency across your product.
        </p>
      </article>
      <article class="home-feature-card">
        <h2 class="home-feature-card__title">Fast Integration</h2>
        <p class="home-feature-card__text">
          Navigate clear docs and examples to implement components quickly without compromising quality.
        </p>
      </article>
      <article class="home-feature-card">
        <h2 class="home-feature-card__title">Scalable Theming</h2>
        <p class="home-feature-card__text">
          Use built-in theme tokens and patterns to adapt Darksight to brand and accessibility needs.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
