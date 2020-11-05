<template>
  <div class="box__items-item">
    <h3 class="box__items-item-title">{{ car.name }}</h3>
    <img :src="require(`@/assets/${car.carType}.jpg`)" alt="car-type" />
    <table>
      <tr>
        <td>drive:</td>
        <td>{{ car.drive | drive}}</td>
      </tr>
      <tr>
        <td>fuel-type:</td>
        <td>{{ car.fuel }}</td>
      </tr>
      <tr>
        <td>engine-volume:</td>
        <td>{{ car.engine }}</td>
      </tr>
      <tr>
        <td>color:</td>
        <td>{{ car.color }}</td>
      </tr>
    </table>
    <div class="box__items-item-btn btn__add" 
        :class="{hidden: !car.atParking}" 
        @click="car2Garage(car.id)"
    >add this car</div>
    <div class="box__items-item-btn btn__remove" 
        :class="{hidden: car.atParking}"
        @click="wanishCar(car.id)"
    >remove this car</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import driveDecroder from '@/filters/drive.filter'
export default {
  name: "car",
  props: {
    car: {
      type: Object,
      required: true,
    },
  }, 
  methods: {
      ...mapActions(['car2Garage','wanishCar']),
  },
};
</script>

<style>
</style>