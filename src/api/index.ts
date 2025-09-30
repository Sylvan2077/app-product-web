import type * as Tables from "./type"
import { request } from "@/http/axios"

// /** 增 */
// export function createTableDataApi(data: Tables.CreateOrUpdateTableRequestData) {
//   return request({
//     url: "tables",
//     method: "post",
//     data
//   })
// }

// /** 删 */
// export function deleteTableDataApi(id: number) {
//   return request({
//     url: `tables/${id}`,
//     method: "delete"
//   })
// }

// /** 改 */
// export function updateTableDataApi(data: Tables.CreateOrUpdateTableRequestData) {
//   return request({
//     url: "tables",
//     method: "put",
//     data
//   })
// }

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