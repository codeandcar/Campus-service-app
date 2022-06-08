<template>
  <div id="app">
    <div class="bar"></div>
    <router-view/>
    <van-tabbar v-model="active" routo z-index="0">
      <van-tabbar-item replace to="/publish" icon="records">发布</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">搜寻</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <div style="height:5rem;"></div>
  </div>
</template>

<style lang="less">
.app{
  width: 100%;
  height: 100%;
}
</style>

<script>

export default {
  data() {
    return {
      active: 2,
    };
  },
};
</script>
