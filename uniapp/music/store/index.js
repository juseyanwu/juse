import {createStore} from 'vuex'

export default createStore({
	state:{
		isShowMenu:false  //控制菜单显示隐藏
	},
	mutations:{
		changeisShowMenu(state,flag){
			state.isShowMenu = flag
		}
	}
})