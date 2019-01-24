<template>
  <div>
    <v-header></v-header>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import vHeader from '../components/Header.vue'
  import vMenu from '../components/Menu.vue'

  export default {
    components: {
      vHeader, vMenu
    }
  }
</script>
