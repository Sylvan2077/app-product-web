// 获取基础URL并去掉/api后缀
export const getBaseUrl = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api'
  return baseUrl.replace('/api', '')
}

// 拼接完整的图片URL
export const getImageUrl = (imgPath: string) => {
  const baseUrl = getBaseUrl()
  return `${baseUrl}${imgPath}`
}
