<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>
<script src="js/popup.js"></script>
<script src="js/pickPositionOnMap.js"></script>
<script>
import $ from 'jquery'
import {pickPositions} from "../../public/js/pickPositionOnMap";

export default {
  name: "CesiumViewer",
  mounted(){
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZmJmNzcyYy0zZGU0LTQwNTktYTI4OS1iNGJkZGQzYjY3ODQiLCJpZCI6MzU1NTEsImlhdCI6MTYxMzI0MzQzN30.a8eqFFgsXzfi1eLyG4_ETXq6y7ZDn_Z2EASqsJWiEfs';
    var viewer = new Cesium.Viewer("cesiumContainer", {
      homeButton: true, //主页按钮
      baseLayerPicker: false, //是否显示图层选择控件
      navigationHelpButton: false, //帮助信息按钮
      geocoder: true, //是否显示地名查找控件
      infoBox: true, //是否显示点击要素之后显示的信息
      fullscreenButton: false, //是否显示全屏按钮
      timeline: false, //是否显示时间线控件
      animation: false, //是否显示动画控件
      selectionIndicator: true, // 取消点击有绿框
      shouldAnimate: true, //允许动画
      sceneModePicker: false, //是否显示3D/2D选择器
      navigationInstructionsInitiallyVisible: false,
      // navigation: false,
      scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
      terrainProvider: Cesium.createWorldTerrain(),
    });
    window._viewer =viewer;
    //去除版权信息
    viewer._cesiumWidget._creditContainer.style.display = "none";
    viewer.camera.flyTo({
      destination :Cesium.Cartesian3.fromDegrees(106.57235543868288,29.560696474923013, 10000), // 设置位置
      orientation: {
        heading :Cesium.Math.toRadians(0.0), // 方向
        pitch :Cesium.Math.toRadians(-90.0),// 倾斜角度
        roll :Cesium.Math.toRadians(0)
      },
      duration:5, // 设置飞行持续时间，默认会根据距离来计算
      complete:function () {
        // 到达位置后执行的回调函数
      },
      cancle:function () {
        // 如果取消飞行则会调用此函数
      },
      pitchAdjustHeight:-90, // 如果摄像机飞越高于该值，则调整俯仰俯仰的俯仰角度，并将地球保持在视口中。
      maximumHeight:5000, // 相机最大飞行高度
      flyOverLongitude:100, // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度(这个，很好用)
    });

    let imageryProvider = new Cesium.UrlTemplateImageryProvider({
      url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      layer: "tdtVecBasicLayer",
      style: "default",
      format: "image/png",
      tileMatrixSetID: "GoogleMapsCompatible",
    })
    // eslint-disable-next-line no-unused-vars
    var _imageryProvider = viewer.imageryLayers.addImageryProvider(imageryProvider);
    // 如果需要叠加高德/百度注记地图则添加以下代码
    viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      layer: "tdtAnnoLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible"
    }));
    pickPositions()
  },
}
</script>

<!--<script src="js/plug-in/showLonLatHeight.js"></script>-->
<link href="css/popup.css">
<link href="css/pickPositionOnMap.css">
<style scoped>
/*@import "~@/css/popup.css";*/
.map-box {
  /*width: 100%;*/
  /*height: 100%;*/
}

.map-box > div {
  /*width: 100%;*/
  /*height: 100%;*/
}
</style>