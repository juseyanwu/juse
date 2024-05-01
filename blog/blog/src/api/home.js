import http from "@/config/request";

/** 获取首页数据统计 */
export const homeGetStatistic = () => {
  return new Promise((resolve, reject) => {
    http.get("/api/statistic", {}).then((res) => {
      resolve(res);
    });
  });
};

/** 获取ColaKey */
export const getKey = () => {
  return new Promise((resolve, reject) => {
    http
      .post("https://luckycola.com.cn/ai/getColaKey", {
        uid: "xIlyH01695893781527LY3zhJGJ0n", //输入在luckycola上获取的uid和appkey以获取ColaKey
        appKey: "651549153295914ff09985c1",
      })
      .then((res) => {
        resolve(res);
      });
  });
};

/** 一言api 认证ColaKey成功后获取句子 */
export const getSentence = (ColaKey) => {  //在传入获取到的ColaKey后才可以拿到句子
  return new Promise((resolve, reject) => {
    http
      .post("https://luckycola.com.cn/tools/yiyan", {
        ColaKey,
      })
      .then((res) => {
        resolve(res);
      });
  });
};
