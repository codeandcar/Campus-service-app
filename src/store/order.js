//订单管理相关的配置
export default {
	namespaced:true,
	actions:{

	},
	mutations:{
        //添加订单到订单数组中
        ADD_ORDER(state,value){
            state.orderlist.unshift(value);
            // console.log(state.orderlist);
        },
        //将订单状态改为已接受
        ACCEPT_ORDER(state,acceptObj){
            console.log(acceptObj);
            state.orderlist[acceptObj.index].state=1;
            state.orderlist[acceptObj.index].taker=acceptObj.taker;
            
        },
        //将订单状态改为完成
        FINISH_ORDER(state,index){
            // console.log(state.orderlist[index]);
            state.orderlist[index].state=2;
        },
        //取消已发布未接受订单
        CONCEL_ORDER(state,index){
            // console.log(state.orderlist,index);
            state.orderlist.splice(index,1);
            // console.log(state.orderlist);
        },
        //取消已发布未接受订单
        GIVEUP_ORDER(state,index){
            // console.log(state.orderlist,index);
            state.orderlist[index].state=0;
            state.orderlist[index].taker="";
            // console.log(state.orderlist);
        },
	},
	state:{
        orderlist:[
            //我的发布中未接受、已接受和已完成三种状态
/*             {title:'拿快递',
            tel:'1234567890',
            type:'二手交易',
            money:'10元',
            pay:'面交',
            message:'帮忙从XXXX取快递到XXXX',
            uploader:[{content:"../assets/logo.png"}],
            owner:'apple',
            taker:'',
            state:0}, */

/*             {title:'二手教材出售',
            tel:'1234567809',
            message:'XXXXX出售XXX元一本',
            owner:'apple',
            taker:'banana',
            state:1},

            {title:'四六级包过',
            tel:'1234567809',
            message:'XXX元一人一次',
            owner:'apple',
            taker:'coconut',
            state:2},
            //我的任务中完成和进行中两种状态
            {title:'二手教材出售',
            tel:'1234567809',
            message:'XXXXX出售XXX元一本',
            owner:'banana',
            taker:'apple',
            state:1},

            {title:'四六级包过',
            tel:'1234567809',
            message:'XXX元一人一次',
            owner:'coconut',
            taker:'apple',
            state:2},*/
        ] 

	},
	getters:{

	},
}