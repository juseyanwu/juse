import { defineStore } from 'pinia'
import axios from 'axios'
const useAllInfoStore = defineStore('allInfoStore', {
  state: () => {
    return {
      useAccount: [],
      useCar:[],

    }
  },
  actions: {
    saveInfo(account) {
      this.useAccount = account
    },
    deleteAccount(account){
      this.useAccount=account
    },
    saveCar(car){
      this.useCar=car
    },
    addCar(car){
      this.useCar.push(car)
    },
    deleteCar(car){
      this.useCar=car
    }
  }
})


export default useAllInfoStore


