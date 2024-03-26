<template>
  <!-- <div class="tesla">T E S L A</div> -->
  <div class="header">
    <Header />
  </div>
  <div class="main" v-if="login">
    <div class="login">登录</div>
    <div class="email">账号</div>
    <input type="text" class="input" placeholder="请输入你的账号" v-model="account" />
    <div class="email">密码</div>
    <input type="password" class="input" placeholder="请输入密码" v-model="password" />
    <el-button :plain="true" class="next" @click="open">登录</el-button>
    <div class="concel" @click="cancel">取消</div>
    <div class="forget">
      <div class="lostEmail">忘记电子邮箱？</div>|
      <div class="lostPassword">忘记密码？</div>
    </div>
    <div class="other">
      <div class="line"></div>
      <div class="anothor">或</div>
      <div class="line"></div>
    </div>
    <div class="createAccount" @click="createAccount">创建账户</div>
    <div class="botton">
      <a class="tesla" href="https://www.tesla.cn/about?redirect=no">Tesla © 2022</a>
      <a href="https://www.tesla.cn/legal/privacy?redirect=no" class="privacy">隐私与政策</a>
      <a href="https://www.tesla.cn/contact?redirect=no" class="context">联系我们</a>
    </div>
  </div>
  <div class="create" v-else>
    <div class="createAccount">创建账户</div>
    <div class="top">账号</div>
    <input type="text" class="input" placeholder="请输入你的账号" v-model="reAccount" />
    <div class="top">密码</div>
    <input type="password" class="input" placeholder="请输入密码" v-model="rePassword" />
    <div class="top">请再次输入密码</div>
    <input type="password" class="input" placeholder="请输入密码" v-model="rePasswordAgain" />
    <div class="check">
      <input type="checkbox" @click="changeCheck" />创建 Tesla 账户，即表示我了解并同意
      <!-- <el-checkbox
        v-model="checked"
        label="创建 Tesla 账户，即表示我了解并同意"
        size="large"
        :change="changeCheck()"
      />-->
    </div>

    <div class="img-verify">
      <canvas width="340" height="80" ref="verify" @click="handleDraw">点击此处生成</canvas>
    </div>
    <div class="top">点击上方灰色区域，输入图片中的字符</div>
    <input type="text" class="input" placeholder="请输入验证码" v-model="verifyInput" />
    <!-- <div class="newAccount" @click="register">创建账户</div> -->
    <el-button type="primary" class="newAccount" @click="register" :disabled="dis">创建账户</el-button>
    <!-- <div class="concel">取消</div> -->
    <el-button class="concel" @click="loginAccount">取消</el-button>
    <div class="other">
      <div class="line"></div>
      <div class="anothor">或</div>
      <div class="line"></div>
    </div>
    <el-button class="login" @click="loginAccount">登录</el-button>
    <div class="botton">
      <a class="tesla" href="https://www.tesla.cn/about?redirect=no">Tesla © 2022</a>
      <a href="https://www.tesla.cn/legal/privacy?redirect=no" class="privacy">隐私与政策</a>
      <a href="https://www.tesla.cn/contact?redirect=no" class="context">联系我们</a>
    </div>
  </div>
</template>


<script setup>
// 引入
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useAccountStore from "../stores/account";
import Header from "../components/Header.vue";
const accountStore = useAccountStore();
const { useAccount, saveAccount, useSaveCommodity } = storeToRefs(accountStore);

onMounted(() => {
  // // 登录页阻止回退
  // sessionStorage.clear();
  // history.pushState(null, null, document.URL);
  // window.addEventListener(
  //   "popstate",
  //   function() {
  //     history.pushState(null, null, document.URL);
  //   },
  //   false
  // );
  // 判断当前用户是否已经登录
  if (accountStore.useAccount) {
    router.push({
      path: "/teslaaccount",
      query: {
        account: accountStore.useAccount.value
      }
    });
  }
});

// 声明变量
const router = useRouter();
let login = ref(true);

// 点击下一步,判断是否输入账号与密码
let account = ref("");
let password = ref("");
const open = () => {
  if (account.value === "") {
    ElMessage.error("请输入账号");
  }
  if (account.value != "" && password.value === "") {
    ElMessage.error("请输入密码");
  }

  if (account.value && password.value) {
   
    // 如果输入了账号与密码就发接口请求
    axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        account: account.value,
        password: password.value
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.code === 1) {
          console.log(res.data.data.shoppingcarts.commodity);
          accountStore.saveAccount(res.data.data.user.account);
          accountStore.useSaveCommodity(res.data.data.shoppingcarts.commodity);
          accountStore.saveUserId(res.data.data.user._id);
          // console.log(accountStore.useAccount);
          console.log(accountStore.commodity);
          // console.log(accountStore.userId);
          router.push({
            path: "/teslaaccount",
            query: {
              account: account.value
            }
          });
          ElMessage.success("登录成功");
        } else if (res.data.code === 3) {
          // console.log(res.data.data.shoppingcarts.commodity);
          // accountStore.saveAccount(res.data.data.user.account);
          // accountStore.useSaveCommodity(res.data.data.shoppingcarts.commodity);
          // accountStore.saveUserId(res.data.data.user._id);
          // // console.log(accountStore.useAccount);
          // console.log(accountStore.commodity);
          // console.log(accountStore.userId);
          router.push({
            path: "/admin",
            query: {
              account: account.value
            }
          });
          ElMessage.success("登录成功");
        }
        else {
          ElMessage.error(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// 点击取消，返回home页
const cancel = () => {
  router.push({
    path: "/home"
  });
};

// 注册账号
let reAccount = ref("");
let rePassword = ref("");
let rePasswordAgain = ref("");
let checked = ref(false);
let dis = ref(true);
let verifyInput = ref("");

const changeCheck = () => {
  checked = !checked;
  console.log(checked);
  if (checked === false) {
    dis.value = false;
  } else {
    dis.value = true; // 取消 创建用户 按钮禁用
  }
};
const register = () => {
  if (!reAccount.value) {
    ElMessage.error("请输入账号");
  } else if (!rePassword.value) {
    ElMessage.error("请输入密码");
  } else if (!rePasswordAgain.value) {
    ElMessage.error("请再次输入密码");
  } else if (rePassword.value !== rePasswordAgain.value) {
    ElMessage.error("两次输入密码不一致，请重新输入");
  } else if (checked.value === false) {
    ElMessage.error("请勾选同意");
  } else if (rePassword.value.length < 6) {
    ElMessage.error("请输入最少六位长度的密码");
  }
  if (
    (state.imgCode !== verifyInput.value || !verifyInput.value) &&
    reAccount.value &&
    rePassword.value &&
    rePasswordAgain.value &&
    rePassword.value === rePasswordAgain.value
  ) {
    ElMessage.error("验证码有误");
    return;
  }
  console.log(state.imgCode);
  if (
    reAccount.value &&
    rePassword.value === rePasswordAgain.value &&
    rePassword.value.length >= 6 &&
    state.imgCode === verifyInput.value
  ) {
    // 注册
    axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        account: reAccount.value,
        password: rePassword.value
      }
    })
      .then(res => {
        console.log(res);
        if (res.data.code === 1) {
          accountStore.saveAccount(reAccount.value);
          // console.log(accountStore.useAccount);
          router.push({
            path: "/teslaaccount",
            query: {
              account: account.value
            }
          });
          ElMessage.success("登录成功");
          ElMessage.success("注册成功");
        } else if (res.data.code === 0) {
          ElMessage.error("账号已存在");
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    console.log(2222);
  }
};
// 生成验证码
const verify = ref(null); // 验证码 ref里面传入 null 这个ref是可以作为html的标记
const state = reactive({
  pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  imgCode: "" // 承接生成的验证码
});
// 声明函数
const createAccount = () => {
  login.value = !login.value;
  // handleDraw();
  // state.imgCode = draw();
};
const loginAccount = () => {
  login.value = !login.value;
};
// 生成随机数
const randomNum = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};
// 随机生成颜色
const randomColor = (min, max) => {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return `rgb(${r},${g},${b})`;
};
// 将随机生成的颜色与随机挑选的颜色合并
const draw = () => {
  const ctx = verify.value.getContext("2d"); // 创建2d的画布
  // ctx.fillStyle = "#eeeeee";
  ctx.fillStyle = randomColor(10, 300);

  ctx.fillRect(0, 0, 340, 90);
  let imgCode = "";
  for (let i = 0; i < 4; i++) {
    const text = state.pool[randomNum(0, 36)];
    imgCode += text;
    const fontSize = randomNum(20, 60);
    const deg = randomNum(-30, 30);
    ctx.font = fontSize + "px Simhei";
    ctx.textBaseline = "top";
    ctx.fillStyle = randomColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, 40, 20);
    ctx.restore();
  }

  return imgCode;
};
const handleDraw = () => {
  state.imgCode = draw();
};
</script>

<style lang="less" scoped>
.header {
  margin-bottom: 10vh;
}
.tesla {
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
}
.main {
  width: 330px;
  margin: 0 auto;
  .login {
    font-size: 30px;
    margin: 40px 0;
  }
  .email {
    color: #5c5d61;
    margin: 10px;
  }
  .input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #d0d1d2;
    background: #f5f5f5;
  }
  .next {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #3d69e1;
    margin: 20px 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concel {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #f5f5f5;
    margin: 20px 0 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .forget {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .lostEmail {
      margin: 0 5px;
      text-decoration: underline;
      font-size: 16px;
      font-weight: 300;
    }
    .lostPassword {
      margin: 0 5px;
      text-decoration: underline;
      font-size: 16px;
      font-weight: 300;
    }
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .line {
      width: 48%;
      border-bottom: 1px solid #e2e4e4;
    }
    .anothor {
      color: #5c5d61;
      margin: 10px;
    }
  }
  .createAccount {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
  }
  .botton {
    display: flex;
    a {
      margin: 5px;
    }
    .tesla {
      font-size: 12px;
    }
    .privacy {
      font-size: 12px;
    }
    .context {
      font-size: 12px;
    }
  }
}
.create {
  width: 330px;
  margin: 0 auto;
  .createAccount {
    font-size: 30px;
    margin: 40px 0 50px 0;
  }
  // .select {
  //   width: 100%;
  //   height: 40px;
  //   border-radius: 15px;
  // }
  .top {
    color: #5c5d61;
    margin: 10px;
  }
  el-select {
    width: 100%;
  }
  .input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #d0d1d2;
    background: #f5f5f5;
    margin-bottom: 25px;
  }
  .check {
    display: flex;
    margin: 20px 0;
  }
  .img-verify {
    margin: 30px 0;
    background: #eeeeee;
    border-radius: 8px;
    box-sizing: border-box;
    canvas {
      border-radius: 8px;
    }
  }
  .newAccount {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #3d69e1;
    margin: 20px 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concel {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #f5f5f5;
    margin: 20px 0 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .line {
      width: 48%;
      border-bottom: 1px solid #e2e4e4;
    }
    .anothor {
      color: #5c5d61;
      margin: 10px;
    }
  }
  .login {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
  }
  .botton {
    display: flex;
    a {
      margin: 5px;
    }
    .tesla {
      font-size: 12px;
    }
    .privacy {
      font-size: 12px;
    }
    .context {
      font-size: 12px;
    }
  }
}
</style>