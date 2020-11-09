<template>
  <div class="create__fuelTypeBlock">
    <div class="create__fuelTypeRadio">
      <h3>Fuel type</h3>

      <label 
        v-for="fuelType of getFuelTypes"
        :key="fuelType"
        :for="fuelType" 
      >
          <input type="radio" name="fuel" :id="fuelType" :value="fuelType" v-model="fuel"/>{{fuelType}}
      </label>
      
    </div>
    <div class="create__fuelTypeRange" v-if="fuel !== 'electricity'">
      <label for="volume">engine volume <span>{{correctValue}}l</span></label>
      <input type="range" id="volume" max="6" min="1.2" step="0.1" v-model="volume" @change="setEngine(correctValue)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "fuel-type",
  data() {
      return {
          volume: '3.0',
          fuel: 'petrol'
      }
  },
  methods: {
      ...mapMutations(['setFuel', 'setEngine'])
  },
  computed: {
     ...mapGetters(['getFuelTypes']),
     correctValue(){
         this.setFuel(this.fuel)
         const v = this.volume.length !== 1 ? this.volume : this.volume + ".0"
         return v
     }
  }, 
  
};
</script>

<style scoped>
    input[type=range]{
        cursor: w-resize;
    }
    label>span{
        color: #000;
    }
    label{
        width: fit-content;
    }
</style>