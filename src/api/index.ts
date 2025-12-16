import type * as Tables from "./type"
import { request } from "@/http/axios"

/** 查 */
// 查产品
export function getProductsDataApi(params: Tables.GetProductsDataApi) {
  return request({
    url: "products",
    method: "get",
    params
  })
}

// 查首页banner
export function getHomeBannerDataApi() {
  return request({
    url: "banner",
    method: "get"
  })
}

// 统计行业和学科
export function getStaticsDataApi() {
  return request({
    url: "statics",
    method: "get"
  })
}

// 查合作伙伴
export function getPartnersDataApi() {
  return request({
    url: "partners",
    method: "get"
  })
}

//查关于我们
export function getAboutUsDataApi() {
  return request({
    url: "about-us",
    method: "get"
  })
}