<template>
  <div class="publish">
    <van-row type="flex" justify="center">
      <h1>任务发布</h1>
    </van-row>
    <van-row>
      <!-- 输入任意文本 -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="title"
          name="任务类型"
          label="任务类型"
          placeholder="任务类型"
          :rules="[{ required: true, message: '请输入任务类型' }]"
        />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field
          v-model="tel"
          type="tel"
          name="联系方式"
          label="联系方式"
          placeholder="手机号"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
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
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >发布</van-button
          >
        </div>
      </van-form>
    </van-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      title: "",
      tel: "",
      message: "",
    };
  },
  computed:{
    ...mapState('orderAbout',['orderlist']),
    ...mapState('personAbout',['nowPerson'])
  },
  methods: {
    onSubmit(values) {
      /* console.log(this.title,this.tel,this.message);
      console.log(values); */
      const orderObj={title:this.title,tel:this.tel,message:this.message,taskOwner:this.nowPerson.username,taskTaker:'',state:'0'}
      this.$store.commit('orderAbout/ADD_ORDER',orderObj)
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