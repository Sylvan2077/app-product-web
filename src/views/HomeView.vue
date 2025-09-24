

<template>
  <div class="home-page">
    <!-- Header -->
    <NavigatonBar />

    <!-- Banner -->
    <HeroBanner />

    <!-- 内容区域 -->
    <main class="container mx-auto px-4 pb-12">
      <!-- <CategoryFilter @industry-change="onIndustryChange" @subject-change="onSubjectChange" /> -->

      <!-- 分类展示区 -->
      <div v-for="(category, key) in categories" :key="key" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">{{ category.title }} <span class="text-blue-500">▼</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard
            v-for="item in filteredModules"
            :key="item.id"
            :title="item.title"
            :description="item.desc" 
            :image-url="item.img"
          />
        </div>
      </div>
    </main>

    <!-- 合作伙伴 -->
    <PartnerSection />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HeroBanner from '@/components/HeroBanner.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import ModuleCard from '@/components/ModuleCard.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import Footer from '@/components/Footer.vue'
import NavigatonBar from '@/components/NavigatonBar.vue'


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
  { title: '热门推荐' },
  { title: '最新上线' },
  { title: '客户精选' }
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
/* 可选：添加过渡动画 */
.module-card {
  transition: transform 0.2s ease;
}
.module-card:hover {
  transform: translateY(-4px);
}
</style>