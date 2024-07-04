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
import BarChartComponent from "./components/charts/BarChartComponent.vue"
import LineChartComponent from "./components/charts/LineChartComponent.vue"
import PieChartComponent from "./components/charts/PieChartComponent.vue"


const app = createApp(App)


app
  .component("AuthLayout", AuthLayout)
  .component("DefaultLayout", DefaultLayout)
  .component("NotFoundLayout", NotFoundLayout)
  .component('app-side-menu-bar', AppSideMenuBar)
  .component('app-page-content', AppPageContent)
  .component("BarChart", BarChartComponent)
  .component("LineChart", LineChartComponent)
  .component("PieChart", PieChartComponent)


  app.use(router)
  .use(vuetify)
  .mount('#app')
