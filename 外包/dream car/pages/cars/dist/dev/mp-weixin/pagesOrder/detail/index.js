"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
const services_order = require("../../services/order.js");
const services_pay = require("../../services/pay.js");
const services_constansts = require("../../services/constansts.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  const _component_PageSkeleton = common_vendor.resolveComponent("PageSkeleton");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_countdown2 + _easycom_XtxGuess2 + _component_PageSkeleton + _easycom_uni_popup2)();
}
const _easycom_uni_countdown = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_XtxGuess + _easycom_uni_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const popup = common_vendor.ref();
    const reasonList = common_vendor.ref([
      "商品无货",
      "不想要了",
      "商品信息填错了",
      "地址信息填写错误",
      "商品降价",
      "其它"
    ]);
    const reason = common_vendor.ref("");
    const onCopy = (id) => {
      common_vendor.index.setClipboardData({ data: id });
    };
    const pages = getCurrentPages();
    const pageInstance = pages.at(-1);
    common_vendor.onReady(() => {
      pageInstance.animate(
        ".navbar",
        [{ backgroundColor: "transparent" }, { backgroundColor: "#f8f8f8" }],
        1e3,
        {
          scrollSource: "#scroller",
          // scroll-view 的选择器
          startScrollOffset: 0,
          // 开始滚动偏移量
          endScrollOffset: 50,
          // 停止滚动偏移量
          timeRange: 1e3
          // 时间长度
        }
      );
      pageInstance.animate(".navbar .title", [{ color: "transparent" }, { color: "#000" }], 1e3, {
        scrollSource: "#scroller",
        timeRange: 1e3,
        startScrollOffset: 0,
        endScrollOffset: 50
      });
      pageInstance.animate(".navbar .back", [{ color: "#fff" }, { color: "#000" }], 1e3, {
        scrollSource: "#scroller",
        timeRange: 1e3,
        startScrollOffset: 0,
        endScrollOffset: 50
      });
    });
    const order = common_vendor.ref();
    const getMemberOrderByIdData = async () => {
      const res = await services_order.getMemberOrderByIdAPI(query.id);
      order.value = res.result;
      if ([services_constansts.OrderState.DaiShouHuo, services_constansts.OrderState.YiWanCheng, services_constansts.OrderState.DaiPingJia].includes(
        order.value.orderState
      )) {
        getMemberOrderLogisticsByIdData();
      }
    };
    const ontimeupdate = () => {
      order.value.orderState = services_constansts.OrderState.YiQuXiao;
    };
    const onOrderPay = async () => {
      {
        await services_pay.getPayMockAPI({ orderId: query.id });
      }
      common_vendor.index.redirectTo({ url: `/pagesOrder/payment/payment?id=${query.id}` });
    };
    const isDev = true;
    const onOrderSend = async () => {
      {
        await services_order.getMemberOrderConsignmentByIdAPI(query.id);
        common_vendor.index.showToast({ icon: "success", title: "模拟发货完成" });
        order.value.orderState = services_constansts.OrderState.DaiShouHuo;
      }
    };
    const onOrderConfirm = () => {
      common_vendor.index.showModal({
        content: "确认收货吗?",
        success: async (success) => {
          if (success.confirm) {
            const res = await services_order.putMemberOrderReceiptByIdAPI(query.id);
            order.value = res.result;
          }
        }
      });
    };
    common_vendor.onLoad(() => {
      getMemberOrderByIdData();
    });
    const logisticList = common_vendor.ref([]);
    const getMemberOrderLogisticsByIdData = async () => {
      const res = await services_order.getMemberOrderLogisticsByIdAPI(query.id);
      logisticList.value = res.result.list;
    };
    const onOrderDelete = async () => {
      common_vendor.index.showModal({
        content: "确认删除订单吗?",
        success: async (success) => {
          if (success.confirm) {
            await services_order.deleteMemberOrderAPI({ ids: [query.id] });
            common_vendor.index.redirectTo({ url: "/pagesOrder/list/list" });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: common_vendor.unref(pages).length > 1
      }, common_vendor.unref(pages).length > 1 ? {} : {}, {
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        c: order.value
      }, order.value ? common_vendor.e({
        d: order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiFuKuan
      }, order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiFuKuan ? {
        e: common_vendor.t(order.value.payMoney),
        f: common_vendor.o(ontimeupdate),
        g: common_vendor.p({
          second: order.value.countdown,
          color: "#fff",
          ["splitor-color"]: "#fff",
          ["show-day"]: false,
          ["show-colon"]: false
        }),
        h: common_vendor.o(onOrderPay)
      } : common_vendor.e({
        i: common_vendor.t(common_vendor.unref(services_constansts.orderStateList)[order.value.orderState].text),
        j: `/pagesOrder/create/create?orderId=${query.id}`,
        k: common_vendor.unref(isDev) && order.value.orderState == common_vendor.unref(services_constansts.OrderState).DaiFaHuo
      }, common_vendor.unref(isDev) && order.value.orderState == common_vendor.unref(services_constansts.OrderState).DaiFaHuo ? {
        l: common_vendor.o(onOrderSend)
      } : {}), {
        m: common_vendor.unref(safeAreaInsets).top + 20 + "px",
        n: common_vendor.f(logisticList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.t(item.text),
            c: item.id
          };
        }),
        o: common_vendor.t(order.value.receiverContact),
        p: common_vendor.t(order.value.receiverMobile),
        q: common_vendor.t(order.value.receiverAddress),
        r: common_vendor.f(order.value.skus, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.curPrice),
            e: common_vendor.t(item.quantity),
            f: item.id,
            g: `/pages/goods/goods?id=${item.spuId}`
          };
        }),
        s: order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiPingJia ? {} : {}, {
        t: common_vendor.t(order.value.totalMoney),
        v: common_vendor.t(order.value.postFee),
        w: common_vendor.t(order.value.payMoney),
        x: common_vendor.t(query.id),
        y: common_vendor.o(($event) => onCopy(query.id)),
        z: common_vendor.t(order.value.createTime),
        A: common_vendor.sr(guessRef, "45b6744c-1", {
          "k": "guessRef"
        }),
        B: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + "px",
        C: order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiFaHuo
      }, order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiFaHuo ? {
        D: common_vendor.o(onOrderPay),
        E: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.open) == null ? void 0 : _b2.call(_a2);
        })
      } : common_vendor.e({
        F: `/pagesOrder/create/create?orderId=${query.id}`,
        G: order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiShouHuo
      }, order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiShouHuo ? {
        H: common_vendor.o(onOrderConfirm)
      } : {}, {
        I: order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_constansts.OrderState).DaiPingJia ? {} : {}, {
        J: [common_vendor.unref(services_constansts.OrderState).DaiPingJia, common_vendor.unref(services_constansts.OrderState).YiWanCheng, common_vendor.unref(services_constansts.OrderState).YiQuXiao].includes(order.value.orderState)
      }, [common_vendor.unref(services_constansts.OrderState).DaiPingJia, common_vendor.unref(services_constansts.OrderState).YiWanCheng, common_vendor.unref(services_constansts.OrderState).YiQuXiao].includes(order.value.orderState) ? {
        K: common_vendor.o(onOrderDelete)
      } : {}), {
        L: ((_c = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _c.bottom) + "px"
      }) : {}, {
        M: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        ),
        N: common_vendor.f(reasonList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === reason.value ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => reason.value = item, item)
          };
        }),
        O: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.close) == null ? void 0 : _b2.call(_a2);
        }),
        P: common_vendor.sr(popup, "45b6744c-3", {
          "k": "popup"
        }),
        Q: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pagesOrder/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
