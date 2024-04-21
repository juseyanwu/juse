"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../../stores/index.js");
const services_cart = require("../../../services/cart.js");
require("../../../utils/http.js");
const composables_index = require("../../../composables/index.js");
const stores_modules_member = require("../../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_input_number_box2 = common_vendor.resolveComponent("vk-data-input-number-box");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_vk_data_input_number_box2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_XtxGuess2)();
}
const _easycom_vk_data_input_number_box = () => "../../../components/vk-data-input-number-box/vk-data-input-number-box.js";
const _easycom_uni_swipe_action_item = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
const _easycom_XtxGuess = () => "../../../components/XtxGuess.js";
if (!Math) {
  (_easycom_vk_data_input_number_box + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_XtxGuess)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CartMain1",
  setup(__props) {
    const memberStore = stores_modules_member.useMemberStore();
    const cartList = common_vendor.ref([]);
    const getMemberCartData = async () => {
      const res = await services_cart.getMemberCartAPI();
      cartList.value = res.result;
    };
    common_vendor.onShow(() => {
      if (memberStore.profile) {
        getMemberCartData();
      }
    });
    const onDeleteCart = async (skuId) => {
      common_vendor.index.showModal({
        content: "确定要删除该商品吗111",
        success: async (res) => {
          if (res.confirm) {
            await services_cart.deleteMemberCartAPI({ ids: [skuId] });
            getMemberCartData();
          }
        }
      });
    };
    const onchangeCount = async (ev) => {
      services_cart.putMemberCartBySkuIdAPI(ev.index, { count: ev.value });
    };
    const onselected = async (item) => {
      item.selected = !item.selected;
      services_cart.putMemberCartBySkuIdAPI(item.skuId, { selected: item.selected });
    };
    const isSelectedAll = common_vendor.computed(() => {
      return cartList.value.every((item) => item.selected);
    });
    const onselectedAll = async () => {
      const _isSelectedAll = !isSelectedAll.value;
      cartList.value.forEach((item) => {
        item.selected = _isSelectedAll;
      });
      services_cart.putMemberCartSelectedAPI({
        selected: _isSelectedAll
      });
    };
    const selecedCartList = common_vendor.computed(() => {
      return cartList.value.filter((item) => item.selected);
    });
    const selecedCartListCount = common_vendor.computed(() => {
      return selecedCartList.value.reduce((total, item) => {
        return total + item.count;
      }, 0);
    });
    const selecedCartListPrice = common_vendor.computed(() => {
      return selecedCartList.value.reduce((total, item) => {
        return total + item.price * item.count;
      }, 0).toFixed(2);
    });
    const gotoPatment = () => {
      if (selecedCartListCount.value === 0) {
        return common_vendor.index.showToast({
          title: "请选择商品",
          icon: "none"
        });
      }
      common_vendor.index.navigateTo({ url: "/pagesOrder/create/index" });
    };
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(memberStore).profile
      }, common_vendor.unref(memberStore).profile ? common_vendor.e({
        b: cartList.value.length
      }, cartList.value.length ? {
        c: common_vendor.f(cartList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onselected(item), item.skuId),
            b: item.selected ? 1 : "",
            c: item.picture,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.attrsText),
            f: common_vendor.t(item.price),
            g: `/pages/goods/goods?id=${item.id}`,
            h: common_vendor.o(onchangeCount, item.skuId),
            i: "8dc65478-2-" + i0 + "," + ("8dc65478-1-" + i0),
            j: common_vendor.o(($event) => item.count = $event, item.skuId),
            k: common_vendor.p({
              min: 1,
              max: item.stock,
              index: item.skuId,
              modelValue: item.count
            }),
            l: common_vendor.o(($event) => onDeleteCart(item.skuId), item.skuId),
            m: item.skuId,
            n: "8dc65478-1-" + i0 + ",8dc65478-0"
          };
        })
      } : {}, {
        d: common_vendor.o(onselectedAll),
        e: common_vendor.unref(isSelectedAll) ? 1 : "",
        f: common_vendor.t(common_vendor.unref(selecedCartListPrice)),
        g: common_vendor.t(common_vendor.unref(selecedCartListCount)),
        h: common_vendor.o(gotoPatment),
        i: common_vendor.unref(selecedCartListCount) === 0 ? 1 : ""
      }) : {}, {
        j: common_vendor.sr(guessRef, "8dc65478-3", {
          "k": "guessRef"
        }),
        k: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pages/cart/components/CartMain1.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=CartMain1.js.map
