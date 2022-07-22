<template>
  <div class="widget-wrapper border1">
    <div class="widget-header-wrapper">
      <h2 class="header-text">{{ caption }}</h2>
      <slot name="header">
        <div class="readmore" @click="jumpMore()">
          更多<span class="more">>></span>
        </div>
      </slot>
    </div>
    <div class="section imgtype">
      <div
        class="swiper-list"
        @click="viewText(item)"
        v-for="(item, index) in data.slice(0, msgLength)"
        :key="index"
      >
        <img
        :src="src"
          alt="infor img"
        />
        <div class="swiper-content">
          <p class="swiper-caption">
            <span :class="item.topAble ? 'top-able' : ''">{{
              item.topAble ? "置顶" : ""
            }}</span
            >{{ item.title }}
          </p>
          <div class="swiper-infor">
            <span>来源:【{{ item.source }}】</span>
            <span>{{ item.publishDate | splitTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NtInfoSwiper',
  props: {
    api: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
    },
    grids: {
      type: String,
      default: 'true',
    },
    caption: {
      type: String,
      default: '',
    },
    msgLength: {
      type: Number,
      default: 60,
    },
    showCatalog: {
      type: String,
      default: 'info',
    },
    src: {
        type: String,
        default: ''
    },
  },
  data() {
    return {
      catalogId: '',
      baseHttp: '',
      // data:[
      //     {title:'图文组件列表',visitCount:'2',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1",topAble:true},
      //     {title:'图文组件列表',visitCount:'2',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1",topAble:true},
      //     {title:'图文组件列表',visitCount:'24',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1",topAble:true},
      //     {title:'图文组件列表',visitCount:'35',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1"},
      //     {title:'图文组件列表',visitCount:'64',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1"},
      //     {title:'图文组件列表',visitCount:'57',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1"},
      //     {title:'图文组件列表',visitCount:'34',source:'数据组',createdTime:'2020-10-18 1',imageResource:"/1"},
      // ]
    };
  },
  filters: {
    splitTime(val) {
      if (val) {
        return val.split(' ')[0];
      } else {
        return '';
      }
    },
  },
  created() {
  },
  mounted() {},
  methods: {
    viewText(row) {
      window.open(row.viewUrl, '_blank');
    },
    jumpMore() {
    },
    init(id) {},
  },
};
</script>

