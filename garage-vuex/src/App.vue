<template>
  <div id="app">
     <component :is="layout" />
  </div>
</template>

<script>
import NavLayout from '@/layouts/nav-layout'
export default {
  components: {
    NavLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'nav') + '-layout'
    }
  },
}
</script>

<style lang="css">
  @import 'assets/index.min.css';
</style>
