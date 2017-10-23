<template>
  <div class="pages-view">
    <header-bar @showTalion="open"></header-bar>
    <router-view></router-view>
    <talion-view v-show="talion" @closeTalion="close"></talion-view>
  </div>
</template>
<script>
  import HeaderBar from '../components/header.vue'
  import TalionView from '../view/TalionView.vue'
  export default {
    components:{
      HeaderBar,
      TalionView
    },
    data () {
      return {
        talion: ''
      }
    },
    methods: {
      open: function () {
        this.talion = 'open'
      },
      close: function () {
        this.talion = ''
      }
    }
  }
</script>
