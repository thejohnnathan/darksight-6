<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import DsTooltip from "./components/DsTooltip.vue";

const isCollapsed = ref(false);
const isComponentsOpen = ref(false);
const componentsDropdownRef = ref(null);
const isDarkMode = ref(false);
const route = useRoute();
const navTooltip = ref({
  visible: false,
  text: "",
  top: 0,
  left: 0,
});

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
  navTooltip.value.visible = false;
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
    navTooltip.value.visible = false;
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
    "M440-320h80v-80h-80v80Zm40-160q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Z"
};

const groupedComponentLinks = [
  { to: "/button", label: "Button" },
  { to: "/input", label: "Input" },
  { to: "/radio-button", label: "Radio Button" },
  { to: "/search-input", label: "Search Input" },
  { to: "/card", label: "Card" },
  { to: "/chip", label: "Chip" }
];

const groupedNavigationLinks = [
  { to: "/tabs", label: "Tabs" },
  { to: "/breadcrumb", label: "Breadcrumb" },
  { to: "/pagination", label: "Pagination" },
  { to: "/stepper", label: "Stepper" }
];

const groupedFeedbackLinks = [
  { to: "/badge", label: "Badge" },
  { to: "/snackbar", label: "Snackbar" },
  { to: "/tooltip", label: "Tooltip" }
];

const isHomeRoute = computed(() => route.path === "/");

const currentBreadcrumb = computed(() => {
  const label = route.meta?.breadcrumbLabel || "Page";
  const iconKey = route.meta?.breadcrumbIcon || "documentation";

  return {
    label,
    iconPath: breadcrumbIconPathMap[iconKey] || breadcrumbIconPathMap.documentation,
  };
});

const showNavTooltip = (label, event) => {
  if (!isCollapsed.value) return;
  const target = event?.currentTarget;
  if (!target) return;
  const rect = target.getBoundingClientRect();
  navTooltip.value = {
    visible: true,
    text: label,
    top: rect.top + rect.height / 2,
    left: rect.right + 12,
  };
};

const hideNavTooltip = () => {
  navTooltip.value.visible = false;
};

watch(isDarkMode, (value) => {
  document.documentElement.setAttribute("data-theme", value ? "dark" : "light");
});

watch(isCollapsed, (value) => {
  if (!value) hideNavTooltip();
});

onMounted(() => {
  document.documentElement.setAttribute("data-theme", isDarkMode.value ? "dark" : "light");
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleDocumentKeydown);
  window.addEventListener("resize", hideNavTooltip);
  window.addEventListener("scroll", hideNavTooltip, true);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
  document.removeEventListener("keydown", handleDocumentKeydown);
  window.removeEventListener("resize", hideNavTooltip);
  window.removeEventListener("scroll", hideNavTooltip, true);
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
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
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
            <RouterLink
              to="/getting-started"
              class="nav-link"
              active-class="active"
              @mouseenter="showNavTooltip('Getting Started', $event)"
              @mouseleave="hideNavTooltip"
              @focus="showNavTooltip('Getting Started', $event)"
              @blur="hideNavTooltip"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h320v-80H240v80Zm-40 400q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
              <span class="link-label">Getting Started</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/documentation"
              class="nav-link"
              active-class="active"
              @mouseenter="showNavTooltip('Documentation', $event)"
              @mouseleave="hideNavTooltip"
              @focus="showNavTooltip('Documentation', $event)"
              @blur="hideNavTooltip"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm0-160h200v-80H320v80Zm-120 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360l280 280v360q0 33-23.5 56.5T760-120H200Z"/></svg>
              <span class="link-label">Documentation</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/themes"
              class="nav-link"
              active-class="active"
              @mouseenter="showNavTooltip('Themes', $event)"
              @mouseleave="hideNavTooltip"
              @focus="showNavTooltip('Themes', $event)"
              @blur="hideNavTooltip"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-177 23q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm120-160q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm200 0q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm120 160q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg>
              <span class="link-label">Themes</span>
            </RouterLink>
          </li>
          <li class="nav-section-label">Components</li>
          <li>
            <DsTooltip text="Badge" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/badge"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Badge', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Badge', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-480Zm-400 0q0-88 34-163t93-130q59-55 136-83.5T508-879q17 2 27 14.5t7 29.5q-3 17-16.5 27t-30.5 9q-69-3-129.5 19.5T259-713q-46 44-72.5 103.5T160-480q0 134 93 227t227 93q69 0 128.5-26.5T712-259q46-48 68-109t19-127q-1-17 9-30.5t27-16.5q17-3 29.5 7t14.5 27q6 87-22.5 164T774-208q-57 62-133 95T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480Zm640-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                <span class="link-label">Badge</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Button" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/button"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Button', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Button', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-40h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm-130 40v-320 320Z"/></svg>
                <span class="link-label">Button</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Chip" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/chip"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Chip', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Chip', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-40h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm-130 40v-320 320Z"/></svg>
                <span class="link-label">Chip</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Breadcrumb" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/breadcrumb"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Breadcrumb', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Breadcrumb', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M760-360q-51 0-85.5-34.5T640-480q0-51 34.5-85.5T760-600q51 0 85.5 34.5T880-480q0 51-34.5 85.5T760-360Zm-400 80-56-57 103-103H80v-80h327L304-624l56-56 200 200-200 200Z"/></svg>
                <span class="link-label">Breadcrumb</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Card" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/card"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Card', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Card', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Zm0-80h560v-480H200v480Zm0 0v-480 480Z"/></svg>
                <span class="link-label">Card</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Inputs" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/input"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Input', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Input', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M280-160v-80h400v80H280Zm-80-160q-33 0-56.5-23.5T120-400v-320q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v320q0 33-23.5 56.5T760-320H200Zm0-80h560v-320H200v320Zm0 0v-320 320Z"/></svg>
                <span class="link-label">Input</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Pagination" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/pagination"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Pagination', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Pagination', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M120-280v-80h80v80h-80Zm160 0v-80h120v80H280Zm200 0v-80h120v80H480Zm200 0v-80h160v80H680ZM120-440v-80h160v80H120Zm240 0v-80h240v80H360Zm320 0v-80h160v80H680Z"/></svg>
                <span class="link-label">Pagination</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Radio Button" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/radio-button"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Radio Button', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Radio Button', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm0 200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280Zm0-240q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Z"/></svg>
                <span class="link-label">Radio Button</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Search Input" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/search-input"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Search Input', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Search Input', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                <span class="link-label">Search Input</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Snackbar" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/snackbar"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Snackbar', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Snackbar', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M240-240h480v-80H240v80Zm-40 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                <span class="link-label">Snackbar</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Stepper" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/stepper"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Stepper', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Stepper', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M115-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm113.5-56.5Q240-463 240-480t-11.5-28.5Q217-520 200-520t-28.5 11.5Q160-497 160-480t11.5 28.5Q183-440 200-440t28.5-11.5ZM395-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm113.5-56.5Q520-463 520-480t-11.5-28.5Q497-520 480-520t-28.5 11.5Q440-497 440-480t11.5 28.5Q463-440 480-440t28.5-11.5ZM675-395q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Z"/></svg>
                <span class="link-label">Stepper</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Tabs" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/tabs"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Tabs', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Tabs', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-280H200v280Zm0-360h560v-200H200v200Zm280-80h240v-80H480v80Zm-280 80v-200 200Z"/></svg>
                <span class="link-label">Tabs</span>
              </RouterLink>
            </DsTooltip>
          </li>
          <li>
            <DsTooltip text="Tooltip" placement="right" :disabled="isCollapsed" class="nav-tooltip-wrap">
              <RouterLink
                to="/tooltip"
                class="nav-link"
                active-class="active"
                @mouseenter="showNavTooltip('Tooltip', $event)"
                @mouseleave="hideNavTooltip"
                @focus="showNavTooltip('Tooltip', $event)"
                @blur="hideNavTooltip"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M440-320h80v-80h-80v80Zm40-160q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Z"/></svg>
                <span class="link-label">Tooltip</span>
              </RouterLink>
            </DsTooltip>
          </li>
        </ul>
      </nav>
    </aside>

    <Teleport to="body">
      <div
        v-if="navTooltip.visible && isCollapsed"
        class="nav-tooltip-portal"
        :style="{ top: `${navTooltip.top}px`, left: `${navTooltip.left}px` }"
        role="tooltip"
      >
        {{ navTooltip.text }}
      </div>
    </Teleport>

    <section class="container" :class="{ 'container-collapsed': isCollapsed }">
      <nav class="page-breadcrumb page-breadcrumb--icon-chevron" aria-label="Page breadcrumb">
        <RouterLink to="/" class="page-breadcrumb__item">
          <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M480-80q-134 0-227-93t-93-227v-200q0-122 96-201t224-79q128 0 224 79t96 201v520H480Z"
            />
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

<style scoped>
.brand svg,
.nav-panel-brand svg {
  color: #ffffff;
  position: relative;
  z-index: 1;
}

.brand svg {
  width: 1.3rem;
  height: 1.3rem;
}

.nav-panel-brand svg {
  width: 1.05rem;
  height: 1.05rem;
}

.nav-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.nav-panel-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-width: 0;
  color: inherit;
  text-decoration: none;
}

.brand,
.nav-panel-brand {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.brand::before,
.nav-panel-brand::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 1.9rem;
  height: 1.9rem;
  transform: translateY(-50%);
  border-radius: 10px;
  background: linear-gradient(100deg, #5f46ff 0%, #3b82f6 38%, #7c4dff 62%, #d946ef 100%);
  box-shadow: 0 6px 14px rgba(95, 70, 255, 0.24);
  flex-shrink: 0;
}

.brand svg,
.nav-panel-brand svg {
  margin-left: 0.42rem;
}

.nav-panel-brand svg {
  flex-shrink: 0;
}

.nav-panel-brand-name {
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
}

.navigation-panel.collapsed .nav-panel-header {
  justify-content: center;
  flex-direction: column;
  gap: 0;
}

.navigation-panel.collapsed .nav-panel-brand {
  width: 36px;
  height: 36px;
  justify-content: center;
  padding-left: 0;
}

.navigation-panel.collapsed .nav-panel-brand::before {
  left: 50%;
  transform: translate(-50%, -50%);
}

.navigation-panel.collapsed .nav-panel-brand svg {
  margin-left: 0;
}

.navigation-panel.collapsed .nav-panel-brand-name {
  display: none;
}

.top-dropdown-group-label {
  margin: 6px 8px 2px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--toolbar-muted-text, #8693a8);
}

:deep(.nav-tooltip-wrap) {
  display: flex;
  width: 100%;
  position: relative;
}

:deep(.nav-tooltip-wrap .ds-tooltip) {
  display: flex;
  width: 100%;
}

:deep(.nav-tooltip-wrap .ds-tooltip-trigger) {
  display: flex;
  width: 100%;
}

.nav-tooltip-portal {
  position: fixed;
  z-index: 3000;
  pointer-events: none;
  transform: translateY(-50%);
  background: color-mix(in srgb, var(--surface-elevated, #1e1f27) 92%, black 8%);
  color: var(--text-primary, #ffffff);
  border: 1px solid color-mix(in srgb, var(--border-color, #ffffff) 12%, transparent 88%);
  border-radius: 8px;
  padding: 0.35rem 0.6rem;
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.01em;
  white-space: nowrap;
  box-shadow: 0 10px 22px rgba(10, 10, 20, 0.24);
}
</style>
