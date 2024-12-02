import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ProjectPage from './pages/ProjectPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectPage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;