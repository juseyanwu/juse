import shop from '../../api/shop.js'
//单纯的想数据
const getters = {};
const state = {
    all:[]
};
const actions = {
    getAllProducts({commit}){
        shop.getProducts(products=>{
            commit('setProducts',products)
        })
    }
};
const mutations = {  //可变的
    setProducts(state,products){
        state.all = products
    }
};
// store.cart.state
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
