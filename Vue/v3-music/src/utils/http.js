import { Reject } from "@icon-park/vue-next";
import axios from "axios";
// fetch xhr vue应用的时候,复用、统一管理，我们做的是App 而不是一个页面
// 所有的请求前面加上baseURL 地址
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 10*1000;
axios.defaults.maxBodyLength = 5*1024*1024; //图片上传

const http = {
    get(url,params = {}){
        //能 await
        return new Promise((resolve,reject)=>{
            axios
            // 请求的抽象
                .get(url,{params})
                .then((res)=>{
                    resolve(res.data)
                })
                .catch(err=>{
                    reject(err.data)
                })
        })
    }
}

export default http