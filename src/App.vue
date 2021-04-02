<template>
  <div id="app">
    <el-container>
      <el-main>
        <DegreesToCartesian></DegreesToCartesian>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import DegreesToCartesian from "@/components/DegreesToCartesian";
export default {
  name: 'App',
  components: {
    DegreesToCartesian
  },
  data:function (){
    return {
      msg: 'Hello'
    }
}
}
</script>

<style>

</style>
