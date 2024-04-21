"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../utils/http.js");
require("../stores/index.js");
require("../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props, { expose }) {
    const GuessList = common_vendor.ref([]);
    const finish = common_vendor.ref(false);
    const getHomeGoodsGuessLikeData = async () => {
      if (finish.value) {
        return common_vendor.index.showToast({
          title: "没有更多了",
          icon: "none"
        });
      }
      const res = await services_home.getHomeGoodsGuessLikeAPI(pageParams);
      GuessList.value.push(...res.result.items);
      if (pageParams.page < res.result.pages) {
        pageParams.page++;
      } else {
        finish.value = true;
      }
    };
    const resetData = () => {
      pageParams.page = 1;
      GuessList.value = [];
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getHomeGoodsGuessLikeData();
    });
    expose({
      resetData,
      getMore: getHomeGoodsGuessLikeData
    });
    const pageParams = {
      page: 1,
      pageSize: 10
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(GuessList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        b: common_vendor.t(finish.value ? "没有更多了" : "正在加载...")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/components/XtxGuess.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=XtxGuess.js.map
