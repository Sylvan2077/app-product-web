<template>
  <div class="app-main">
    <div class="app-scrollbar">
      <!-- Header -->
      <NavigatonBar />

      <!-- Banner -->
      <HeroBanner />

      <!-- 内容区域 -->
      <main class="container mx-auto px-4 pb-12">
        <!-- <CategoryFilter @industry-change="onIndustryChange" @subject-change="onSubjectChange" /> -->

        <!-- 分类展示区 -->
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item :title="category.title" :name="key" :icon="CaretRight" div
            v-for="(category, key) in categories" :key="key" class="mb-8">
            <div class="task-list-header">
              <ModuleCard v-for="item in filteredModules" :key="item.id" :title="item.title" :description="item.desc"
                :image-url="item.img" />
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
import { ref, computed } from 'vue'
import HeroBanner from '@/components/HeroBanner.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import ModuleCard from '@/components/ModuleCard.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import Footer from '@/components/Footer.vue'
import NavigatonBar from '@/components/NavigatonBar.vue'
import { CaretRight } from '@element-plus/icons-vue'

import type { CollapseModelValue } from 'element-plus'

const activeNames = ref([0, 1, 3])
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
  },
  {
    id: 2,
    title: '流体动力分析模块',
    desc: '高效流体模拟引擎',
    img: 'https://via.placeholder.com/300x200?text=Fluid',
    industry: 'space',
    subject: 'fluid'
  },
  {
    id: 3,
    title: '电磁场仿真套件',
    desc: '多频段电磁分析',
    img: 'https://via.placeholder.com/300x200?text=EM',
    industry: 'weaponry',
    subject: 'electromagnetic'
  },
  {
    id: 4,
    title: '辐射热传导模块',
    desc: '高精度热辐射建模',
    img: 'https://via.placeholder.com/300x200?text=Radiation',
    industry: 'ship',
    subject: 'radiation'
  },
  {
    id: 5,
    title: '多物理耦合仿真器',
    desc: '跨学科联合仿真',
    img: 'https://via.placeholder.com/300x200?text=Multiphysics',
    industry: 'civil',
    subject: 'multiphysics'
  },
  {
    id: 6,
    title: '通用结构分析模块',
    desc: '支持多种材料模型',
    img: 'https://via.placeholder.com/300x200?text=General+Struct',
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
  max-width: 100%;
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