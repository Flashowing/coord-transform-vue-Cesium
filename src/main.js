import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import 'cesium/Widgets/widgets.css'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});