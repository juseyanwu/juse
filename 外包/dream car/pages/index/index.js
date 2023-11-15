// App->page 的桥梁
// 微信提供 应用对象
const app = getApp()

Page({
  // 页面的数据
  data:{
    // user:{}
    slides:null,
    entities:null
  },
  // 生命周期
  onLoad(){
    // this->Page
    console.log(app,'页面显示了');
    // 响应式页面
    setTimeout(() => {
      // this ?
    }, 2000);
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
  },
  onReady(){
    console.log('ready GO');
  }
})