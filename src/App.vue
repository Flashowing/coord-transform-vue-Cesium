<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :md="6" class="hidden-xs-only">
            <div style="color: white">placeholder</div>
          </el-col>
          <el-col :md="12" :xs="24">
            <Header/>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :md="6">
            <div style="color: white">placeholder</div>
          </el-col>
          <el-col class="hidden-xs-only" :md="12">
            <div class="map">
              <CesiumViewer></CesiumViewer>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="6" class="hidden-xs-only">
            <div style="color: white">placeholder</div>
          </el-col>
          <el-col :md="12" :xs="24">
            <TransformTable></TransformTable>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import Header from "@/components/Header";
import CesiumViewer from "@/components/CesiumViewer";
import TransformTable from "@/components/transform/TransformTable";
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'App',
  components: {
    TransformTable,
    CesiumViewer,
    Header,
  },
  data: function () {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<style>
.map {
  /*width: 100%;*/
  /*height: 100%;*/
}

html {
  overflow-y: scroll;
  overflow-x: hidden;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}

</style>
