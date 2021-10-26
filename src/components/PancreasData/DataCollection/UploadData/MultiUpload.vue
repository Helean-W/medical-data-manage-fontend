<template>
  <div>
    <el-divider></el-divider>
    <el-upload
      style="margin-left: 20vw"
      class="upload-demo"
      ref="upload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      accept=".zip"
      :auto-upload="false"
      :limit="1"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传dicom格式的*.zip文件</div>
    </el-upload>

    <div style="width: 40vw; margin-left: 25vw; margin-top: 10vh">
      <el-button type="primary" @click="onSubmit">立即上传</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiUpload",
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      this.$refs.upload.submit();
    },
  },
};
</script>

<style scoped>
</style>