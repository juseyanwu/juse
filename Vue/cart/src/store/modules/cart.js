const getters = {};
const state = {
  items:[]
};
const actions = {
  addProductToCart({commit,state},product){
    if(product.inventory>0){
      const cartItem = state.items.find(item=>item.id === product.id)
      if(!cartItem){
        commit('pushProductToCart',{id:product.id})
      }else{
        commit('incrementItemQuantity',cartItem)
      }
      commit('decrementProductInventory',{id:product.id})
    }
  }
  
};
const mutations = {
  pushProductToCart(state,{id}){
      state.items.push({
      id,
      quantity:1
    })
  },
  incrementItemQuantity(state,{id}){
    const cartItem = state.items.find(item=>item.id === id)
    cartItem.quantity++
  },
  decrementProductInventory(state,{id}){
    const product = state.items.find(item=>item.id === id)
      product.inventory--
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
