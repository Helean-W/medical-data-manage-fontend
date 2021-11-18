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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-upload"></i>
              <span>上传数据</span>
            </template>
            <el-menu-item index="/eyes/datacollection/singleupload"
              >单例导入</el-menu-item
            >
            <el-menu-item index="/eyes/datacollection/multiupload"
              >批量导入</el-menu-item
            >
          </el-submenu>
          <el-menu-item index="/eyes/datacollection/download">
            <i class="el-icon-download"></i>
            <span slot="title">下载数据</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "EyesDataCollection",
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 82vh;
  width: 220px;
}
</style>