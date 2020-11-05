import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgHidden: true,
    createBarHidden: true,
    engineOptions: [
      { text: "1.9l", value: "1.9l" },
      { text: "2.0l", value: "2.0l" },
      { text: "2.5l", value: "2.5l" },
      { text: "3.0l", value: "3.0l" },
      { text: "4.0l", value: "4.0l" },
      { text: "5.0l", value: "5.0l" },
      { text: "6.0", value: "6.0l" }
    ],
    parking: [],
    garage: [],
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
    }
  },
  getters: {
    getParking(state) {
      return state.parking
    },
    getEngineOptions(state) {
      return state.engineOptions
    },
    getGarage(state) {
      return state.garage
    }
  },
})
