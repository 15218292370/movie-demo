import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '../components/inTheaters'
import comingSoon from '../components/comingSoon'
import moviesMsg from '../components/moviesMsg'
import searchPage from '../components/searchPage'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/movie/:id',
      name: 'moviesMsg',
      component: moviesMsg
    },
    {
      path: '/comingSoon',
      name: 'comingSoon',
      component: comingSoon
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    }
  ]
})
