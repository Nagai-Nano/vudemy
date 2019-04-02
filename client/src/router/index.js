import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import routes from './routes'

const router = new Router({
  mode: 'history',
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
