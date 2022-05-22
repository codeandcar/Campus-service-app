<template>
  <div class="my">
    <van-row type="flex" justify="center" align="center">
      <van-col>
        <van-image
          type="flex"
          justify="center"
          round
          fit="contain"
          width="7rem"
          height="7rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col>
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
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
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
