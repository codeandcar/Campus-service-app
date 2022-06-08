<template>
  <div class="publish">
    <div v-show="isLogin">
      <van-notice-bar
        left-icon="volume-o"
        text="任务描述尽可能地详细有利于任务被接受,请勿发布违规内容"
      />
      <van-row type="flex" justify="center">
        <h2>任务发布</h2>
      </van-row>
      <!-- 任务表单 -->
      <van-row>
        <!-- 输入任意文本 -->
        <van-form @submit="onSubmit">
          <van-field
            v-model="title"
            name="任务标题"
            label="任务标题"
            placeholder="任务标题"
            :rules="[{ required: true, message: '请输入任务标题' }]"
          />
          <!-- 输入手机号，调起手机号键盘 -->
          <van-field
            v-model="tel"
            type="tel"
            name="联系方式"
            label="联系方式"
            placeholder="联系方式"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />
          <van-field name="radio" label="任务类型">
            <template #input>
              <van-radio-group v-model="type" direction="horizontal">
                <van-radio name="二手交易">二手交易</van-radio>
                <van-radio name="快递代拿">快递代拿</van-radio>
                <van-radio name="寻人启事">寻人启事</van-radio>
                <van-radio name="寻物启事">寻物启事</van-radio>
                <van-radio name="其他">其他</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-model="money"
            type="money"
            name="任务金额"
            label="任务金额"
            placeholder="任务金额"
            :rules="[{ required: true, message: '请输入任务金额' }]"
          />
          <van-field name="radio" label="交易方式">
            <template #input>
              <van-radio-group v-model="pay" direction="horizontal" >
                <van-radio name="闲鱼">闲鱼</van-radio>
                <van-radio name="微信">微信</van-radio></van-radio>
                <van-radio name="支付宝">支付宝</van-radio></van-radio>
                <van-radio name="面交">面交</van-radio>
                <van-radio name="其他">其他</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-model="message"
            rows="2"
            autosize
            name="任务描述"
            label="任务描述"
            type="textarea"
            maxlength="200"
            placeholder="任务描述"
            show-word-limit
            :rules="[{ required: true, message: '请输入任务描述' }]"
          />
          <van-field name="uploader" label="图片描述">
            <template #input>
              <van-uploader v-model="uploader" />
            </template>
          </van-field>
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >发布</van-button
            >
          </div>
        </van-form>
      </van-row>
    </div>
    <div v-show="!isLogin">
      <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
        您尚未登录，界面将在登录后显示
      </van-notice-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "",//表单中对应的各种信息
      tel: "",
      type: "",
      money: "",
      pay: "",
      message: "",
      uploader: [],
    };
  },
  computed: {
    ...mapState("orderAbout", ["orderlist"]),
    ...mapState("personAbout", ["isLogin", "nowPerson"]),
  },
  methods: {
    onSubmit() {//提交任务
      /* console.log(this.title,this.tel,this.message);
      console.log(values); */
      const orderObj = {
        title: this.title,
        tel: this.tel,
        type: this.type,
        money: this.money,
        pay: this.pay,
        message: this.message,
        uploader: this.uploader,
        owner: this.nowPerson.username,
        taker: "",
        state: "0",
      };
      this.$store.commit("orderAbout/ADD_ORDER", orderObj);
      this.$toast.success("发布成功");
    },
  },
};
</script>

<style scoped>
.publish {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>