<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" routo>
    <van-tabbar-item replace to="/publish" icon="records">发布</van-tabbar-item>
    <van-tabbar-item replace to="/" icon="search">搜寻</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<style lang="less">

</style>

<script>

export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
