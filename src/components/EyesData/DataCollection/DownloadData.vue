<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="
        tableData.filter(
          (data) =>
            !search ||
            String(data['id']).includes(search) ||
            String(data['gender']).includes(search) ||
            String(data['age']).includes(search) ||
            String(data['position']).includes(search)
        )
      "
      stripe
      v-loading="loading"
      :max-height="tableHeight"
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="id" prop="id"> </el-table-column>
      <el-table-column label="性别" prop="gender"> </el-table-column>
      <el-table-column label="年龄" prop="age"> </el-table-column>
      <el-table-column label="部位" prop="position"> </el-table-column>
      <el-table-column label="影像" prop="url"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input
            v-model="search"
            size="small"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleImg(scope.$index, scope.row)"
            >查看影像</el-button
          >
          <el-dialog :visible.sync="dialogVisible" width="50%">
            <el-image :src="'data:image/jpeg;base64,' + img_base64"></el-image>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 7vh; margin-left: 30vw">
      <el-button type="primary" size="medium" @click="handleDownload"
        >下载选中记录</el-button
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
const baseUrl = "http://122.144.180.37:8001/";
const getAllData = baseUrl + "queryall/";
const viewImg = baseUrl + "viewjpg/";
export default {
  inject: ["reload"],
  name: "EyesDownload",
  data() {
    return {
      tableHeight: null,
      tableData: [],
      search: "",
      loading: true,
      img_base64: "",
      dialogVisible: false,
      multipleSelection: [],
    };
  },
  created() {
    axios.get(getAllData).then(
      (response) => {
        console.log("获取结果", response.data);
        if (response.data.ret.length != "undefined") {
          for (let i = 0; i < response.data.ret.length; i++) {
            let temp = {};
            temp["id"] = response.data.ret[i][0];
            temp["gender"] = response.data.ret[i][1];
            temp["age"] = response.data.ret[i][2];
            temp["position"] = response.data.ret[i][3];
            temp["url"] = response.data.ret[i][4];
            this.tableData.push(temp);
          }
          this.tableData = this.tableData.filter((data) => {
            return data.position === "眼底";
          });
        }
        this.loading = false;
      },
      (error) => {
        console.log("获取失败", error.message);
      }
    );
    console.log(this.tableData);
  },
  beforeMount() {
    // console.log(window.innerHeight);
    this.tableHeight = window.innerHeight - 250; //表格自适应高度
  },
  methods: {
    handleImg(index, row) {
      axios
        .get(viewImg, {
          params: {
            url: row.url,
          },
        })
        .then(
          (response) => {
            this.img_base64 = response.data;
            this.dialogVisible = true;
          },
          (error) => {
            console.log("失败", error.message);
          }
        );
      console.log(index, row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    handleDownload() {
      if (this.multipleSelection.length == 0) {
        this.$message({
          showClose: true,
          message: "未选中任何项！",
          duration: 1000,
          type: "error",
        });
        return;
      }
      this.multipleSelection.forEach((item) => {
        let name =
          item["id"] +
          "_" +
          item["position"] +
          "_" +
          item["gender"] +
          "_" +
          item["age"] +
          "岁" +
          ".jpg";
        let a = document.createElement("a");
        // a.href = item["url"].split("http://127.0.0.1:8000")[1]; //download命名文件只有不跨域的时候才有效，所以应该提取url中的/resources/xxxxxx.dcm部分
        a.href = item["url"].replace("8001", "8002");
        console.log(a.href);
        a.download = name;
        a.click();
      });
      this.reload();
    },
  },
};
</script>