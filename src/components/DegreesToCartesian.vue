<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="经纬度转笛卡尔" name="first">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">Cesium.Cartesian3.fromDegrees (longitude, latitude, height , ellipsoid ,
              result )
            </div>
          </el-col>
        </el-row>
        <el-row>
          <table>
            <tr>
              <td>经度(longitude):</td>
              <td>
                <el-col :span="6" :xs="24">
                  <div class="grid-content bg-purple">
                    <el-input class="input" v-model="lon_input" placeholder="请输入经度"></el-input>
                  </div>
                </el-col>
              </td>
            </tr>
            <tr>
              <td>纬度(latitude):</td>
              <td>
                <el-col :span="6" :xs="24">
                  <div class="grid-content bg-purple">
                    <el-input class="input" v-model="lat_input" placeholder="请输入纬度"></el-input>
                  </div>
                </el-col>
              </td>
            </tr>
            <tr>
              <td colspan="2">{{ result }}</td>
            </tr>
            <tr>
              <td><el-button @click="LatAndLonToCartesian">默认按钮</el-button></td>
            </tr>
          </table>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="笛卡尔转经纬度" name="second">笛卡尔转经纬度</el-tab-pane>
      <el-tab-pane label="经纬度转弧度" name="third">经纬度转弧度</el-tab-pane>
      <el-tab-pane label="度分秒坐标转换" name="fourth">度分秒坐标转换</el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
export default {
  name: "DegreesToCartesian",
  data() {
    return {
      lon_input: '',
      lat_input: '',
      result: '',
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    LatAndLonToCartesian: function (){
      try{
        var longitude = Number(this.lon_input);
        var latitude = Number(this.lat_input);
        let cartesian3 = Cesium.Cartesian3.fromDegrees(longitude,latitude);
        this.result = cartesian3;
      }catch (e) {
        console.log(e);
        this.$message.error('请输入正确的坐标');
      }

    }
  }
}
</script>

<style scoped>

.input {
  width: 200px;
}
</style>