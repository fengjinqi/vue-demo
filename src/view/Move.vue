<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>
<script>
  import Scroller from '../components/Scroller'
  import Types from '../components/Types'
  import DownloadApp from '../components/DownloadApp'
  import { mapState,mapGetters,mapMutations} from 'vuex'
  export default {
    computed:{
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
      })
    },
    created(){
      this.getMovie()
      console.log(this.$store)
    },
    methods:{
      getMovie: function () {
        this.$store.dispatch('getMovie')
      }
    },
    components:{
      Scroller,
      Types,
      DownloadApp
    }
  }
</script>
