<template>
  <div class="create">
    <form @submit.prevent="carToParking" autocomplete="off">
      <h2 class="create__title">Create new car</h2>
      <label for="car_name">Car name</label>
      <input type="text" id="car_name" v-model="name" />

      <label for="car_type">car type</label>
      <select id="car_type" v-model="carType">
        <option value="coupe">coupe</option>
        <option value="expedition_suv">expedition suv</option>
        <option value="minibus">minibus</option>
        <option value="offroad">offroad</option>
        <option value="pickup">pickup</option>
        <option value="sedan">sedan</option>
        <option value="station_wagon">station wagon</option>
        <option value="truck">truck</option>
      </select>

      <h3>Drive type</h3>
      <label for="allw"
        ><input type="radio" name="drive" id="allw" value="allw" v-model="drive"/>all wheel
        drive</label
      >
      <label for="fw"
        ><input type="radio" name="drive" id="fw" value="fw" v-model="drive"/>front-wheel
        drive</label
      >
      <label for="rw"
        ><input type="radio" name="drive" id="rw" value="rw" v-model="drive"/>rear drive</label
      >

      <h3>Fuel type</h3>
      <label for="petrol"
        ><input type="radio" name="fuel" id="petrol" value="petrol" v-model="fuel"/>petrol</label
      >
      <label for="diesel"
        ><input type="radio" name="fuel" id="diesel" value="diesel" v-model="fuel"/>diesel</label
      >
      <label for="electricity"
        ><input
          type="radio"
          name="fuel"
          id="electricity"
          value="electricity"
          v-model="fuel"
        />electricity</label
      >

      <label for="volume">engine volume</label>
      <select id="volume" v-model="engine">
       <option :value="option.value" v-for="option in engineOptions" :key="option.value">{{option.text}}</option>
      </select>

      <label for="color">Color</label>
      <input type="text" v-model="color"/>

      <button type="submit">To parking lot</button>
    </form>
    <div
      class="create__close-btn"
      @click="
        backGround();
        createBar();
      "
    >
      &times;
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "create-bar",
  data() {
    return {
      name: "",
      carType: "expedition_suv",
      drive: "fw",
      fuel: "petrol",
      engine: "3.0l",
      color: ""
    };
  },
  computed: {
    ...mapGetters(['getEngineOptions']),
    engineOptions() {
      if(this.fuel !== "electricity") {
        return this.getEngineOptions
      }
    }
  },
  methods: {
    ...mapActions(["backGround", "createBar", "car2Parking"]),
    carToParking() {
      if (this.name.trim()) {
        const car = {
          id: Date.now(),
          name: this.name,
          carType: this.carType,
          drive: this.drive,
          fuel: this.fuel,
          engine: this.engine,
          color: this.color,
          atParking: true
        };
        
        this.car2Parking(car);
        this.name = "";
        this.color = "";
        this.engine = null
      }
    },
  },
};
</script>

<style>
</style>