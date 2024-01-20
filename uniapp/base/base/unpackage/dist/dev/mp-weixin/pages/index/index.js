"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  song();
}
const song = () => "../../components/song/song.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("你好");
    const changeTitle = () => {
      title.value = title.value === "你好" ? "hello" : "你好";
    };
    const reverseTitle = common_vendor.computed(() => {
      return title.value.split("").reverse().join("");
    });
    const list = common_vendor.reactive({
      song: {
        img: "https://ts1.cn.mm.bing.net/th/id/R-C.c7b0d23ae8fd578ddef45ae943b14501?rik=a74yJget38SuLw&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140305%2f1-140305222319.jpg&ehk=MDp7pExBnr7SIN%2fKEHW7x%2be%2f9HA8YW30Ed3PPEgTJlE%3d&risl=&pid=ImgRaw&r=0",
        title: "卡通头像",
        price: "10",
        marketPrice: "13"
      }
    });
    const goAbout = () => {
      common_vendor.index.navigateTo({
        url: "/pages/about/about"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goAbout),
        b: common_vendor.t(title.value),
        c: common_vendor.t(common_vendor.unref(reverseTitle)),
        d: common_vendor.o(changeTitle),
        e: common_vendor.p({
          data: list.song
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code space/uniapp/base/base/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
