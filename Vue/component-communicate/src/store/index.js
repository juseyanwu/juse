import {createStore} from 'vuex'

const store = createStore({
    state(){
       return{
        lists:['html','css','js']
       } 
    },
    mutations:{ //methods
        listsAdd(state,val){
            state.lists.push(val)
        }
    }
})

export default store