"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      const res = await common_vendor.wx$1.login();
      code = res.code;
    });
    const onGetPhoneNumber = async (ev) => {
      const encryptedData = ev.detail.encryptedData;
      const iv = ev.detail.iv;
      const res = await services_login.postLoginWxMinAPI({
        code,
        encryptedData,
        iv
      });
      loginSuccess(res.result);
    };
    const onGetPhoneNumberSimple = async () => {
      const res = await services_login.postLoginWxMinSimpleAPI("13686953423");
      loginSuccess(res.result);
    };
    const loginSuccess = (profile) => {
      const memberStore = stores_modules_member.useMemberStore();
      memberStore.setProfile(profile);
      common_vendor.index.showToast({ title: "登录成功", icon: "success" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetPhoneNumber),
        b: common_vendor.o(onGetPhoneNumberSimple)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=login.js.map
