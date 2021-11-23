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
        align-items: center;
      "
    >
      <el-upload
        :class="{ hide: hideUpload }"
        ref="upload"
        list-type="picture-card"
        action="http://122.144.180.37:8001/gradimg/"
        :on-success="handleSuccess"
        :on-error="handleError"
        :on-change="handleChange"
        :on-remove="handleRemove"
        accept="image/jpg, image/jpeg"
        :auto-upload="false"
        :limit="1"
        :file-list="fileList"
        :on-preview="handlePictureCardPreview"
      >
        <i class="el-icon-plus"></i>
        <div class="el-upload__tip" slot="tip">请上传*.jpg或*.jpeg文件</div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      <el-divider v-if="this.showResult" direction="vertical"></el-divider>
      <el-card v-if="this.showResult" class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 18px">诊断结果</span>
        </div>
        <div class="text item" style="font-size: 23px; font-weight: bold">
          糖网病等级为: {{ diagnosticResult }}
        </div>
      </el-card>
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
  name: "UploadEye",
  data() {
    return {
      loading: false,
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
      this.$alert("上传成功！", "提示", {
        confirmButtonText: "查看诊断结果",
        callback: () => {
          console.log(res);
          switch (res.data) {
            case "0":
              this.diagnosticResult = "等级0-无病";
              break;
            case "1":
              this.diagnosticResult = "等级1-轻度糖网病";
              break;
            case "2":
              this.diagnosticResult = "等级2-中度糖网病";
              break;
            case "3":
              this.diagnosticResult = "等级3-重度糖网病";
              break;
            case "4":
              this.diagnosticResult = "等级4-增殖期糖网病";
              break;
          }

          this.showResult = true;
        },
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
  height: 22vh;
}
</style>