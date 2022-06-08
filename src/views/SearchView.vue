<template>
  <div class="home">
    <div v-show="isLogin">
      <van-notice-bar
        left-icon="volume-o"
        text="本平台仅用于信息交流，交易请走正规渠道，谨防不法分子诈骗，如有损失概不负责。"
      />
      <van-row type="flex" justify="center">
        <h2>任务中心</h2>
      </van-row>

      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img v-lazy="item" height="200px" width="100%"/>
        </van-swipe-item>
      </van-swipe>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item v-model="activeNames1" title="二手交易" name="1">
          <van-collapse v-model="activeName1" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              :key="index"
              v-show="order.state == 0 && order.type == '二手交易'"
              :title="order.title"
              :name="index"
            >
              <van-form @submit="onSubmit(index)">
                <div>
                  <div>
                    任务发布者：{{ order.owner }}<br />
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
                <div style="margin: 16px">
                  <van-button round block type="info" native-type="submit"
                    >接受</van-button
                  >
                </div>
              </van-form>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
        <van-collapse-item v-model="activeNames2" title="快递代拿" name="2">
          <van-collapse v-model="activeName2" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              :key="index"
              v-show="order.state == 0 && order.type == '快递代拿'"
              :title="order.title"
              :name="index"
            >
              <van-form @submit="onSubmit(index)">
                <div>
                  <div>
                    任务发布者：{{ order.owner }}<br />
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
                <div style="margin: 16px">
                  <van-button round block type="info" native-type="submit"
                    >接受</van-button
                  >
                </div>
              </van-form>
              </van-form>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
        <van-collapse-item v-model="activeNames3" title="寻人启事" name="3">
          <van-collapse v-model="activeName3" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              :key="index"
              v-show="order.state == 0 && order.type == '寻人启事'"
              :title="order.title"
              :name="index"
            >
              <van-form @submit="onSubmit(index)">
                <div>
                  <div>
                    任务发布者：{{ order.owner }}<br />
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
                <div style="margin: 16px">
                  <van-button round block type="info" native-type="submit"
                    >接受</van-button
                  >
                </div>
              </van-form>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
        <van-collapse-item v-model="activeNames4" title="寻物启事" name="4">
          <van-collapse v-model="activeName4" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              :key="index"
              v-show="order.state == 0 && order.type == '寻物启事'"
              :title="order.title"
              :name="index"
            >
              <van-form @submit="onSubmit(index)">
                <div>
                  <div>
                    任务发布者：{{ order.owner }}<br />
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
                <div style="margin: 16px">
                  <van-button round block type="info" native-type="submit"
                    >接受</van-button
                  >
                </div>
              </van-form>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
        <van-collapse-item v-model="activeNames5" title="其他" name="5">
          <van-collapse v-model="activeName5" accordion>
            <van-collapse-item
              v-for="(order, index) in orderlist"
              :key="index"
              v-show="order.state == 0 && order.type == '其他'"
              :title="order.title"
              :name="index"
            >
              <van-form @submit="onSubmit(index)">
                <div>
                  <div>
                    任务发布者：{{ order.owner }}<br />
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
                <div style="margin: 16px">
                  <van-button round block type="info" native-type="submit"
                    >接受</van-button
                  >
                </div>
              </van-form>
            </van-collapse-item>
          </van-collapse>
        </van-collapse-item>
      </van-collapse>
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
      index: "",
      images: [
        require("../assets/二手交易.jpg"),
        require("../assets/快递代拿.jpg"),
        require("../assets/寻人启事.jpg"),
        require("../assets/寻物启事.jpg"),
        require("../assets/其他.jpg"),
      ],
      //不同层级van-collapse的v-model,全都默认不选中
      activeName1: "",
      activeName2: "",
      activeName3: "",
      activeName4: "",
      activeName5: "",
      activeNames: "",
      activeNames1: "",
      activeNames2: "",
      activeNames3: "",
      activeNames4: "",
      activeNames5: "",
    };
  },
  computed: {
    ...mapState("orderAbout", ["orderlist"]),
    ...mapState("personAbout", ["isLogin", "nowPerson"]),
  },
  methods: {
    onSubmit(index) {
      // console.log("recepit success")
      //console.log(this.index);
      const acceptObj = { index: index, taker: this.nowPerson.username };
      this.$store.commit("orderAbout/ACCEPT_ORDER", acceptObj);
      this.$toast.success("接受成功");
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 80px;
    text-align: center;
    background-color: #fff;
}
.imageflex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home {
  height: 100%;
  width:100%;  
}
</style>

