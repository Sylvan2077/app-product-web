<script setup lang="ts">
import NavigatonBar from '@/components/NavigatonBar.vue'
import Footer from '@/components/Footer.vue'
import ThemeAndFeature from '@/components/ThemeAndFeature.vue'
import CaseImgLeft from '@/components/CaseImgLeft.vue'
import CaseImgRight from '@/components/CaseImgRight.vue'
import CarouseSection from '@/components/CarouseSection.vue'

</script>

<template>
  <div class="app-main">
    <div class="app-scrollbar">
      <div class="impact-dynamics-page">
        <NavigatonBar />

        <ThemeAndFeature />

        <CaseImgLeft class="side-caseimg"/>
        <CaseImgRight class="side-caseimg"/>

        <CarouseSection/>

        <!-- 页脚 -->
        <Footer />
      </div>
    </div>
  </div>
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

.side-caseimg {
  margin: 0px 50px;
}
</style>