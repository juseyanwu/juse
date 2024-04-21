"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  common_vendor.unref(CartMain)();
}
const CartMain = () => "./components/CartMain1.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart2",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pages/cart/cart2.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=cart2.js.map
