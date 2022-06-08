<template>
  <div class="my">
    <!-- 登录注册界面 -->
    <div class="login" v-show="!isLogin">
      <div style="height: 5rem"></div>
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
            <van-button round block type="info" @click="login()"
              >登录</van-button
            >
          </div>
          <div style="margin: 16px">
            <van-button round block type="default" @click="register()"
              >注册</van-button
            >
          </div>
        </van-form>
      </van-row>
    </div>
    <!-- 我的界面 -->
    <div class="mytask" v-show="isLogin">
      <!-- 头像和用户名 -->
      <van-row type="flex" align="center">
        <van-col offset="2" span="8">
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
        <van-col offset="2" span="8"> 你好，{{ nowPerson.username }} </van-col>
      </van-row>
      <!-- 各种任务数量统计 -->
      <van-row>
        <van-grid column-num="3">
          <van-grid-item type="flex" justify="center">
            <div>发布任务数</div>
            <div>-</div>
            <div>{{ pubCount }}</div>
          </van-grid-item>
          <van-grid-item type="flex" justify="center">
            <div>接受任务数</div>
            <div>-</div>
            <div>{{ accCount }}</div>
          </van-grid-item>
          <van-grid-item type="flex" justify="center">
            <div>完成任务数</div>
            <div>-</div>
            <div>{{ finCount }}</div>
          </van-grid-item>
        </van-grid>
      </van-row>
      <!-- 任务详情 -->
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="我的发布" name="1">
          <van-collapse v-model="activeNames2" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              v-show="order.owner == nowPerson.username"
              :title="order.title"
              :name="index"
              :key="index"
            >
              <div>
                <div>
                  任务发布者：{{ order.owner }}<br />
                  联系方式：{{ order.tel }}<br />
                  任务金额：{{ order.money }}<br />
                  交易方式：{{ order.pay }}<br />
                  任务描述：{{ order.message }}<br />
                  图片描述：
                </div>
                <div class="imageflex">
                  <van-image
                    width="100"
                    height="100"
                    v-for="(pict, index) in order.uploader"
                    :key="index"
                    :src="pict.content"
                  />
                </div>
              </div>
              <div style="margin: 16px" v-show="order.state == 0">
                <van-button round block type="info" @click="cancel(index)"
                  >取消</van-button
                >
              </div>
              <div style="margin: 16px" v-show="order.state == 1">
                <van-button round block type="info" disabled>进行中</van-button>
              </div>
              <div style="margin: 16px" v-show="order.state == 2">
                <van-button round block type="info" disabled>已完成</van-button>
              </div>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
        <van-collapse-item title="我的任务" name="2">
          <van-collapse v-model="activeNames3" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              v-show="order.taker == nowPerson.username"
              :title="order.title"
              :name="index"
              :key="index"
            >
              <div>
                <div>
                  任务发布者：{{ order.owner }}<br />
                  联系方式：{{ order.tel }}<br />
                  任务金额：{{ order.money }}<br />
                  交易方式：{{ order.pay }}<br />
                  任务描述：{{ order.message }}<br />
                  图片描述：
                </div>
                <div class="imageflex">
                  <van-image
                    width="100"
                    height="100"
                    v-for="(pict, index) in order.uploader"
                    :key="index"
                    :src="pict.content"
                  />
                </div>
              </div>
              <div style="margin: 16px" v-show="order.state == 1">
                <van-button round block type="info" @click="finish(index)"
                  >完成</van-button
                ><br />
                <van-button round block type="danger" @click="giveup(index)"
                  >放弃</van-button
                >
              </div>
              <div style="margin: 16px" v-show="order.state == 2">
                <van-button round block type="info" disabled>已完成</van-button>
              </div>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
      </van-collapse>
      <div style="margin: 16px">
        <van-button round block type="default" @click="logout"
          >注销登录</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      //各种任务数统计
      pubCount: 0,
      accCount: 0,
      finCount: 0,
      //不指定展开项
      activeNames: "",
      activeNames2: "",
      activeNames3: "",
    };
  },
  computed: {
    ...mapState("orderAbout", ["orderlist"]),
    ...mapState("personAbout", ["isLogin", "nowPerson"]),
  },
  mounted() {
    this.ordercount();
    // console.log(this.pubCount,this.accCount,this.finCount);
  },
  methods: {
    login() {//登录
      const personObj = { username: this.username, password: this.password };
      // console.log(personObj)
      this.$store.dispatch("personAbout/login",personObj); 
      this.ordercount();
      // console.log(this.pubCount,this.accCount,this.finCount);
    },
      
    register() {//注册
      const personObj = { username: this.username, password: this.password };
      // console.log(personObj)
      if (this.password != "" && this.username != "") {
        this.$store.commit("personAbout/REGISTER", personObj);
        this.$toast.success("注册成功");
      }
    },
    logout() {//注销
      this.$store.commit("personAbout/LOGOUT");
    },
    onSubmit(values) {
      //van-form配套需要，其实没用
      //console.log('submit', values);
    },
    cancel(index) {//取消任务
      //console.log(index)
      this.$store.commit("orderAbout/CONCEL_ORDER", index);
      this.ordercount();
      this.$toast.success("取消成功");
    },
    finish(index) {//完成任务
      //console.log(index)
      this.$store.commit("orderAbout/FINISH_ORDER", index);
      this.ordercount();
      this.$toast.success("任务完成");
    },
    /*onSubmit(values) {
      console.log("submit", values);
    }, */
    giveup(index) {//放弃任务
      this.$store.commit("orderAbout/GIVEUP_ORDER", index);
      this.ordercount();
      this.$toast.success("放弃成功");
    },
    ordercount() {//统计任务数
      const orders = this.orderlist;
      this.pubCount = 0;
      this.accCount = 0;
      this.finCount = 0;
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].owner == this.nowPerson.username) {
          this.pubCount++;
        }
        if (orders[i].taker == this.nowPerson.username) {
          this.accCount++;
        }
        if (
          orders[i].state == 2 &&
          orders[i].taker == this.nowPerson.username
        ) {
          this.finCount++;
        }
      }
    }, //end of the count
  },
};
</script>

<style scoped>
.my.mytask {
  height: 100%;
  width: 100%;
}
.login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: bottom;
}
</style>
