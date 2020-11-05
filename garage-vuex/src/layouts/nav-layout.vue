<template>
  <div>
      <Navigation />
      <router-view />
      <div class="bg_cover" :class="{hidden: $store.state.bgHidden}" @click="backGround(); createBar()"></div>
      <router-link to="/" tag="div" class="inquiry" :class="{hidden: !$store.state.bgHidden}"><span class="inquiry__content">I</span></router-link>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import {mapActions} from 'vuex'

export default {
    name: 'nav-layout',    
    components: {
        Navigation,
    },
    methods: {
      ...mapActions(['backGround','createBar'])
  },
}
</script>

<style>

</style>