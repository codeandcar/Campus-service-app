<template>
  <div class="my">
    <div class="login" v-show="false">
      <van-row type="flex" justify="center" align="center">
        <van-image
          type="flex"
          justify="center"
          round
          fit="contain"
          width="7rem"
          height="7rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-row>
      <van-row>
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >登录</van-button
            >
          </div>
        </van-form>
      </van-row>
    </div>
    <div class="mytask">
      <van-row type="flex" justify="center">
      <h1>我的任务</h1>
    </van-row>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="我的发布" name="1">
          <van-collapse v-model="activeNames2" accordion>
            <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
          </van-collapse>
        </van-collapse-item>
        <van-collapse-item title="我的任务" name="2">
          <van-collapse v-model="activeNames3" accordion>
            <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
          </van-collapse>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      activeNames: "",
      activeNames2: "",
      activeNames3:""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style scoped>
</style>
