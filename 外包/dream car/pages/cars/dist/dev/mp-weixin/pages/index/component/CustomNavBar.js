"use strict";
const common_vendor = require("../../../common/vendor.js");
const __default__ = {
  name: "CustomNavBar"
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      var _a;
      return {
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pages/index/component/CustomNavBar.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=CustomNavBar.js.map
