<template>
  <div class="publish">
    <!-- 输入任意文本 -->
    <van-field v-model="title" label="任务类型" placeholder="请输入任务类型"/>
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="tel" type="tel" label="联系方式" placeholder="请输入手机号" />
    <van-field
  v-model="message"
  rows="2"
  autosize
  label="任务描述"
  type="textarea"
  maxlength="200"
  placeholder="请输入任务描述"
  show-word-limit
/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: '',
  components: {
  },
  data() {
    return {
      title:"",
      tel:"",
      message:"",
    };
  },
}
</script>
