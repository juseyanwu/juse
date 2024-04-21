"use strict";
const utils_http = require("../utils/http.js");
const postMemberAddressApI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/address",
    data
  });
};
const getMemberAddressApI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/address"
  });
};
const getMemberAddressByIdApI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/address/${id}`
  });
};
const putMemberAddressByIdApI = (id, data) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/address/${id}`,
    data
  });
};
const deleteMemberAddressApI = (id) => {
  return utils_http.http({
    method: "DELETE",
    url: `/member/address/${id}`
  });
};
exports.deleteMemberAddressApI = deleteMemberAddressApI;
exports.getMemberAddressApI = getMemberAddressApI;
exports.getMemberAddressByIdApI = getMemberAddressByIdApI;
exports.postMemberAddressApI = postMemberAddressApI;
exports.putMemberAddressByIdApI = putMemberAddressByIdApI;
//# sourceMappingURL=address.js.map
