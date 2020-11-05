<template>
  <div>
    <nav class="navigation">
      <ul>
        <li><a href="#" @click="backGround(); createBar()">Create</a></li>
        <li><router-link to="/parking" tag="a">Parking</router-link></li>
        <li><router-link to="/garage" tag="a">Garage</router-link></li>
      </ul>
    </nav>
    <CreateBar :class="{toleft: $store.state.createBarHidden}" />
  </div>
</template>

<script>
import CreateBar from "@/components/CreateBar";
import {mapActions} from 'vuex'
export default {
  name: "create-bar",  
  components: {
    CreateBar,
  },
  methods: {
      ...mapActions(['backGround','createBar'])
  },
};
</script>

<style>
</style>