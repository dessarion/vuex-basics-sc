<template>
  <div class="parking__generator">
    <div class="parking__generator-input">
      <h4>{{ carsToGenerate }}</h4>
      <input type="range" v-model="carsToGenerate" :max="maxCars" min="1" />
    </div>
    <div class="parking__generator-btn" @click="generate">
      <span>generate</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      carsToGenerate: "3",
      maxCars: 10,
    };
  },
  computed: {
    ...mapGetters(["getCarNames", "getCarTypes", "getEngines", "getCarColors"]),
  },
  methods: {
    ...mapActions(['car2Parking']),
    generateCar() {
      const names = this.getCarNames;
      const types = this.getCarTypes;
      const drive = ["allw", "fw", "rw"];
      const fuel = ["petrol", "diesel", "electricity"];
      const engines = this.getEngines;
      const colors = this.getCarColors;

      const idxN = getRandomNumber(names.length);
      const idxT = getRandomNumber(types.length);
      const idxE = getRandomNumber(engines.length);
      const idxC = getRandomNumber(colors.length);

      const getFuel = fuel[getRandomNumber(fuel.length)];

      function getRandomNumber(to) {
        const digts = Math.floor(Math.random() * to);
        return digts;
      }

      const car = {
        id: Date.now(),
        name: names[idxN],
        carType: types[idxT],
        drive: drive[getRandomNumber(drive.length)],
        fuel: getFuel,
        engine: getFuel !== "electricity" ? engines[idxE] : null,
        color: colors[idxC],
        atParking: true,
      };

      return car
    },
    generate() {
      const carsCount = parseInt(this.carsToGenerate);
      
      for(let i = 0; i < carsCount; i++) {
          setTimeout(() => {
              this.car2Parking(this.generateCar());
          }, 10);
      }
    }
  },
};
</script>

<style>
</style>