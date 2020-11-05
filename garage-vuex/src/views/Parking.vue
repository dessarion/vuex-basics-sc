<template>
  <div class="container">
    <h1>Parking</h1>
    <div class="box">
      <h2 class="box__title">Cars in the parking lot</h2>
      <div class="box__items" v-if="getParking.length">
        <Car 
            v-for="car in getParking"
            :key="car.id"
            :car="car"
        />
      </div>
      <div class="box__items" v-else>
        <p>There no cars at parking.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Car from "@/components/Car";
import {mapGetters} from 'vuex'

export default {
  name: "parking",
  computed: {
      ...mapGetters(['getParking'])
  },
  components: {
      Car,
  },
};
</script>

<style lang="scss" scoped>
  .box__items p{
    padding: 10px 20px 20px 20px;
    text-align: center;
  }
</style>