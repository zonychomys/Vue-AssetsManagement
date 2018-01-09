import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import Asset from '@/views/asset/Asset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/asset',
      name: 'Asset',
      component: Asset
    }
  ]
})
