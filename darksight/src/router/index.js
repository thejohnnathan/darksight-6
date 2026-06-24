import { createRouter, createWebHistory } from 'vue-router'

const appName = 'Darksight'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      breadcrumbLabel: 'Home',
      breadcrumbIcon: 'documentation',
      title: 'Home',
      description: 'Overview and quick start navigation for Darksight components.',
      category: 'main'
    }
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import('../pages/ButtonsPage.vue'),
    meta: {
      breadcrumbLabel: 'Buttons',
      breadcrumbIcon: 'buttons',
      title: 'Buttons',
      description: 'Button variants, states, and icon usage.',
      category: 'components'
    }
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('../pages/CardPage.vue'),
    meta: {
      breadcrumbLabel: 'Card',
      breadcrumbIcon: 'card',
      title: 'Card',
      description: 'Card layouts and content composition examples.',
      category: 'components'
    }
  },
  {
    path: '/inputs',
    name: 'inputs',
    component: () => import('../pages/InputsPage.vue'),
    meta: {
      breadcrumbLabel: 'Inputs',
      breadcrumbIcon: 'inputs',
      title: 'Inputs',
      description: 'Input fields and interaction states.',
      category: 'components'
    }
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('../pages/PaginationPage.vue'),
    meta: {
      breadcrumbLabel: 'Pagination',
      breadcrumbIcon: 'pagination',
      title: 'Pagination',
      description: 'Pagination controls and navigation patterns.',
      category: 'components'
    }
  },
  {
    path: '/radio-buttons',
    name: 'radio-buttons',
    component: () => import('../pages/RadioButtonsPage.vue'),
    meta: {
      breadcrumbLabel: 'Radio Buttons',
      breadcrumbIcon: 'radio-buttons',
      title: 'Radio Buttons',
      description: 'Single-selection controls and grouped options.',
      category: 'components'
    }
  },
  {
    path: '/search-input',
    name: 'search-input',
    component: () => import('../pages/SearchInputPage.vue'),
    meta: {
      breadcrumbLabel: 'Search Input',
      breadcrumbIcon: 'search-input',
      title: 'Search Input',
      description: 'Search field patterns and variants.',
      category: 'components'
    }
  },
  {
    path: '/snackbar',
    name: 'snackbar',
    component: () => import('../pages/SnackbarPage.vue'),
    meta: {
      breadcrumbLabel: 'Snackbar',
      breadcrumbIcon: 'snackbar',
      title: 'Snackbar',
      description: 'Transient notifications with actions and dismiss behavior.',
      category: 'feedback'
    }
  },
  {
    path: '/stepper',
    name: 'stepper',
    component: () => import('../pages/StepperPage.vue'),
    meta: {
      breadcrumbLabel: 'Stepper',
      breadcrumbIcon: 'stepper',
      title: 'Stepper',
      description: 'Progress and multi-step workflow indicators.',
      category: 'components'
    }
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../pages/TabsPage.vue'),
    meta: {
      breadcrumbLabel: 'Tabs',
      breadcrumbIcon: 'tabs',
      title: 'Tabs',
      description: 'Tabbed navigation patterns and styles.',
      category: 'navigation'
    }
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('../pages/BreadcrumbPage.vue'),
    meta: {
      breadcrumbLabel: 'Breadcrumb',
      breadcrumbIcon: 'breadcrumb',
      title: 'Breadcrumb',
      description: 'Breadcrumb trails for hierarchy and location.',
      category: 'navigation'
    }
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: () => import('../pages/DocumentationPage.vue'),
    meta: {
      breadcrumbLabel: 'Documentation',
      breadcrumbIcon: 'documentation',
      title: 'Documentation',
      description: 'Documentation patterns and usage notes.',
      category: 'main'
    }
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import('../pages/GettingStartedPage.vue'),
    meta: {
      breadcrumbLabel: 'Getting Started',
      breadcrumbIcon: 'getting-started',
      title: 'Getting Started',
      description: 'Installation and quick-start usage for Darksight.',
      category: 'main'
    }
  },
  {
    path: '/themes',
    name: 'themes',
    component: () => import('../pages/ThemesPage.vue'),
    meta: {
      breadcrumbLabel: 'Themes',
      breadcrumbIcon: 'themes',
      title: 'Themes',
      description: 'Theme tokens, light and dark mode examples.',
      category: 'foundations'
    }
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: () => import('../pages/TooltipPage.vue'),
    meta: {
      breadcrumbLabel: 'Tooltip',
      breadcrumbIcon: 'tooltip',
      title: 'Tooltip',
      description: 'Contextual hints for interactive UI elements.',
      category: 'feedback'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0, behavior: 'auto' }
  }
})

router.afterEach((to) => {
  const pageTitle = to.meta?.title ? `${to.meta.title} · ${appName}` : appName
  document.title = pageTitle
})

export default router
