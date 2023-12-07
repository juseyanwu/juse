<template>
    <div class="login">
        <div class="login-warp">
            <div class="item">
                <span>账号：</span>
                <input type="text" v-model="account">
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="text" v-model="secret">
            </div>
            <div class="item">
                <button @click="login">登入</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            account:'',
            secret:''
        }
    },
    methods:{
        login(){
            console.log(this.account,this.secret);
            if(this.account===''||this.secret===''){
                alert('账号或密码不能为空')
                return
            }
            
            this.$router.push('/home')

        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(97, 97, 157);
    .login-warp {
        width: 400px;
        height: 300px;
        background-color: rgb(168, 67, 67);
        border-radius: 10px;
        box-shadow: 0 0 100px #fff;
        padding: 20px;
        box-sizing: border-box;
        font-size: 30px;
        .item{
            display: flex;
            margin-top: 30px;
            input{
                flex: 1;
                padding: 0 10px;
            }
            button{
                font-size: 30px;
                flex: 1;
                border-radius: 1000px;
                border: none;
                background-color: #951db0;
                color: white;
                font-size: 26px;
                padding: 10px 0;
                cursor: pointer;
            }
        }
    }
}
</style>