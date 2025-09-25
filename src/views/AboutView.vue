<script setup lang="ts">
import NavigatonBar from '@/components/NavigatonBar.vue'
import Footer from '@/components/Footer.vue'
import ThemeAndFeature from '@/components/ThemeAndFeature.vue'
import CaseImgLeft from '@/components/CaseImgLeft.vue'
import CaseImgRight from '@/components/CaseImgRight.vue'
import CarouseSection from '@/components/CarouseSection.vue'

</script>

<template>
  <section class="app-main">
    <div class="app-scrollbar">
      <router-view v-slot="{ Component, route }">
        <transition name="el-fade-in" mode="out-in">
          <keep-alive>
            <div class="impact-dynamics-page">
              <NavigatonBar />

              <ThemeAndFeature />

              <CaseImgLeft />
              <CaseImgRight />

              <CarouseSection />

              <!-- 页脚 -->
              <Footer />
            </div>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.impact-dynamics-page {
  font-family: 'Microsoft YaHei', sans-serif;
  color: #333;
  background: linear-gradient(to bottom, #e6f7ff, #fff);
}

.app-main {
  width: 100%;
  display: flex;
}

.app-scrollbar {
  flex-grow: 1;
  overflow: auto;
  // @extend %scrollbar;
  display: flex;
  flex-direction: column;

  .app-container-grow {
    flex-grow: 1;
  }
}
</style>