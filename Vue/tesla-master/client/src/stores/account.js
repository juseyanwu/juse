import { defineStore } from 'pinia'
const useAccountStore = defineStore('accountStore', {
  state: () => {
    return {
      useAccount: '',
      commodity: {},
      userId:''
    }
  },
  actions: {
    saveAccount(account) {
      this.useAccount = account
    },
    saveUserId(id){
      this.userId=id
    },
    useLogOut() {
      this.useAccount = '',
      this.commodity={},
      this.userId=''
    },
    useSaveCommodity(item) {
      this.commodity = JSON.parse(JSON.stringify(item))
    },
    addCars(item) {
      if (!this.commodity[item]) {
        this.commodity[item] = item
        this.commodity[item] = 1
      } else {
        this.commodity[item] += 1
      }
    },
    deleteCars(item) {
      if (this.commodity[item] === 0) {
        this.commodity[item] = 0
      } else {
        this.commodity[item] -= 1
      }
    }
  }
})

// const accountStore=defineStore('accountStore',()=>{
//   let account=ref('')
//   function saveAccount(account){
//     this.account=account
//   }

//   return{account,saveAccount}
// })
export default useAccountStore


