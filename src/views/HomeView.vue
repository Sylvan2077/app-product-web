<template>
  <div class="app-main">
    <div class="app-scrollbar">
      <!-- Header -->
      <NavigatonBar />

      <!-- Banner -->
      <HeroBanner />

      <!-- 内容区域 -->
      <main class="container mx-auto px-4 pb-12">
        <!-- 分类展示区 -->
        <el-collapse v-model="activeNames" @change="handleChange" style="margin: 0 40px;">
          <el-collapse-item :title="category.title" :name="category.title" :icon="CaretRight" div
            v-for="(category, key) in categories" :key="key" class="mb-8">
            <div class="task-list-header">
              <ModuleCard :module="category.title" />
            </div>
          </el-collapse-item>
        </el-collapse>
      </main>

      <!-- 合作伙伴 -->
      <PartnerSection />

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import HeroBanner from '@/components/HeroBanner.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import ModuleCard from '@/components/ModuleCard.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import Footer from '@/components/Footer.vue'
import NavigatonBar from '@/components/NavigatonBar.vue'
import { CaretRight } from '@element-plus/icons-vue'
import type { CollapseModelValue } from 'element-plus'
import { getProductsDataApi } from '@/api/index'

getProductsDataApi({}).then(res => {
  console.log('产品数据:', res)
}).catch(err => {
  console.error('获取产品数据失败:', err)
})

const activeNames = ref(["航空", "航天", "船舶"])
const handleChange = (val: CollapseModelValue) => {
  console.log(val)
}

// 数据源 —— 简化 description 为 desc，内容也精简
const modules = ref([
  {
    id: 1,
    title: '某平台 结构振动仿真模块',
    desc: '结构仿真核心模块',
    img: 'https://via.placeholder.com/300x200?text=Struct',
    industry: 'aviation',
    subject: 'structure'
  }
])


// 筛选状态
const selectedIndustry = ref('all')
const selectedSubject = ref('all')

// 筛选逻辑
const filteredModules = computed(() => {
  return modules.value.filter(item => {
    const matchIndustry = selectedIndustry.value === 'all' || item.industry === selectedIndustry.value
    const matchSubject = selectedSubject.value === 'all' || item.subject === selectedSubject.value
    return matchIndustry && matchSubject
  })
})

// 分类标题（可扩展）
const categories = [
  { title: '航空' },
  { title: '航天' },
  { title: '兵器' },
  { title: '船舶' }
]

// 事件处理
const onIndustryChange = (val) => {
  selectedIndustry.value = val
}

const onSubjectChange = (val) => {
  selectedSubject.value = val
}
</script>

<style scoped>
.app-main {
  width: 100%;
  display: flex;
}

.app-scrollbar {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .app-container-grow {
    flex-grow: 1;
  }
}

.task-list-header {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 80%;
  margin: 0 auto;
  
}

/deep/ .el-collapse-item__header {
  font-size: 18px;
  /* color: #F56C6C; */
}

/* 可选：添加过渡动画 */
.module-card {
  transition: transform 0.2s ease;
}

.module-card:hover {
  transform: translateY(-4px);
}
</style>