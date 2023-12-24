import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state() {
    return{
      questionList:[],
      itemNum:1,  //第几题 默认第一题
      answerId:[], //存放选中的答案
    }
  },
  getters: { //computed

  },
  mutations: { //methods 同步的方式去修改数据源
    getQuestionList(state,list){
      state.questionList = list
    },
    recordAnswer(state,id){
      state.answerId.push(id)
    },
    nextItem(state){
      // 保存当前答案
      state.itemNum += 1
    }
  },
  actions: { //async methods
    getQuestionListAction({commit}){ //context 代表整个store
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
      .then(res=>{
        console.log(res);
        //出发mutation 中的getQuestionList
        commit('getQuestionList',res.data)
      })
    },
    recordAnswerAction({commit,state},id){
      commit('recordAnswer',id)
      if(state.itemNum<state.questionList.length) commit('nextItem')
    }
  },
  modules: {
  }
})
