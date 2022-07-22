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
    <div class="section">
      <div
        class="tab-content"
        v-for="(item, index) in data.slice(0, msgLength)"
        :key="index"
      >
        <p class="tab-title" @click="viewText(item)">
          <span :class="item.topAble ? 'top-able' : ''">{{
            item.topAble ? "置顶" : ""
          }}</span
          >{{ item.title }}
        </p>
        <div class="tab-infor">
          <div class="tab-source">来源：{{ item.source }}</div>
          <div class="tab-eyes">
            <span></span>{{ item.visitCount ? item.visitCount : "0" }}次
          </div>
          <div class="tab-time">{{ item.publishDate | splitTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
    name: 'NtInfoTab',
  props: {
    api: {
      type: String,
      default: '',
    },
    grids: {
      type: String,
      default: 'true',
    },
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
    // 勾选栏目
    // catalogName: {
    //   type: Array,
    //   default: () => [],
    // },
    showCatalog: {
      type: String,
      default: 'info',
    },
  },
  filters: {
    splitTime(val) {
      if (val) {
        return val.split(' ')[0];
      }
      return '';
    },
  },
  data() {
    return {
      catalogId: '',
      // data:[
      //     {title:'好的',publishDate:'2021-08-20',topAble:true},
      //     {title:'好的',publishDate:'2021-08-20'},
      //     {title:'好的',publishDate:'2021-08-20'}
      // ]
    };
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


