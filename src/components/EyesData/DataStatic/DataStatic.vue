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
          <el-menu-item index="/eyes/datastatic/eyeschart">
            <i class="el-icon-monitor"></i>
            <span slot="title">眼底数据</span>
          </el-menu-item>
          <el-menu-item index="/eyes/datastatic/allchart">
            <i class="el-icon-monitor"></i>
            <span slot="title">所有数据</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "EyesDataStatic",
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 82vh;
}
</style>