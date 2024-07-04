import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Layouts
import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'

// Components
import AppSideMenuBar from './components/common/nav/sideMenubar/AppSideMenuBar.vue'
import AppPageContent from './components/common/pageContent/AppPageContent.vue'

const app = createApp(App)


app
  .component("AuthLayout", AuthLayout)
  .component("DefaultLayout", DefaultLayout)
  .component("NotFoundLayout", NotFoundLayout)
  .component('app-side-menu-bar', AppSideMenuBar)
  .component('app-page-content', AppPageContent)


  app.use(router)
  .use(vuetify)
  .mount('#app')
