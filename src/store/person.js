//账号管理相关的配置
export default {
	namespaced:true,
	actions:{
		login(context,person){//登录
			// console.log(person)
			let flag=false;
			const people=context.state.personList;
			for(let i=0;i<people.length;i++){
				// console.log(people[i].username,people[i].password,person.username,person.password)
				if(people[i].username==person.username&&people[i].password==person.password)
					flag=true;
			}	
			 if(flag){
				context.commit('LOGIN',person) ;
			 }
		}
	},
    mutations:{
		LOGIN(state,person){//登录
			state.nowPerson=person;
			state.isLogin=true;
		},
		LOGOUT(state){//登出
			state.nowPerson="";
			state.isLogin=false;
		},
		REGISTER(state,person){//注册
			state.personList.unshift(person);
			// console.log(state.personList);
		}
	},
	state:{
		personList:[//用户列表
			{username:'apple',password:'1234'}
		],
        nowPerson:"",//当前用户
		isLogin:false,//登录状态，用来判断页面是否显示
	},
	getters:{

	},
}