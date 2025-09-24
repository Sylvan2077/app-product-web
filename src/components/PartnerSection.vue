<template>
  <div class="partner-section py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-800">合作伙伴</h2>
      <p class="text-gray-600 mt-2">正与众多客户一起创造更多价值</p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
      <div v-for="logo in logos" :key="logo.id" class="flex justify-center">
        <img :src="logo.src" alt="Logo" class="h-16 w-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        { id: 1, src: 'https://via.placeholder.com/100x40?text=HUAWEI' },
        { id: 2, src: 'https://via.placeholder.com/100x40?text=HUAWEI' },
        { id: 3, src: 'https://via.placeholder.com/100x40?text=HUAWEI' },
        { id: 4, src: 'https://via.placeholder.com/100x40?text=HUAWEI' },
        { id: 5, src: 'https://via.placeholder.com/100x40?text=HUAWEI' },
        { id: 6, src: 'https://via.placeholder.com/100x40?text=HUAWEI' },
        { id: 7, src: 'https://via.placeholder.com/100x40?text=China+Mobile' },
        { id: 8, src: 'https://via.placeholder.com/100x40?text=China+Mobile' },
        { id: 9, src: 'https://via.placeholder.com/100x40?text=China+Mobile' },
        { id: 10, src: 'https://via.placeholder.com/100x40?text=China+Mobile' },
        { id: 11, src: 'https://via.placeholder.com/100x40?text=China+Mobile' },
        { id: 12, src: 'https://via.placeholder.com/100x40?text=China+Mobile' },
        { id: 13, src: 'https://via.placeholder.com/100x40?text=China+Telecom' },
        { id: 14, src: 'https://via.placeholder.com/100x40?text=China+Telecom' },
        { id: 15, src: 'https://via.placeholder.com/100x40?text=China+Telecom' },
        { id: 16, src: 'https://via.placeholder.com/100x40?text=China+Telecom' },
        { id: 17, src: 'https://via.placeholder.com/100x40?text=China+Telecom' },
        { id: 18, src: 'https://via.placeholder.com/100x40?text=China+Telecom' }
      ]
    }
  }
}
</script>
<style scoped>
.partner-section {
  background: linear-gradient(135deg, #e0f2fe 0%, #b7f1ff 100%);
}

.partner-section h2 {
  color: #1a365d;
}

.partner-section p {
  color: #4a5568;
}

.partner-section .grid {
  gap: 1rem;
}

.partner-section img {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
</style>