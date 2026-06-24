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

const routes = [
  { path: '/', redirect: '/buttons' },
  { path: '/buttons', name: 'buttons', component: ButtonsPage },
  { path: '/card', name: 'card', component: CardPage },
  { path: '/inputs', name: 'inputs', component: InputsPage },
  { path: '/pagination', name: 'pagination', component: PaginationPage },
  { path: '/radio-buttons', name: 'radio-buttons', component: RadioButtonsPage },
  { path: '/search-input', name: 'search-input', component: SearchInputPage },
  { path: '/snackbar', name: 'snackbar', component: SnackbarPage },
  { path: '/stepper', name: 'stepper', component: StepperPage },
  { path: '/tabs', name: 'tabs', component: TabsPage },
  { path: '/breadcrumb', name: 'breadcrumb', component: BreadcrumbPage },
  { path: '/documentation', name: 'documentation', component: DocumentationPage },
  { path: '/getting-started', name: 'getting-started', component: GettingStartedPage },
  { path: '/themes', name: 'themes', component: ThemesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
