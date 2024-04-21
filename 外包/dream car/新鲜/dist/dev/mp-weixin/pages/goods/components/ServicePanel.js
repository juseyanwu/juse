"use strict";
const common_vendor = require("../../../common/vendor.js");
const __default__ = {
  name: "ServicePanel"
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => emit("close"))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pages/goods/components/ServicePanel.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=ServicePanel.js.map
