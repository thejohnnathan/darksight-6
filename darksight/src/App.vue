<script setup></script>

<template>
  <main>
    <header class="heading-panel"></header>
    <aside class="navigation-panel">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </aside>
    <div class="container">
    <h1>Button Component</h1>
    <div class="card">
      <p>
        <button>Submit<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg></button>
      </p>
      <p>
        <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg>Submit</button>
      </p>
      <p>
        <button class="btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg>Submit</button>
      </p>
      <p>
        <button disabled>Submit</button>
      </p>
      <p>
        <button class="btn-small">Submit</button>
      </p>
      <p>
        <button class="btn-medium">Submit</button>
      </p>
      <p>
        <button class="btn-large">Submit</button>
      </p>
      <p>
        <button class="btn-outline">Submit</button>
      </p>
      <p>
        <button class="btn-icon-only"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg></button>
      </p>
      <p>
        <button class="btn-outline"><svg class="divided" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg>Submit</button>
      </p>
      <div class="btn-group">
        <button class="btn">One</button>
        <button class="btn">Two</button>
        <button class="btn">Three</button>
      </div>
    </div>
    </div>
  </main>
</template>

<style scoped></style>
