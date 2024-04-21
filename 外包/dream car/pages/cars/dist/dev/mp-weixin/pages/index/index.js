"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const composables_index = require("../../composables/index.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_XtxSwiper2 + _easycom_XtxGuess2)();
}
const _easycom_XtxSwiper = () => "../../components/XtxSwiper.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  (CustomNavBar + PageSkeleton + _easycom_XtxSwiper + categoryPanel + HotPanel + _easycom_XtxGuess)();
}
const CustomNavBar = () => "./component/CustomNavBar.js";
const HotPanel = () => "./component/HotPanel.js";
const categoryPanel = () => "./component/categoryPanel.js";
const PageSkeleton = () => "./component/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getHomeBannerData = async () => {
      const res = await services_home.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const getHomeCategoryData = async () => {
      const res = await services_home.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const HotList = common_vendor.ref([]);
    const getHomeHotData = async () => {
      const res = await services_home.getHomeHotAPI();
      HotList.value = res.result;
    };
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()]);
      isLoading.value = false;
    });
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const isTrigerred = common_vendor.ref(false);
    const onRefresherrefresh = async () => {
      var _a, _b;
      isTrigerred.value = true;
      (_a = guessRef.value) == null ? void 0 : _a.resetData();
      await Promise.all([
        getHomeBannerData(),
        getHomeCategoryData(),
        getHomeHotData(),
        (_b = guessRef.value) == null ? void 0 : _b.getMore()
      ]);
      isTrigerred.value = false;
    };
    const isLoading = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: HotList.value
        }),
        e: common_vendor.sr(guessRef, "770e23ea-5", {
          "k": "guessRef"
        })
      }, {
        f: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        ),
        g: common_vendor.o(onRefresherrefresh),
        h: isTrigerred.value
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
