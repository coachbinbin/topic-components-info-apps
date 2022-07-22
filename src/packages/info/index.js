import Info from './src/index.vue';

Info.install = function(Vue) {
  Vue.component(Info.name, Info);
};

export default Info;
