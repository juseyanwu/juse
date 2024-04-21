"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_constansts = require("../../../services/constansts.js");
const services_order = require("../../../services/order.js");
const services_pay = require("../../../services/pay.js");
require("../../../utils/http.js");
require("../../../stores/index.js");
require("../../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "OrderList",
  props: {
    orderState: null
  },
  setup(__props) {
    const props = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const queryParams = {
      page: 1,
      pageSize: 5,
      orderState: props.orderState
    };
    const orderList = common_vendor.ref([]);
    const getOrderListData = async () => {
      const res = await services_order.getMemberOrderAPI(queryParams);
      orderList.value = res.result.items;
    };
    const onOrderPay = async (id) => {
      {
        await services_pay.getPayMockAPI({ orderId: id });
      }
      common_vendor.index.showToast({
        icon: "success",
        title: "模拟支付成功"
      });
      const order = orderList.value.find((item) => item.id === id);
      order.orderState = services_constansts.OrderState.DaiFaHuo;
    };
    common_vendor.onMounted(() => {
      getOrderListData();
    });
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.f(orderList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.createTime),
            b: common_vendor.t(common_vendor.unref(services_constansts.orderStateList)[item.orderState].text),
            c: item.orderState >= common_vendor.unref(services_constansts.OrderState).DaiPingJia
          }, item.orderState >= common_vendor.unref(services_constansts.OrderState).DaiPingJia ? {} : {}, {
            d: common_vendor.f(item.skus, (sku, k1, i1) => {
              return {
                a: sku.image,
                b: common_vendor.t(sku.name),
                c: common_vendor.t(sku.attrsText),
                d: sku.id
              };
            }),
            e: `/pagesOrder/detail/index?id=${item.id}`,
            f: common_vendor.t(item.totalNum),
            g: common_vendor.t(item.payMoney),
            h: item.orderState === common_vendor.unref(services_constansts.OrderState).DaiFuKuan
          }, item.orderState === common_vendor.unref(services_constansts.OrderState).DaiFuKuan ? {
            i: common_vendor.o(($event) => onOrderPay(item.id), item.id)
          } : common_vendor.e({
            j: `/pagesOrder/create/index?orderId={{item.id}}`,
            k: item.orderState === common_vendor.unref(services_constansts.OrderState).DaiShouHuo
          }, item.orderState === common_vendor.unref(services_constansts.OrderState).DaiShouHuo ? {} : {}), {
            l: item.id
          });
        }),
        b: common_vendor.t("没有更多数据~"),
        c: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/wsczj/Desktop/xinxiangzhi-uniapp-main/src/pagesOrder/list/components/OrderList.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=OrderList.js.map
