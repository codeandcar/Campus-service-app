//订单管理相关的配置
export default {
	namespaced:true,
	actions:{

	},
	mutations:{
        ADD_ORDER(state,value){
            state.orderlist.unshift(value);
            console.log(state.orderlist);
        }
	},
	state:{
        orderlist:[
            {title:'拿快递',
            tel:'1234567890',
            message:'帮忙从XXXX取快递到XXXX',
            taskOwner:'apple',
            taskTaker:'',
            state:0},//0:已发布未接受，1:任务进行中，2：任务已完成
            {title:'二手教材出售',
            tel:'1234567809',
            message:'XXXXX出售XXX元一本',
            taskOwner:'apple',
            taskTaker:'',
            state:1},
            {title:'四六级包过',
            tel:'1234567809',
            message:'XXX元一人一次',
            taskOwner:'apple',
            taskTaker:'',
            state:0},
        ]

	},
	getters:{

	},
}