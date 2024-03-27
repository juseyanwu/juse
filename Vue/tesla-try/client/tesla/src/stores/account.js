import { defineStore } from 'pinia'
const useAccountStore = defineStore('accountStore', {
  state: () => {
    return {
      useAccount: '',
      commodity: {},
      userId:''
    }
  },
})

export default useAccountStore


