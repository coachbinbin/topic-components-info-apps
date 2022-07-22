import InfoSource from './src/index.vue';

InfoSource.install = function(Vue) {
  Vue.component(InfoSource.name, InfoSource);
};

export default InfoSource;
