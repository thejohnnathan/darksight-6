<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isCollapsed = ref(false);
const isSolutionsOpen = ref(false);
const solutionsDropdownRef = ref(null);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleSolutionsMenu = () => {
  isSolutionsOpen.value = !isSolutionsOpen.value;
};

const closeSolutionsMenu = () => {
  isSolutionsOpen.value = false;
};

const handleDocumentClick = (event) => {
  if (!solutionsDropdownRef.value) return;
  if (!solutionsDropdownRef.value.contains(event.target)) {
    closeSolutionsMenu();
  }
};

const handleDocumentKeydown = (event) => {
  if (event.key === "Escape") {
    closeSolutionsMenu();
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleDocumentKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
  document.removeEventListener("keydown", handleDocumentKeydown);
});
</script>

<template>
  <main>
    <header class="heading-panel">
      <div class="top-nav">
        <RouterLink to="/buttons" class="brand" aria-label="Modulus home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v520H480Zm0-80h80q-19-25-29.5-55.5T520-280v-42q-10 1-20 1.5t-20 .5q-67 0-129.5-23.5T240-415v15q0 100 70 170t170 70Zm120-120q0 50 35 85t85 35v-255q-26 26-56 44.5T600-340v60ZM440-560q0-66-45-111t-109-48q-22 24-34 54t-12 65q0 89 72.5 144.5T480-400q95 0 167.5-55.5T720-600q0-35-12-65.5T674-720q-64 2-109 48t-45 112h-80Zm-128.5-11.5Q300-583 300-600t11.5-28.5Q323-640 340-640t28.5 11.5Q380-617 380-600t-11.5 28.5Q357-560 340-560t-28.5-11.5Zm280 0Q580-583 580-600t11.5-28.5Q603-640 620-640t28.5 11.5Q660-617 660-600t-11.5 28.5Q637-560 620-560t-28.5-11.5ZM370-778q34 14 62 37t48 52q20-29 47.5-52t61.5-37q-25-11-52.5-16.5T480-800q-29 0-56.5 5.5T370-778Zm430 618H520h280Zm-320 0q-100 0-170-70t-70-170q0 100 70 170t170 70h80-80Zm120-120q0 50 35 85t85 35q-50 0-85-35t-35-85ZM480-689Z"/>
          </svg>
          <span class="brand-name">Darksight</span>
        </RouterLink>

        <nav class="top-nav-links" aria-label="Primary">
          <div class="top-dropdown" ref="solutionsDropdownRef">
            <button
              type="button"
              class="top-link top-link-dropdown top-link-dropdown-trigger"
              :aria-expanded="isSolutionsOpen ? 'true' : 'false'"
              aria-haspopup="true"
              @click="toggleSolutionsMenu"
            >
              <span>Components</span>
              <svg class="dropdown-chevron" :class="{ open: isSolutionsOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
              </svg>
            </button>

            <div v-if="isSolutionsOpen" class="top-dropdown-menu" role="menu" aria-label="Components menu">
              <RouterLink to="/buttons" class="top-dropdown-item" role="menuitem">Buttons</RouterLink>
              <RouterLink to="/card" class="top-dropdown-item" role="menuitem">Card</RouterLink>
              <RouterLink to="/inputs" class="top-dropdown-item" role="menuitem">Inputs</RouterLink>
              <RouterLink to="/pagination" class="top-dropdown-item" role="menuitem">Pagination</RouterLink>
            </div>
          </div>
          <RouterLink to="/documentation" class="top-link">Documentation</RouterLink>
          <RouterLink to="/getting-started" class="top-link">Getting Started</RouterLink>
          <RouterLink to="/themes" class="top-link">Themes</RouterLink>
        </nav>

        <div class="top-nav-actions">
          <button type="button" class="btn btn-outline">Log in</button>
          <button type="button" class="btn btn-primary">Sign up</button>
        </div>
      </div>
    </header>
    <aside class="navigation-panel" :class="{ collapsed: isCollapsed }">
      <button class="nav-collapse-btn" type="button" @click="toggleSidebar" :aria-label="isCollapsed ? 'Expand navigation' : 'Collapse navigation'">
        <svg v-if="isCollapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </button>

      <nav>
        <ul>
          <li class="nav-section-label">Components</li>
          <li>
            <RouterLink to="/buttons" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-40h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm-130 40v-320 320Z"/></svg>
              <span class="link-label">Buttons</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/card" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Zm0-80h560v-480H200v480Zm0 0v-480 480Z"/></svg>
              <span class="link-label">Card</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/inputs" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M280-160v-80h400v80H280Zm-80-160q-33 0-56.5-23.5T120-400v-320q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320q0 33-23.5 56.5T760-320H200Zm0-80h560v-320H200v320Zm0 0v-320 320Z"/></svg>
              <span class="link-label">Inputs</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/pagination" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M120-280v-80h80v80h-80Zm160 0v-80h120v80H280Zm200 0v-80h120v80H480Zm200 0v-80h160v80H680ZM120-440v-80h160v80H120Zm240 0v-80h240v80H360Zm320 0v-80h160v80H680Z"/></svg>
              <span class="link-label">Pagination</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/radio-buttons" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm0 200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280Zm0-240q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Z"/></svg>
              <span class="link-label">Radio Buttons</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/search-input" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              <span class="link-label">Search Input</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/snackbar" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M240-240h480v-80H240v80Zm-40 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
              <span class="link-label">Snackbar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/stepper" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M115-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm113.5-56.5Q240-463 240-480t-11.5-28.5Q217-520 200-520t-28.5 11.5Q160-497 160-480t11.5 28.5Q183-440 200-440t28.5-11.5ZM395-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm113.5-56.5Q520-463 520-480t-11.5-28.5Q497-520 480-520t-28.5 11.5Q440-497 440-480t11.5 28.5Q463-440 480-440t28.5-11.5ZM675-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Z"/></svg>
              <span class="link-label">Stepper</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/tabs" class="nav-link" active-class="active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-280H200v280Zm0-360h560v-200H200v200Zm280-80h240v-80H480v80Zm-280 80v-200 200Z"/></svg>
              <span class="link-label">Tabs</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
    <section class="container" :class="{ 'container-collapsed': isCollapsed }">
      <RouterView />
    </section>
  </main>
</template>

<style scoped></style>
