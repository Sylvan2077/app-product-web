<template>
    <div style="display: flex; justify-content: space-around;">
        <el-card shadow="hover" class="model-card">
          <img src="@/assets/卫星.png" alt="模型" />
          <h4>{{ props.msg }}</h4>
          <p>简短介绍简短介绍简短介绍简短介绍</p>
        </el-card>
        <el-card shadow="hover" class="model-card">
          <img src="@/assets/卫星.png" alt="模型" />
          <h4>{{ props.msg }}</h4>
          <p>简短介绍简短介绍简短介绍简短介绍</p>
        </el-card>
        <el-card shadow="hover" class="model-card">
          <img src="@/assets/卫星.png" alt="模型" />
          <h4>{{ props.msg }}</h4>
          <p>简短介绍简短介绍简短介绍简短介绍</p>
        </el-card>
    </div>
</template>

<script setup>
const props = defineProps({
    msg: {
        type: String,
        default: '默认标题'
    }
})
</script>

<style scoped>
.carousel-card {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    background: #fff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>