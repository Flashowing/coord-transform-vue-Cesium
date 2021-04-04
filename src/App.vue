<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :md="12" :offset="6">
        <Header />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col class="hidden-xs-only" :md="12" :offset="6">
            <div class="map">
              <CesiumViewer></CesiumViewer>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="12" :offset="6">
        <DegreesToCartesian></DegreesToCartesian>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import Header from "@/components/Header";
import DegreesToCartesian from "@/components/DegreesToCartesian";
import CesiumViewer from "@/components/CesiumViewer";
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'App',
  components: {
    DegreesToCartesian,
    CesiumViewer,
    Header,
  },
  data:function (){
    return {
      msg: 'Hello'
    }
}
}
</script>

<style>
.map{
  /*width: 100%;*/
  /*height: 100%;*/
}
html {
  overflow-y: scroll;
  overflow-x:hidden;
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
