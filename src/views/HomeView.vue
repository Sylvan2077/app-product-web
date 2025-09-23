<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import pageone from '../components/pageone.vue'
// import { useTagsViewStore } from "@/pinia/stores/tags-view"

// const tagsViewStore = useTagsViewStore()

</script>

<template>
    <section class="app-main">
      <div class="app-scrollbar">
        <router-view v-slot="{ Component, route }">
          <transition name="el-fade-in" mode="out-in">
            <keep-alive>
              <pageone />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </section>
  <!-- <main>
      <pageone />
  </main> -->
</template>
<style lang="scss" scoped>
// @import "@/common/assets/styles/mixins.scss";

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
