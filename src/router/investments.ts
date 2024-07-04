import { RouteRecordRaw } from 'vue-router';
import InvestmentView from "../views/investments/index.vue"


const routes:Array<RouteRecordRaw>=[
  {
    path: '/investments',
    name: 'Investments',
    component: InvestmentView,
    meta:{
      requiresAuth: true
    }
  }
]


export default routes;