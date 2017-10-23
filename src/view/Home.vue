<template>
  <div class="home-view has-header">
    <sub-nav :mold="model"></sub-nav>
    <list :mold="id" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
     <!-- <loading slot="spinner"></loading>-->
    </infinite-loading>
  </div>
</template>
<script>
  import SubNav from '../components/SubNav.vue'
  import { mapState, mapActions,mapGetters } from 'vuex'
  import InfiniteLoading from 'vue-infinite-loading'
  import List from '../components/List.vue'
  export default {
    computed:{
      // Getting Vuex State from store/modules/activities
      ...mapState({
        events: state => state.activities.events
      })
    },
    data(){
      return{
        model:'quickNav',
        id:'thumbnail'
      }
    },
    created(){
    this.loadMore()

      console.log(this.$store)
    },
    methods:{
      onInfinite () {
        setTimeout(() => {
          this.loadMore()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      ...mapActions(['loadMore']),

    },
    components:{
      SubNav,
      List,
      InfiniteLoading
    }
  }
</script>
<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
