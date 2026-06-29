<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import Tooltip from "./components/Tooltip.vue";

const isCollapsed = ref(false);
const isComponentsOpen = ref(false);
const componentsDropdownRef = ref(null);
const isDarkMode = ref(false);
const route = useRoute();

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleComponentsMenu = () => {
  isComponentsOpen.value = !isComponentsOpen.value;
};

const closeComponentsMenu = () => {
  isComponentsOpen.value = false;
};

const handleDocumentClick = (event) => {
  if (!componentsDropdownRef.value) return;
  if (!componentsDropdownRef.value.contains(event.target)) {
    closeComponentsMenu();
  }
};

const handleDocumentKeydown = (event) => {
  if (event.key === "Escape") {
    closeComponentsMenu();
  }
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

const breadcrumbIconPathMap = {
  "getting-started":
    "M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h320v-80H240v80Zm-40 400q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",
  documentation:
    "M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm0-160h200v-80H320v80Zm-120 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360l280 280v360q0 33-23.5 56.5T760-120H200Z",
  themes:
    "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Z",
  buttons:
    "M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Z",
  breadcrumb:
    "M760-360q-51 0-85.5-34.5T640-480q0-51 34.5-85.5T760-600q51 0 85.5 34.5T880-480q0 51-34.5 85.5T760-360Zm-400 80-56-57 103-103H80v-80h327L304-624l56-56 200 200-200 200Z",
  card: "M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Z",
  inputs:
    "M280-160v-80h400v80H280Zm-80-160q-33 0-56.5-23.5T120-400v-320q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320q0 33-23.5 56.5T760-320H200Z",
  pagination:
    "M120-280v-80h80v80h-80Zm160 0v-80h120v80H280Zm200 0v-80h120v80H480Zm200 0v-80h160v80H680ZM120-440v-80h160v80H120Zm240 0v-80h240v80H360Zm320 0v-80h160v80H680Z",
  "radio-buttons":
    "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z",
  "search-input":
    "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56Z",
  snackbar:
    "M240-240h480v-80H240v80Zm-40 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",
  stepper:
    "M115-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm280 0q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm280 0q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Z",
  tabs:
    "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z",
  tooltip:
    "M440-320h80v-80h-80v80Zm40-160q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Z",
};

const navItems = [
  { to: "/badge", label: "Badge", ariaLabel: "Badge", iconPath: breadcrumbIconPathMap.badge || breadcrumbIconPathMap.documentation },
  { to: "/button", label: "Button", ariaLabel: "Button", iconPath: breadcrumbIconPathMap.buttons },
  { to: "/chip", label: "Chip", ariaLabel: "Chip", iconPath: breadcrumbIconPathMap.card },
  { to: "/breadcrumb", label: "Breadcrumb", ariaLabel: "Breadcrumb", iconPath: breadcrumbIconPathMap.breadcrumb },
  { to: "/card", label: "Card", ariaLabel: "Card", iconPath: breadcrumbIconPathMap.card },
  { to: "/input", label: "Input", ariaLabel: "Inputs", iconPath: breadcrumbIconPathMap.inputs },
  { to: "/pagination", label: "Pagination", ariaLabel: "Pagination", iconPath: breadcrumbIconPathMap.pagination },
  { to: "/radio-button", label: "Radio Button", ariaLabel: "Radio Button", iconPath: breadcrumbIconPathMap["radio-buttons"] },
  { to: "/search-input", label: "Search Input", ariaLabel: "Search Input", iconPath: breadcrumbIconPathMap["search-input"] },
  { to: "/snackbar", label: "Snackbar", ariaLabel: "Snackbar", iconPath: breadcrumbIconPathMap.snackbar },
  { to: "/stepper", label: "Stepper", ariaLabel: "Stepper", iconPath: breadcrumbIconPathMap.stepper },
  { to: "/tabs", label: "Tabs", ariaLabel: "Tabs", iconPath: breadcrumbIconPathMap.tabs },
  { to: "/tooltip", label: "Tooltip", ariaLabel: "Tooltip", iconPath: breadcrumbIconPathMap.tooltip },
];

const groupedComponentLinks = [
  { to: "/button", label: "Button" },
  { to: "/input", label: "Input" },
  { to: "/radio-button", label: "Radio Button" },
  { to: "/search-input", label: "Search Input" },
  { to: "/card", label: "Card" },
  { to: "/chip", label: "Chip" },
];

const groupedNavigationLinks = [
  { to: "/tabs", label: "Tabs" },
  { to: "/breadcrumb", label: "Breadcrumb" },
  { to: "/pagination", label: "Pagination" },
  { to: "/stepper", label: "Stepper" },
];

const groupedFeedbackLinks = [
  { to: "/badge", label: "Badge" },
  { to: "/snackbar", label: "Snackbar" },
  { to: "/tooltip", label: "Tooltip" },
];

const isHomeRoute = computed(() => route.path === "/");

const currentBreadcrumb = computed(() => {
  const label = route.meta?.breadcrumbLabel || "Page";
  const iconKey =
    route.meta?.breadcrumbIconKey ||
    route.path.replace(/^\//, "").replace(/\/.*/, "") ||
    "documentation";

  return {
    label,
    iconPath: breadcrumbIconPathMap[iconKey] || breadcrumbIconPathMap.documentation,
  };
});

watch(isDarkMode, (value) => {
  document.documentElement.setAttribute("data-theme", value ? "dark" : "light");
});

onMounted(() => {
  document.documentElement.setAttribute("data-theme", isDarkMode.value ? "dark" : "light");
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
    <header class="heading-panel glass">
      <div class="top-nav">
        <RouterLink to="/" class="brand" aria-label="Darksight home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v520H480Zm0-80h80q-19-25-29.5-55.5T520-280v-42q-10 1-20 1.5t-20 .5q-67 0-129.5-23.5T240-415v15q0 100 70 170t170 70Zm120-120q0 50 35 85t85 35v-255q-26 26-56 44.5T600-340v60ZM440-560q0-66-45-111t-109-48q-22 24-34 54t-12 65q0 89 72.5 144.5T480-400q95 0 167.5-55.5T720-600q0-35-12-65.5T674-720q-64 2-109 48t-45 112h-80Zm-128.5-11.5Q300-583 300-600t11.5-28.5Q323-640 340-640t28.5 11.5Q380-617 380-600t-11.5 28.5Q357-560 340-560t-28.5-11.5Zm280 0Q580-583 580-600t11.5-28.5Q603-640 620-640t28.5 11.5Q660-617 660-600t-11.5 28.5Q637-560 620-560t-28.5-11.5ZM370-778q34 14 62 37t48 52q20-29 47.5-52t61.5-37q-25-11-52.5-16.5T480-800q-29 0-56.5 5.5T370-778Zm430 618H520h280Zm-320 0q-100 0-170-70t-70-170q0 100 70 170t170 70h80-80Zm120-120q0 50 35 85t85 35q-50 0-85-35t-35-85ZM480-689Z"/>
          </svg>
          <span class="brand-name">Darksight</span>
        </RouterLink>

        <nav class="top-nav-links" aria-label="Primary">
          <RouterLink to="/getting-started" class="top-link">Getting Started</RouterLink>
          <RouterLink to="/documentation" class="top-link">Docs</RouterLink>
          <div class="top-dropdown" ref="componentsDropdownRef">
            <button
              type="button"
              class="top-link top-link-dropdown top-link-dropdown-trigger"
              :aria-expanded="isComponentsOpen ? 'true' : 'false'"
              aria-haspopup="true"
              @click="toggleComponentsMenu"
            >
              <span>Components</span>
              <svg class="dropdown-chevron" :class="{ open: isComponentsOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </button>

            <div v-if="isComponentsOpen" class="top-dropdown-menu" role="menu" aria-label="Components menu">
              <p class="top-dropdown-group-label">Components</p>
              <RouterLink v-for="item in groupedComponentLinks" :key="item.to" :to="item.to" class="top-dropdown-item" role="menuitem">{{ item.label }}</RouterLink>
              <p class="top-dropdown-group-label">Navigation</p>
              <RouterLink v-for="item in groupedNavigationLinks" :key="item.to" :to="item.to" class="top-dropdown-item" role="menuitem">{{ item.label }}</RouterLink>
              <p class="top-dropdown-group-label">Feedback</p>
              <RouterLink v-for="item in groupedFeedbackLinks" :key="item.to" :to="item.to" class="top-dropdown-item" role="menuitem">{{ item.label }}</RouterLink>
            </div>
          </div>
          <RouterLink to="/themes" class="top-link">Themes</RouterLink>
        </nav>

        <div class="top-nav-actions">
          <button
            type="button"
            class="theme-toggle-btn"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <span class="material-symbols-outlined" aria-hidden="true">{{ isDarkMode ? "light_mode" : "dark_mode" }}</span>
          </button>
          <button type="button" class="btn btn-outline">Log in</button>
          <button type="button" class="btn btn-primary">Sign up</button>
        </div>
      </div>
    </header>

    <aside class="navigation-panel" :class="{ collapsed: isCollapsed }">
      <div class="nav-panel-header">
        <RouterLink to="/" class="nav-panel-brand" aria-label="Darksight home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v520H480Zm0-80h80q-19-25-29.5-55.5T520-280v-42q-10 1-20 1.5t-20 .5q-67 0-129.5-23.5T240-415v15q0 100 70 170t170 70Zm120-120q0 50 35 85t85 35v-255q-26 26-56 44.5T600-340v60ZM440-560q0-66-45-111t-109-48q-22 24-34 54t-12 65q0 89 72.5 144.5T480-400q95 0 167.5-55.5T720-600q0-35-12-65.5T674-720q-64 2-109 48t-45 112h-80Zm-128.5-11.5Q300-583 300-600t11.5-28.5Q323-640 340-640t28.5 11.5Q380-617 380-600t-11.5 28.5Q357-560 340-560t-28.5-11.5Zm280 0Q580-583 580-600t11.5-28.5Q603-640 620-640t28.5 11.5Q660-617 660-600t-11.5 28.5Q637-560 620-560t-28.5-11.5ZM370-778q34 14 62 37t48 52q20-29 47.5-52t61.5-37q-25-11-52.5-16.5T480-800q-29 0-56.5 5.5T370-778Zm430 618H520h280Zm-320 0q-100 0-170-70t-70-170q0 100 70 170t170 70h80-80Zm120-120q0 50 35 85t85 35q-50 0-85-35t-35-85ZM480-689Z"/>
          </svg>
          <span v-if="!isCollapsed" class="nav-panel-brand-name">Darksight</span>
        </RouterLink>
        <button class="nav-collapse-btn" type="button" @click="toggleSidebar" :aria-label="isCollapsed ? 'Expand navigation' : 'Collapse navigation'">
          <svg v-if="isCollapsed" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
      </div>

      <nav>
        <ul>
          <li class="nav-section-label">MAIN</li>
          <li>
            <Tooltip v-if="isCollapsed" text="Getting Started" placement="right">
              <RouterLink
                to="/getting-started"
                class="nav-link"
                active-class="active"
                aria-label="Getting Started"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h320v-80H240v80Zm-40 400q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
                <span class="link-label">Getting Started</span>
              </RouterLink>
            </Tooltip>
            <RouterLink
              v-else
              to="/getting-started"
              class="nav-link"
              active-class="active"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h320v-80H240v80Zm-40 400q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
              <span class="link-label">Getting Started</span>
            </RouterLink>
          </li>
          <li>
            <Tooltip v-if="isCollapsed" text="Documentation" placement="right">
              <RouterLink
                to="/documentation"
                class="nav-link"
                active-class="active"
                aria-label="Documentation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm0-160h200v-80H320v80Zm-120 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360l280 280v360q0 33-23.5 56.5T760-120H200Z"/></svg>
                <span class="link-label">Documentation</span>
              </RouterLink>
            </Tooltip>
            <RouterLink
              v-else
              to="/documentation"
              class="nav-link"
              active-class="active"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm0-160h200v-80H320v80Zm-120 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360l280 280v360q0 33-23.5 56.5T760-120H200Z"/></svg>
              <span class="link-label">Documentation</span>
            </RouterLink>
          </li>
          <li>
            <Tooltip v-if="isCollapsed" text="Themes" placement="right">
              <RouterLink
                to="/themes"
                class="nav-link"
                active-class="active"
                aria-label="Themes"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Z"/></svg>
                <span class="link-label">Themes</span>
              </RouterLink>
            </Tooltip>
            <RouterLink
              v-else
              to="/themes"
              class="nav-link"
              active-class="active"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Z"/></svg>
              <span class="link-label">Themes</span>
            </RouterLink>
          </li>

          <li class="nav-section-label">Components</li>
          <li v-for="item in navItems" :key="item.to">
            <Tooltip v-if="isCollapsed" :text="item.ariaLabel" placement="right">
              <RouterLink
                :to="item.to"
                class="nav-link"
                active-class="active"
                :aria-label="item.ariaLabel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
                  <path :d="item.iconPath" />
                </svg>
                <span class="link-label">{{ item.label }}</span>
              </RouterLink>
            </Tooltip>
            <RouterLink
              v-else
              :to="item.to"
              class="nav-link"
              active-class="active"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
                <path :d="item.iconPath" />
              </svg>
              <span class="link-label">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <section class="container" :class="{ 'container-collapsed': isCollapsed }">
      <nav class="page-breadcrumb page-breadcrumb--icon-chevron" aria-label="Page breadcrumb">
        <RouterLink to="/" class="page-breadcrumb__item">
          <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v520H480Z" />
          </svg>
          <span>Home</span>
        </RouterLink>
        <template v-if="!isHomeRoute">
          <span class="page-breadcrumb__chevron" aria-hidden="true">›</span>
          <span class="page-breadcrumb__item is-current" aria-current="page">
            <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path :d="currentBreadcrumb.iconPath" />
            </svg>
            <span>{{ currentBreadcrumb.label }}</span>
          </span>
        </template>
      </nav>
      <RouterView />
    </section>
  </main>
</template>
