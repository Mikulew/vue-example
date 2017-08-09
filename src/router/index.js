import Vue from 'vue'
import Router from 'vue-router'
import Titles from '@/components/Titles'
import AddTitle from '@/components/AddTitle'
import EditTitle from '@/components/EditTitle'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/titles',
      name: 'titles',
      component: Titles
    },
    {
      path: '/titles/add',
      name: 'titlesAdd',
      component: AddTitle
    },
    {
      path: '/title/:id/edit',
      name: 'titlesEdit',
      component: EditTitle
    }
  ]
})
