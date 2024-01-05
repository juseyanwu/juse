// shop？
// 大型项目 index.js 入口
// 每个模块的接口一个文件

//vuex  读和写 不能随便修改，要遵守流程
//  A B (竞争关系)都用到——products  但假设都改了products  中央的vuex
// actions触发，actions(api) -> mutations(回溯，记账一样)
// 设计模式 难理解 复杂 pinia
const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

// _products前面的下划线表示是私有的，表示这个数据只在本模块

export default {
    // 阅读后端的接口文档 填写actions要调用的方法
    getProducts(cb){ //cb callback await getProducts
        //return promise
        setTimeout(()=>cb(_products),100) //模拟ajax请求后端要花时间
    },
    buyProducts(products,cb,errorCb){
        setTimeout(() => {
            (Math.random()>0.5)? cb():errorCb()  //抛硬币
        }, 100);
    }
}