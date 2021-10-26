<template>
  <div>
    <el-divider></el-divider>
    <div
      style="display: flex; justify-content: space-between; margin-right: 10vw"
    >
      <div style="width: 27vw">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.lastName"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <el-divider direction="vertical"></el-divider>
      <el-upload
        class="upload-demo"
        ref="upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        accept=".dcm"
        :auto-upload="false"
        :limit="1"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传*.dcm文件</div>
      </el-upload>
    </div>
    <div style="width: 40vw; margin-left: 25vw; margin-top: 10vh">
      <el-button type="primary" @click="onSubmit">立即上传</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleUpload",
  data() {
    return {
      form: {
        lastName: "",
        gender: "",
        age: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.upload.submit();
    },
  },
};
</script>

<style scoped>
.el-divider--vertical {
  height: 35vh;
}
</style>