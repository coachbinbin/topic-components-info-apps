import Apps from './src/index.vue';

Apps.install = function(Vue) {
  Vue.component(Apps.name, Apps);
};

export default Apps;
