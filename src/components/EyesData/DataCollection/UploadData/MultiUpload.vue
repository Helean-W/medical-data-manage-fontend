<template>
  <div>
    <el-divider></el-divider>
    <el-upload
      style="margin-left: 23vw"
      class="upload-demo"
      ref="upload"
      drag
      action="http://122.144.180.37:8001/uploadzip/"
      :on-success="handleSuccess"
      accept=".zip"
      :data="{ position: '眼底' }"
      :auto-upload="false"
      :limit="1"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg格式的*.zip文件</div>
    </el-upload>

    <div style="width: 40vw; margin-left: 28vw; margin-top: 10vh">
      <el-button type="primary" @click="onSubmit">立即上传</el-button>
      <el-button @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "EyesMultiUpload",
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        console.log("文件列表为空");
        this.$message({
          showClose: true,
          message: "文件列表为空",
          duration: 1000,
          type: "error",
        });
        return;
      }
      this.$refs.upload.submit();
    },
    handleSuccess() {
      this.$alert("上传成功！", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          this.reload(); //刷新页面
        },
      });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
</style>