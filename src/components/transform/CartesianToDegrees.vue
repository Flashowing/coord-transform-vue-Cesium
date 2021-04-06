<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <p>let cartographic = Cesium.Cartographic.fromCartesian(cartesian)</p>
          <p>let lon = Cesium.Math.toDegrees(cartographic.longitude)</p>
          <p>let lat = Cesium.Math.toDegrees(cartographic.latitude)</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <table>
        <tr>
          <td>X:</td>
          <td>
            <el-col :span="6" :xs="24">
              <div class="grid-content bg-purple">
                <el-input class="input" v-model="car_x_f2" placeholder="Cartesian3.x"></el-input>
              </div>
            </el-col>
          </td>
        </tr>
        <tr>
          <td>Y:</td>
          <td>
            <el-col :span="6" :xs="24">
              <div class="grid-content bg-purple">
                <el-input class="input" v-model="car_y_f2" placeholder="Cartesian3.y"></el-input>
              </div>
            </el-col>
          </td>
        </tr>
        <tr>
          <td>Z:</td>
          <td>
            <el-col :span="6" :xs="24">
              <div class="grid-content bg-purple">
                <el-input class="input" v-model="car_z_f2" placeholder="Cartesian3.z"></el-input>
              </div>
            </el-col>
          </td>
        </tr>
        <tr>
          <td colspan="2">{{ result }}</td>
        </tr>
        <tr>
          <td colspan="2">
            <el-button @click="Cartesian3ToDegrees">默认按钮</el-button>
          </td>
        </tr>
      </table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CartesianToDegrees",
  data() {
    return {
      car_x_f2: '',
      car_y_f2: '',
      car_z_f2: '',
      result: '',
    }
  },
  methods: {
    Cartesian3ToDegrees: function () {
      if (!this.car_x_f2 || !this.car_y_f2 || !this.car_z_f2) {
        this.$message.error('请输入正确的坐标');
        return;
      }
      try {
        let x = Number(this.car_x_f2);
        let y = Number(this.car_y_f2);
        let z = Number(this.car_z_f2);
        let cartographic = Cesium.Cartographic.fromCartesian(new Cesium.Cartesian3(x, y, z));
        let lon = Cesium.Math.toDegrees(cartographic.longitude);
        let lat = Cesium.Math.toDegrees(cartographic.latitude);
        let elev = cartographic.height;
        this.result = lon + "," + lat + "," + elev;
      } catch (e) {
        // console.log(e);
        this.$message.error('请输入正确的坐标');
      }
    },
  }
}
</script>

<style scoped>
.input {
  width: 200px;
}
</style>