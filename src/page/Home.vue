<template>
  <div>
    <v-header></v-header>
    <v-menu></v-menu>
    <div class="content_ a_loading" :class="{'content_col':collapse}">
      <div class="page_">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
  import vHeader from '../components/Header.vue'
  import vMenu from '../components/Menu.vue'
  import bus from '../util/bus'

  export default {
    name:'Home',
    data(){
      return {
        collapse:false
      }
    },
    components: {
      vHeader, vMenu
    },
    created(){
      bus.$on('collapse', msg => {
        this.collapse = msg
      })
    }
  }
</script>

<style scoped>
  .content_{
    padding: 10px;
    -webkit-transition: all .3s;
    transition: all .3s;
    background: #E9ECF3;
    position: absolute;
    top:65px;
    left: 200px;
    right: 0;
    bottom: 0;
  }
  .page_{
    width: auto;
    height: 100%;
    overflow-y: scroll;
  }
  .content_col{
    left: 64px;
  }
</style>
