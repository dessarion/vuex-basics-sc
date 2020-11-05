<template>
  <div class="container">
    <h1>Garage</h1>
    <div class="box">
      <h2 class="box__title">Cars in the garage</h2>
      <div class="box__items" v-if="getGarage.length">
        <Car
            v-for="car in getGarage"
            :key="car.id"
            :car="car"
        />
      </div>
      <div class="box__items" v-else>
        <p>There no cars in garage.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Car from "@/components/Car";
import {mapGetters,mapActions} from 'vuex'

export default {
    name: 'garage',
    computed: {
        ...mapGetters(['getGarage'])
    },
    methods: {
        ...mapActions(['fetchGarage'])
    },
    mounted () {
        this.fetchGarage();
    },
    components: {
      Car,
  },
}
</script>

<style lang="scss" scoped>
  .box__items p{
    padding: 10px 20px 20px 20px;
    text-align: center;
  }
</style>

