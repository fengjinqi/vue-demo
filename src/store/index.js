import Vue from 'vue'
import Vuex from 'vuex'
import activities from './modulus/activities'
import movie from './modulus/movie'
import subject from './modulus/subject'
import book from './modulus/book'
import group from './modulus/group'
import search from './modulus/search'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {

    activities,
    movie,
    subject,
    book,
    group,
    search
  }
})
