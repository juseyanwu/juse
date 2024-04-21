"use strict";
const common_vendor = require("../../common/vendor.js");
const useMemberStore = common_vendor.defineStore(
  "member",
  () => {
    const profile = common_vendor.ref();
    const setProfile = (val) => {
      profile.value = val;
    };
    const clearProfile = () => {
      profile.value = void 0;
    };
    return {
      profile,
      setProfile,
      clearProfile
    };
  },
  // TODO: 持久化
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API，插件默认使用 `localStorage` 实现持久化，小程序端不兼容，需要替换持久化 API。
      storage: {
        getItem(key) {
          return common_vendor.index.getStorageSync(key);
        },
        setItem(key, value) {
          return common_vendor.index.setStorageSync(key, value);
        }
      }
    }
  }
);
exports.useMemberStore = useMemberStore;
//# sourceMappingURL=member.js.map
