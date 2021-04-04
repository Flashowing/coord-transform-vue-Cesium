import $ from 'jquery'
import {Popup} from "./popup";
function pickPositions() {

    var handler = new Cesium.ScreenSpaceEventHandler(window._viewer.scene.canvas);
    handler.setInputAction(function (event) {
        var wp = event.position;
        if (!Cesium.defined(wp)) {
            return
        }
        var ray = window._viewer.scene.camera.getPickRay(wp);
        if (!Cesium.defined(ray)) {
            return
        }
        var cartesian = window._viewer.scene.globe.pick(ray, window._viewer.scene);
        if (!Cesium.defined(cartesian)) {
            return
        }
        if (cartesian) {
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            var lon = Cesium.Math.toDegrees(cartographic.longitude);
            var lat = Cesium.Math.toDegrees(cartographic.latitude);
            var elev = window._viewer.scene.globe.getHeight(cartographic);
            console.log(lon + ',' + lat)
            console.log(elev)
            var carto = new Cesium.Cartographic.fromDegrees(lon, lat);  //输入经纬度
            var h1 = window._viewer.scene.globe.getHeight(carto);
            console.log(h1)
            // 获取点击位置坐标
            let cart = window._viewer.scene.globe.pick(window._viewer.camera.getPickRay(wp), window._viewer.scene);
            if (cart) {
                // 调用弹窗方法
                // eslint-disable-next-line no-unused-vars
                var popup = new Popup({
                    viewer: window._viewer,
                    geometry: cartesian,
                    lon: lon,
                    lat: lat,
                })
            }
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    // document.getElementById('autoCopy').addEventListener('click',function (){
    //
    // })
    $("#autoCopy").click(function (){
        Popup.prototype.isAutoCopy = false;
        $('input[name="autoCopy"]:checked').each(function () {
            Popup.prototype.isAutoCopy = true;
        })
    })
}
export {
    pickPositions
}