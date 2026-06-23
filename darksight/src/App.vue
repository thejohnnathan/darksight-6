<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

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
        <a href="#" class="brand" aria-label="Modulus home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v520H480Zm0-80h80q-19-25-29.5-55.5T520-280v-42q-10 1-20 1.5t-20 .5q-67 0-129.5-23.5T240-415v15q0 100 70 170t170 70Zm120-120q0 50 35 85t85 35v-255q-26 26-56 44.5T600-340v60ZM440-560q0-66-45-111t-109-48q-22 24-34 54t-12 65q0 89 72.5 144.5T480-400q95 0 167.5-55.5T720-600q0-35-12-65.5T674-720q-64 2-109 48t-45 112h-80Zm-128.5-11.5Q300-583 300-600t11.5-28.5Q323-640 340-640t28.5 11.5Q380-617 380-600t-11.5 28.5Q357-560 340-560t-28.5-11.5Zm280 0Q580-583 580-600t11.5-28.5Q603-640 620-640t28.5 11.5Q660-617 660-600t-11.5 28.5Q637-560 620-560t-28.5-11.5ZM370-778q34 14 62 37t48 52q20-29 47.5-52t61.5-37q-25-11-52.5-16.5T480-800q-29 0-56.5 5.5T370-778Zm430 618H520h280Zm-320 0q-100 0-170-70t-70-170q0 100 70 170t170 70h80-80Zm120-120q0 50 35 85t85 35q-50 0-85-35t-35-85ZM480-689Z"/>
          </svg>
          <span class="brand-name">Darksight</span>
        </a>

        <nav class="top-nav-links" aria-label="Primary">
          <div class="top-dropdown" ref="solutionsDropdownRef">
            <button
              type="button"
              class="top-link top-link-dropdown top-link-dropdown-trigger"
              :aria-expanded="isSolutionsOpen ? 'true' : 'false'"
              aria-haspopup="true"
              @click="toggleSolutionsMenu"
            >
              <span>Solutions</span>
              <svg class="dropdown-chevron" :class="{ open: isSolutionsOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
              </svg>
            </button>

            <div v-if="isSolutionsOpen" class="top-dropdown-menu" role="menu" aria-label="Solutions menu">
              <a href="#" class="top-dropdown-item" role="menuitem">Overview</a>
              <a href="#" class="top-dropdown-item" role="menuitem">Analytics</a>
              <a href="#" class="top-dropdown-item" role="menuitem">Automation</a>
              <a href="#" class="top-dropdown-item" role="menuitem">Integrations</a>
            </div>
          </div>
          <a href="#" class="top-link">About us</a>
          <a href="#" class="top-link">Pricing</a>
          <a href="#" class="top-link">Resources</a>
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
          <li class="nav-section-label">Main</li>
          <li>
            <a href="#" class="nav-link active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M226-186h143v-260h222v260h143v-392L480-770 226-578v392Zm-71 71v-499l325-245 325 245v499H520v-260H440v260H155Zm325-353Z"/></svg>
              <span class="link-label">Home</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M207-134q-31 0-52-21t-21-52v-546q0-31 21-52t52-21h546q31 0 52 21t21 52v546q0 31-21 52t-52 21H207Zm0-71h546v-546H207v546Zm130-77h286v-71H337v71Zm-130-130h546v-71H207v71Zm130-130h286v-71H337v71Zm-130-130h546v-71H207v71Zm0-199v546-546Z"/></svg>
              <span class="link-label">Orders</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M226-115q-31 0-52-21t-21-52v-583q0-31 21-52t52-21h377l203 203v453q0 31-21 52t-52 21H226Zm0-71h507v-346H566v-238H226v584Zm269-381Zm-90 310h149q15 0 25-10t10-25q0-15-10-25t-25-10H405q-15 0-25 10t-10 25q0 15 10 25t25 10Zm0-128h149q15 0 25-10t10-25q0-15-10-25t-25-10H405q-15 0-25 10t-10 25q0 15 10 25t25 10Zm0-128h59q15 0 25-10t10-25q0-15-10-25t-25-10h-59q-15 0-25 10t-10 25q0 15 10 25t25 10Z"/></svg>
              <span class="link-label">Documentation</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M550-186h231v-231H550v231Zm0-302h231v-231H550v231Zm-302 302h231v-231H248v231Zm0-302h231v-231H248v231Zm-72 445q-30 0-52-22t-22-52v-730q0-30 22-52t52-22h730q30 0 52 22t22 52v730q0 30-22 52t-52 22H176Zm0-72h730v-730H176v730Zm0-730v730-730Z"/></svg>
              <span class="link-label">Map Overview</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M175-172v-466h71v466h-71Zm269 0v-616h71v616h-71Zm269 0v-296h71v296h-71Z"/></svg>
              <span class="link-label">Statistics</span>
            </a>
          </li>

          <li class="nav-section-label">Communication</li>
          <li>
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M198-106q-37 0-63-26t-26-63v-495q0-37 26-63t63-26h565q37 0 63 26t26 63v495q0 37-26 63t-63 26H198Zm282-299L180-596v401h600v-401L480-405Zm0-71 300-190H180l300 190Zm-300-190v470-470Z"/></svg>
              <span class="link-label">Inbox</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M210-99q-30 0-52-22t-22-52v-614q0-30 22-52t52-22h540q30 0 52 22t22 52v614q0 30-22 52t-52 22H210Zm0-71h540v-614H210v614Zm270-305Zm-93 108 223-223-50-51-172 172-77-78-51 51 127 129Zm0-185 223-223-50-51-172 172-77-78-51 51 127 129Z"/></svg>
              <span class="link-label">Couriers</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <section class="container" :class="{ 'container-collapsed': isCollapsed }">
      <div class="header-subtitle">Components</div>
      <h1 class="header-title">Button Styles</h1>
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
        <button class="btn-soft">Submit</button>
      </p>
      <p>
        <button class="btn-icon-only"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg></button>
      </p>
      <p>
        <button class="btn-outline"><svg class="divided" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg>Submit</button>
      </p>
      <h4 class="heading-with-line">Button Groups</h4>
      <div>
      <div class="btn-group">
        <button class="btn">One</button>
        <button class="btn">Two</button>
        <button class="btn">Three</button>
      </div>
    </div>
  </section>
  </main>
</template>

<style scoped></style>
