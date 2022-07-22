<template>
  <div class="widget-wrapper border1">
    <div class="widget-header-wrapper">
      <h2 class="header-text">{{ static_caption }}</h2>
      <slot name="header">
        <div class="readmore" @click="jumpMore()">
          更多<span class="more">>></span>
        </div>
      </slot>
    </div>
    <div class="section">
      <div
        class="menu-list"
        v-for="(item, index) in data.slice(0, msgLength)"
        :key="index"
      >
        <div class="menu-title" @click="viewText(item)" :title="item.title">
          <span :class="item.topAble ? 'top-able' : ''">{{
            item.topAble ? "置顶" : ""
          }}</span>
          <div class="title-mains">{{ item.title }}</div>
        </div>
        <div class="menu-time">{{ item.publishDate | splitTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NtInfo',
  props: {
    api: {
      type: String,
      default: '',
    },
    grids: {
      type: String,
      default: 'true',
    },
    // 勾选栏目
    // catalogName: {
    //   type: Array,
    //   default: () => [],
    // },
    caption: {
      type: String,
      custom: {
        name: '标题',
        type: 'INPUT',
      },
    },
    data: {
      type: Array,
      default: () => [],
    },
    msgLength: {
      type: String,
      default: '60',
    },
    showCatalog: {
      type: String,
      default: 'info',
    },
  },
  computed: {
    static_caption() {
      return this.caption;
    },
  },
  data() {
    return {
      // data:[
      //     {title:'好的',publishDate:'2021-08-20',topAble:true},
      //     {title:'好的',publishDate:'2021-08-20'},
      //     {title:'好的',publishDate:'2021-08-20'}
      // ]
    };
  },
  filters: {
    splitTime(val) {
      if (val) {
        return val.split(' ')[0];
      }
      return '';
    },
  },

  mounted() {},
  methods: {
    viewText(row) {
      window.open(row.viewUrl, '_blank');
    },
    jumpMore() {
    },
    init() {},
  },
};
</script>

