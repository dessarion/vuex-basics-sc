<template>
  <div class="create">
    <form @submit.prevent="carToParking" autocomplete="off">
      <h2 class="create__title">Create new car</h2>
      <label for="car_name">Car name</label>
      <input type="text" id="car_name" v-model="name" />

      <label for="car_type">car type</label>
      <select id="car_type" v-model="carType">
        <option
          :value="option.value"
          v-for="option in $store.state.carTypes"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      <h3>Drive type</h3>
      
      <label class="create__radio" for="allw"
        ><input
          type="radio"
          name="drive"
          id="allw"
          value="allw"
          v-model="drive"
        />all wheel drive</label
      >
      <label class="create__radio" for="fw"
        ><input
          type="radio"
          name="drive"
          id="fw"
          value="fw"
          v-model="drive"
        />front-wheel drive</label
      >
      <label class="create__radio" for="rw"
        ><input
          type="radio"
          name="drive"
          id="rw"
          value="rw"
          v-model="drive"
        />rear drive</label
      >

      <!-- * -->
      <FuelType />      
      <!-- * -->

      <label for="color">Color</label>
      <input type="text" v-model="color" />

      <button type="submit">To parking lot</button>
    </form>
    <div
      class="create__close-btn"
      @click="
        backGround();
        createBar();
      "
    >
      <svg
        viewBox="0 0 15 15"
        fill="none"        
        width="30"
        height="30"
      >
        <path
          d="M10 14L3 7.5 10 1"
          stroke="currentColor"
          stroke-linecap="square"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FuelType from '@/components/CreateBar/fuel-type'

export default {
  name: "create-bar",
  data() {
    return {
      name: "",
      carType: "expedition_suv",
      drive: "fw",
      // fuel: "petrol",
      // engine: "3.0l",
      color: "",
    };
  },  
  computed: {
    ...mapGetters(["getCarOptions"]),
    // engineOptions() {
    //   if (this.fuel !== "electricity") {
    //     return this.getEngineOptions;
    //   }
    // },
  },
  methods: {
    ...mapActions(["backGround", "createBar", "car2Parking"]),
    carToParking() {
      if (this.name.trim()) {
        const carOptions = this.getCarOptions

        const car = {
          id: Date.now(),
          name: this.name,
          carType: this.carType,
          drive: this.drive,
          fuel: carOptions.fuel,
          engine: carOptions.engine +  'l',
          color: this.color,
          atParking: true,
        };

        this.car2Parking(car);
        this.name = "";
        this.color = "";
        this.engine = null;
      }
    },
  },
  components: {
    FuelType,
  },
};
</script>

<style>
</style>