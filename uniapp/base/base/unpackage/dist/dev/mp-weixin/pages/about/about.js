"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "about",
  setup(__props) {
    common_vendor.onMounted(() => {
      common_vendor.index.request({
        url: "https://mock.mengxuegu.com/mock/65abace8c4cd67421b34c9f1/movie/movieList",
        method: "GET",
        success: (res) => {
          console.log(res);
          common_vendor.index.setStorage({
            key: "movieName",
            data: res.data.movieList[0].nm,
            success: () => {
              common_vendor.index.showToast({
                title: "保存成功",
                duration: 2e3,
                icon: "success"
              });
            }
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code space/uniapp/base/base/pages/about/about.vue"]]);
wx.createPage(MiniProgramPage);
