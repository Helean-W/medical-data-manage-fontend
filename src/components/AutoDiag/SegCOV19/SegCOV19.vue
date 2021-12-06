<template>
  <div>
    <el-container>
      <el-aside style="width: 220px">
        <el-menu
          router
          class="el-menu-vertical-demo"
          :default-active="this.$route.path"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/autodiag/segcov19/upload">
            <i class="el-icon-upload"></i>
            <span slot="title">上传影像</span>
          </el-menu-item>
          <el-menu-item index="/autodiag/segcov19/select">
            <i class="el-icon-search"></i>
            <span slot="title">选择影像</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="height: 81vh; padding: 5px"
        ><router-view></router-view
      ></el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "SegCOV19",
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 81vh;
}
</style>