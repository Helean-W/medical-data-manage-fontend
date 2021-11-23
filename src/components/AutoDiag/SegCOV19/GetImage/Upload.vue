<template>
  <div
    v-loading="loading"
    element-loading-text="算法运行中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-divider></el-divider>
    <div
      style="
        margin-left: 20vw;
        margin-right: 20vw;
        width: 30vw;
        display: flex;
        justify-content: space-around;
      "
    >
      <el-upload
        :class="{ hide: hideUpload }"
        ref="upload"
        list-type="picture-card"
        action="http://122.144.180.37:8001/segimage/"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-change="handleChange"
        :on-remove="handleRemove"
        accept="image/jpg"
        :auto-upload="false"
        :limit="1"
        :file-list="fileList"
        :on-preview="handlePictureCardPreview"
      >
        <i class="el-icon-plus"></i>
        <div class="el-upload__tip" slot="tip">请上传*.jpg文件</div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      <el-divider direction="vertical"></el-divider>
      <div
        class="block"
        style="
          width: 148px;
          height: 148px;
          background-color: #c0c4cc;
          text-align: center;
        "
      >
        <el-image :src="img_base64">
          <div slot="error" class="image-slot">
            <p style="color: white">分割结果</p>
          </div>
        </el-image>
      </div>
    </div>

    <div style="width: 40vw; margin-left: 28vw; margin-top: 10vh">
      <el-button type="primary" @click="onSubmit">上传影像获取结果</el-button>
      <el-button @click="goBack">重新上传</el-button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "UploadLung",
  data() {
    return {
      loading: false,
      img_base64: "",
      fileList: [],
      hideUpload: false, //上传一个图片后隐藏上传框
      limitCount: 1,
      dialogImageUrl: "",
      dialogVisible: false,
      diagnosticResult: "",
      showResult: false,
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
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
      this.loading = true;
    },
    handleSuccess(res) {
      this.loading = false;
      this.img_base64 = "data:image/png;base64," + res;
      this.$alert("上传成功！", "提示", {
        confirmButtonText: "查看结果",
      });
    },
    handleError() {
      this.loading = false;
      this.$alert("上传失败！", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          this.reload();
        },
      });
    },
    handleChange(file, fileList) {
      this.hideUpload = fileList.length >= this.limitCount;
    },
    handleRemove(file, fileList) {
      this.hideUpload = fileList.length >= this.limitCount;
      this.showResult = false;
    },
    goBack() {
      this.reload(); //刷新页面
    },
  },
};
</script>

<style>
.hide .el-upload--picture-card {
  display: none;
}
.el-divider--vertical {
  height: 18vh;
}
</style>