<template>
  <div class="partner-section py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
    <div class="text-center-mb-10">
      <h2 class="text-3xl font-bold text-gray-800" style="margin: 20px 0">合作伙伴</h2>
      <p class="text-gray-600 mt-2" style="margin: 20px 0">正与众多客户一起创造更多价值</p>
    </div>
    <div v-if="partners.length > 0" style="display: flex; justify-content: space-around; padding-bottom: 14px;">
      <div v-for="logo in partners" :key="logo.id" class="flex justify-center">
        <img :src="getImageUrl(logo.logo_url)" alt="Logo" class="h-16 w-auto" />
      </div>
    </div>
    <el-skeleton v-else>
      <template #template>
        <div  class="task-list-header">
          <el-skeleton-item variant="image" style="width: 240px; height: 100px" />
          <el-skeleton-item variant="image" style="width: 240px; height: 100px" />
          <el-skeleton-item variant="image" style="width: 240px; height: 100px" />
        </div>
        <div style="padding: 14px">
          <div style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          ">
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPartnersDataApi } from '@/api/index'
import { getImageUrl } from '@/utils/utils'

const partners = ref([])

onMounted(() => {
  getPartnersDataApi().then((res) => {
    partners.value = res.data.partners
    console.log(res)
  })
})
</script>
<style scoped>
.task-list-header {
  /* display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  max-width: 100%;
  text-align: center;
  padding-bottom: 20px; */
  display: flex; 
  justify-content: space-around;
  padding-bottom: 14px;
}

.text-center-mb-10 {
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
}

.partner-section {
  background: linear-gradient(135deg, #e0f2fe 0%, #b7f1ff 100%);
  text-align: center;
}

/* .partner-section h2 {
  color: #1a365d;
}

.partner-section p {
  color: #4a5568;
} */

.partner-section .grid {
  gap: 1rem;
}

.partner-section img {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

@media (max-width: 900px) {
  .task-list-header {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 0 10px 20px 10px;
  }

  .partner-section img {
    height: 40px;
    max-width: 80px;
  }
}

@media (max-width: 500px) {
  .task-list-header {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 0 4px 16px 4px;
  }

  .partner-section img {
    height: 32px;
    max-width: 60px;
  }

  .text-center-mb-10 h2 {
    font-size: 1.2rem;
  }

  .text-center-mb-10 p {
    font-size: 0.9rem;
  }
}
</style>