import { defineStore } from 'pinia'
const useAllInfoStore = defineStore('allInfoStore', {
  state: () => {
    return {
      useAccount: [],
      useCar:[],

    }
  },
})


export default useAllInfoStore


