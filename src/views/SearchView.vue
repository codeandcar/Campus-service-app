<template>
  <div class="home">
    <van-row type="flex" justify="center">
      <h1>任务中心</h1>
    </van-row>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item  v-for="(order,index) in orderlist" v-show="order.state==0" :title="order.title" :name="index">
        <van-form @submit="onSubmit(index)">
        {{order.message}}
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">接受</van-button
          >
        </div>
      </van-form>

      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      title:"",
      index:"",
      activeName: "",
    };
  },
    computed:{
    ...mapState('orderAbout',['orderlist']),
    ...mapState('personAbout',['nowPerson'])
  },
  methods:{
    onSubmit(index){
      // console.log("recepit success")
      this.index=index;
      //console.log(this.index);
      
    }
  }
};
</script>

