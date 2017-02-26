import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state={
    newbi:"1",
    serverIp:'0',
    leftMenuShow:false,
    openid:'o4grovzHZWIjvksBAVMou_tstwdQ',
    headerImgurl:'http://img2.touxiang.cn/file/20160818/e00b7736242916dad6d25d3a0f99ecc6.jpg',
    name:'well',
    nickname:'well-liu',
    sex:'1',
    examTime:'2016-06-17',
    oneday:'20',
    provice:'吉林',
    city:'长春',
    country:'中国',
    regdete:'2017-01-25 20:48:00',
    xp:'27',
    memory:'43',
    notice:'18'

}

var mutations = {
    go(id,s){
        console.log(s[1])
        s[0].push({path:'/'+s[1]})
    }
}

// var state,xmlhttp
// xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function(){
// 	if(xmlhttp.readystate ==4&&xmlhttp.status==200){
// 		state = eval('('+xmlhttp.responseText+')')
// 	}else{
// 		state= {serverIp:0}
// 	}
// }
// xmlhttp.open("GET","http://192.168.0.108:8088/test/users.php",false)
// xmlhttp.send();
export default new Vuex.Store({
	state,
    mutations
})