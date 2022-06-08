//账号管理相关的配置
export default {
	namespaced:true,
	actions:{
		login(context,person){
			//console.log(person)
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
		LOGIN(state,person){
			state.nowPerson=person;
			state.isLogin=true;
		},
		LOGOUT(state){
			state.nowPerson="";
			state.isLogin=false;
		},
		REGISTER(state,person){
			state.personList.unshift(person);
			// console.log(state.personList);
		}
	},
	state:{
		personList:[
			{username:'apple',password:'1234'}
		],
        nowPerson:"",
		isLogin:false,
	},
	getters:{

	},
}