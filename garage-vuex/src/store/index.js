import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgHidden: true,
    createBarHidden: true,
    // engineOptions: [
    //   { text: "1.9l", value: "1.9l" },
    //   { text: "2.0l", value: "2.0l" },
    //   { text: "2.5l", value: "2.5l" },
    //   { text: "3.0l", value: "3.0l" },
    //   { text: "4.0l", value: "4.0l" },
    //   { text: "5.0l", value: "5.0l" },
    //   { text: "6.0l", value: "6.0l" }
    // ],
    fuelTypes: ['petrol','diesel','electricity'],
    carTypes: [
      { text: "coupe", value: "coupe" },
      { text: "expedition suv", value: "expedition_suv" },
      { text: "minibus", value: "minibus" },
      { text: "offroad", value: "offroad" },
      { text: "pickup", value: "pickup" },
      { text: "sedan", value: "sedan" },
      { text: "station wagon", value: "station_wagon" },
      { text: "truck", value: "truck" },
    ],
    car: {},    
    parking: [],
    garage: [],
    carNames: ['Tazik','Vazik','Gazik','Tank','Probe','Tata','Bongo','Toppo',
      'Celerio','Kancil','Ideal','Esteem','Fuga','Tivoli','Edsel','Ram','Vellfire',
      'Landscape F1','Song Max','Hummer','DAYZ ROOX','Pantanal','Silkroad','Xcient',
      'Turbo'],
    carColors: ['Absolute Zero', 'Acid green', 'Amethyst','Antique brass','Antique ruby',
      'Baby powder','Beau blue','Black olive','Blush','Canary yellow','China pink',
      'Dark cyan','Desert','Fuchsia purple','French lilac','Gold','Green','True blue']  
  },
  mutations: {
    bg(state) {
      state.bgHidden = !state.bgHidden
    },
    bar(state) {
      state.createBarHidden = !state.createBarHidden
    },
    addCarToParking(state, newCar) {
      state.parking.push(newCar)
    },
    updateGarage(state, garage) {
      state.garage = garage
    },
    addCarToGarage(state, id) {
      const car = state.parking.find(c => c.id === id)
      car.atParking = false
      state.garage.push(car)
      state.parking = state.parking.filter(c => c.id !== id)
      localStorage.setItem('garage', JSON.stringify(state.garage))
    },
    deleteCar(state, id) {
      state.garage = state.garage.filter(c => c.id !== id)
      localStorage.setItem('garage', JSON.stringify(state.garage))
    },
    setFuel(state, fuel) {
      state.car.fuel = fuel
    },
    setEngine(state, engine) {
      state.car.engine = engine
    }   
  },
  actions: {
    backGround({ commit }) {
      commit('bg')
    },
    createBar({ commit }) {
      commit('bar')
    },
    car2Parking({ commit }, car) {
      commit('addCarToParking', car)
    },
    fetchGarage({ commit }) {
      const response = JSON.parse(localStorage.getItem('garage') || '[]');
      commit('updateGarage', response)
    },
    car2Garage({ commit }, id) {
      commit('addCarToGarage', id)
    },
    wanishCar({commit}, id) {
      commit('deleteCar', id)
    },   
  },
  getters: {
    getParking(state) {
      return state.parking
    },
    // getEngineOptions(state) {
    //   return state.engineOptions
    // },
    getGarage(state) {
      return state.garage
    },
    getCarNames(state) {
      return state.carNames
    },
    getCarTypes(state) {
      const types = []
      state.carTypes.forEach(c => types.push(c.value))
      return types
    },
    // getEngines(state) {
    //   const engines = []
    //   state.engineOptions.forEach( e => engines.push(e.value))
    //   return engines
    // },
    getCarColors(state) {
      return state.carColors
    },
    getFuelTypes(state) {
      return state.fuelTypes
    },
    getCarOptions(state) {
      return state.car
    }
  },
})
