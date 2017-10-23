import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '../view/pages.vue'
import Home from '@/view/Home'
import DetailView from '../view/Detail.vue'
import MovieView from '../view/Move.vue'
import SubjectView from '../view/SubjectView'
import BookView from '../view/Book.vue'
import StatusView from '../view/StatusView.vue'
import GroupView from '../view/Group.vue'
import SearchView from '../view/Search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/pages/'
    },
    {

      path: '/pages',
      name: 'pages',
      component: PagesView,
      children:[
        {
          path:'',
          redirect:'/pages/home'
        },
       {
         path: 'home',
         name: 'HomeView',
         component: Home
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        },
        {
          path:'movie',
          name:'MovieView',
          component:MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
      ]
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/search',
      name: 'SearchView',
      components: {
        default: PagesView,
        search: SearchView
      }
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
