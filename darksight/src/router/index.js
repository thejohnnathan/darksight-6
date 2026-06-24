import { createRouter, createWebHistory } from 'vue-router'
import ButtonsPage from '../pages/ButtonsPage.vue'
import CardPage from '../pages/CardPage.vue'
import InputsPage from '../pages/InputsPage.vue'
import PaginationPage from '../pages/PaginationPage.vue'
import RadioButtonsPage from '../pages/RadioButtonsPage.vue'
import SearchInputPage from '../pages/SearchInputPage.vue'
import SnackbarPage from '../pages/SnackbarPage.vue'
import StepperPage from '../pages/StepperPage.vue'
import TabsPage from '../pages/TabsPage.vue'
import BreadcrumbPage from '../pages/BreadcrumbPage.vue'
import DocumentationPage from '../pages/DocumentationPage.vue'
import GettingStartedPage from '../pages/GettingStartedPage.vue'
import ThemesPage from '../pages/ThemesPage.vue'
import TooltipPage from '../pages/TooltipPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { breadcrumbLabel: 'Home', breadcrumbIcon: 'documentation' } },
  { path: '/buttons', name: 'buttons', component: ButtonsPage, meta: { breadcrumbLabel: 'Buttons', breadcrumbIcon: 'buttons' } },
  { path: '/card', name: 'card', component: CardPage, meta: { breadcrumbLabel: 'Card', breadcrumbIcon: 'card' } },
  { path: '/inputs', name: 'inputs', component: InputsPage, meta: { breadcrumbLabel: 'Inputs', breadcrumbIcon: 'inputs' } },
  { path: '/pagination', name: 'pagination', component: PaginationPage, meta: { breadcrumbLabel: 'Pagination', breadcrumbIcon: 'pagination' } },
  { path: '/radio-buttons', name: 'radio-buttons', component: RadioButtonsPage, meta: { breadcrumbLabel: 'Radio Buttons', breadcrumbIcon: 'radio-buttons' } },
  { path: '/search-input', name: 'search-input', component: SearchInputPage, meta: { breadcrumbLabel: 'Search Input', breadcrumbIcon: 'search-input' } },
  { path: '/snackbar', name: 'snackbar', component: SnackbarPage, meta: { breadcrumbLabel: 'Snackbar', breadcrumbIcon: 'snackbar' } },
  { path: '/stepper', name: 'stepper', component: StepperPage, meta: { breadcrumbLabel: 'Stepper', breadcrumbIcon: 'stepper' } },
  { path: '/tabs', name: 'tabs', component: TabsPage, meta: { breadcrumbLabel: 'Tabs', breadcrumbIcon: 'tabs' } },
  { path: '/breadcrumb', name: 'breadcrumb', component: BreadcrumbPage, meta: { breadcrumbLabel: 'Breadcrumb', breadcrumbIcon: 'breadcrumb' } },
  { path: '/documentation', name: 'documentation', component: DocumentationPage, meta: { breadcrumbLabel: 'Documentation', breadcrumbIcon: 'documentation' } },
  { path: '/getting-started', name: 'getting-started', component: GettingStartedPage, meta: { breadcrumbLabel: 'Getting Started', breadcrumbIcon: 'getting-started' } },
  { path: '/themes', name: 'themes', component: ThemesPage, meta: { breadcrumbLabel: 'Themes', breadcrumbIcon: 'themes' } },
  { path: '/tooltip', name: 'tooltip', component: TooltipPage, meta: { breadcrumbLabel: 'Tooltip', breadcrumbIcon: 'tooltip' } }
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

export default router
