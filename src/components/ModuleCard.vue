<template>
  <div v-for="item in filteredModules" :key="item.id">
    <!-- 这里以航空模块为例，其他模块类似 -->
    <div class="module-group">
      <el-card class="module-card" shadow="hover">
        <!-- 图片区域 -->
        <div class="card-image">
          <img :src="getImageUrl(item.image_url)" alt="模块图" class="w-full h-full object-cover" />
        </div>

        <!-- 文字区域 -->
        <div class="card-content">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.description }}</p>
        </div>
      </el-card>
      <!-- 更多航空模块卡片 -->
    </div>
  </div>

</template>

<script setup lang="ts">
import { getImageUrl } from '@/utils/utils'
import { watch, ref, onMounted } from 'vue';
import { getProductsDataApi } from '@/api/index'

const filteredModules = ref<any>()

const props = defineProps({

  module: {
    type: String,
    required: true
  }
})
console.log('ModuleCard props:', props.module);
onMounted(() => {
  const params = {
    industry: props.module
  }
getProductsDataApi(params).then(res => {
    console.log('产品数据:', res)
    filteredModules.value = res.data.modules || []
  }).catch(err => {
    console.error('获取产品数据失败:', err)
  })
})

</script>

<style scoped>
.module-group {
  margin: 0 50px;
}

.module-card {
  border: 1px solid #ebeef5;
  transition: all 0.3s ease;
  height: 300px;
  min-width: 30px;
}

.module-card:hover {
  border-color: #409eff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.module-card .h-40 {
  background-color: #f3f4f6;
}

.module-card h3 {
  color: #303133;
}

.module-card p {
  line-height: 1.4;
}

.module-card {
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
}

/* .card-image {
  height: 180px;
  width: 100%;
  background-color: #f5f5f5;
} */
.card-image {
  height: 180px;
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  /* 添加这一行确保图片不会溢出容器 */
  position: relative;
  /* 可选：为绝对定位的图片提供参考 */
}

.card-image img {
  /* 确保图片完全填充容器并保持比例 */
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 保持图片比例并填充整个容器 */
  display: block;
  /* 移除图片下方可能的空白 */
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-desc {
  font-size: 14px;
  color: #909399;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}
</style>