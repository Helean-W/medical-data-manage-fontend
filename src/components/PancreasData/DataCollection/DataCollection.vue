<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
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
            <el-menu-item index="/pancreas/datacollection/singleupload"
              >单例导入</el-menu-item
            >
            <el-menu-item index="/pancreas/datacollection/multiupload"
              >批量导入</el-menu-item
            >
          </el-submenu>
          <el-menu-item index="2">
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
  name: "DataCollection",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 82vh;
  width: 220px;
}
</style>