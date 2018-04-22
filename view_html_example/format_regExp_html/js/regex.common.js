/**
 * regex 公共JS
 * @maxiaoqu 2016-06-29 13:25:30
 * @description 引入前一定要先引jQuery
 */

Function.prototype.addREGEX = function(name,fn){
	this[name] = fn;
	return this;
}

var regexs = function(){};

regexs.addREGEX('phoneNum',function(reg){
	var str = reg.value;
	// 固定电话正则表达式
	var regex1 = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
	// 手提电话正则表达式
	var regex2 = /^(((13|14|15|18|17)\d{9}))$/;
	console.log(str);
	if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex1) == null || str.match(regex2) == null) {
    	mui.alert('您输入的电话号码有误，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('idCard',function(reg){
	var str = reg.value;
	// 15位数身份证正则表达式
    var regex1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    // 18位数身份证正则表达式
    var regex2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex1) == null && str.match(regex2) == null) {
    	mui.alert('您输入的身份证号码有误，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('chinese',function(reg){
	var str = reg.value;
	// 中文正则表达式
    var regex = /^[\u4e00-\u9fa5]{0,}$/;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (!regex.exec(str)) {
    	mui.alert('此处只能输入中文，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('nullSt',function(reg){
	var str = reg.value;
    // 空格正则表达式
    var regex = /\s/g;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex) != null) {
    	mui.alert('您输入不能带有空格，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('emailAddress',function(reg){
	var str = reg.value;
    // 邮箱正则表达式
    var regex = /^[-_A-Za-z0-9+.]+@([_A-Za-z0-9]+.)+[A-Za-z0-9]{2,3}$/;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex) == null) {
    	mui.alert('您输入的邮箱地址有误，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('alphaNum',function(reg){
	var str = reg.value;
    // 字母+数字（非全数字）正则表达式
    var regex = /^(?!\d+$)[\da-zA-Z]*$/;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex) == null) {
    	mui.alert('字母+数字，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('urlAddress',function(reg){
	var str = reg.value;
    // 正则表达式
    var regex = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex) == null) {
    	mui.alert('您输入的身份证号码有误，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('urlAddress',function(reg){
	var str = reg.value;
    // 正则表达式
    var regex = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
    if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex) == null) {
    	mui.alert('您输入的身份证号码有误，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
}).addREGEX('urlAddress',function(reg){
	var str = reg.value;
    // 正则表达式
    var regex = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
   if(!str){
    	mui.alert('该输入不能为空，请重新输入！')
        return false;
    }else if (str.match(regex) == null) {
    	mui.alert('您输入的身份证号码有误，请重新输入！')
        return false;
    }else {
    	//return this;
        return true;
    }
})