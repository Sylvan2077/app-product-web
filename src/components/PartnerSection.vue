<template>
  <div class="partner-section py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
    <div class="text-center-mb-10">
      <h2 class="text-3xl font-bold text-gray-800" style="margin: 20px 0">合作伙伴</h2>
      <p class="text-gray-600 mt-2" style="margin: 20px 0">正与众多客户一起创造更多价值</p>
    </div>

    <div class="task-list-header">
      <div v-for="logo in logos" :key="logo.id" class="flex justify-center">
        <img :src="logo.src" alt="Logo" class="h-16 w-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import huawei from '@/assets/huawei.png'
import mobile from '@/assets/mobile.png'
import telecom from '@/assets/telecom.png'

const logos = ref([
  { id: 1, src: huawei },
  { id: 2, src: huawei },
  { id: 3, src: huawei },
  { id: 4, src: huawei },
  { id: 5, src: huawei },
  { id: 6, src: huawei },
  { id: 7, src: mobile },
  { id: 8, src: mobile },
  { id: 9, src: mobile },
  { id: 10, src: mobile },
  { id: 11, src: mobile },
  { id: 12, src: mobile },
  { id: 13, src: telecom },
  { id: 14, src: telecom },
  { id: 15, src: telecom },
  { id: 16, src: telecom },
  { id: 17, src: telecom },
  { id: 18, src: telecom }
])

</script>
<style scoped>
.task-list-header {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  max-width: 100%;
  text-align: center;
  padding-bottom: 20px;
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