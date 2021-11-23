<template>
  <div>
    <el-divider></el-divider>
    <div style="margin-left: 23vw">
      <el-upload
        class="upload-demo"
        ref="upload"
        drag
        action="http://122.144.180.37:8001/uploadsingle/"
        :on-success="handleSuccess"
        :on-error="handleError"
        accept="image/jpg"
        :data="form"
        :auto-upload="false"
        :limit="1"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传*.jpg文件</div>
      </el-upload>
      <div style="margin-top: 15px; width: 15vw">
        <el-form ref="form" :model="form" label-width="80px">
          <!-- <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item> -->
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
      <!-- <el-divider direction="vertical"></el-divider> -->
    </div>
    <div style="width: 40vw; margin-left: 28vw; margin-top: 10vh">
      <el-button type="primary" @click="onSubmit">立即上传</el-button>
      <el-button @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "LungsSingleUpload",
  data() {
    return {
      form: {
        name: "",
        gender: "",
        age: "",
        position: "肺部",
      },
    };
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
    handleError() {
      this.$alert("上传失败！", "提示", {
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
.el-divider--vertical {
  height: 30vh;
}
</style>