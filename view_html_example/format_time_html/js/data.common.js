/**
 * 离线缓存  公共JS（Web SQL）
 * @maxiaoqu 2017-08-21 13:25:30
 * @description 引入前一定要先引jQuery和mui.min.js
 */

var dataLocal = {},driverLocal;
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
if(window.indexedDB){
	// alert("您的浏览器支持IndexedDB数据库。");
	driverLocal = localforage.INDEXEDDB;
}else{
	// alert("您的浏览器不支持IndexedDB数据库!!!!!!");
	driverLocal = localforage.WEBSQL;
}

// 配置文件缓存
localforage.config({
    driver      : driverLocal, // Force WebSQL; same as using setDriver()
    name        : 'maxiaoqu',
    version     : 1.0,
    size        : 1001024, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'localData', // Should be alphanumeric, with underscores.
    description : 'this is a localData demo'
});

// 创建一个键，参数是键名、键值、回调函数，回调函数的参数是对应的键值。
dataLocal.setData = function(keys,para,href){
	localforage.setItem(keys,para).then(function(value) {
		console.log(value);
		if(href){
			location.href = href;
		}
	}).catch(function(err) {
	    console.log(err);
	});
}

/******************下面的方法还没写好，回调不出来****************************/
// 获取数据并使用回调函数
dataLocal.getData = function(keys){
	localforage.getItem(keys).then(function(value) {
	    console.log(value);
	}).catch(function(err) {
	    console.log(err);
	});
}

// 移除对应的键
dataLocal.removeData = function(keys){
	localforage.removeItem(keys).then(function() {
	    // Run this code once the key has been removed.
	    console.log('Key is cleared!');
	}).catch(function(err) {
	    // This code runs if there were any errors
	    console.log(err);
	});
}

// 清除所有键
dataLocal.clearData = function(){
	localforage.clear().then(function() {
	    // Run this code once the database has been entirely deleted.
	    console.log('Database is now empty.');
	}).catch(function(err) {
	    // This code runs if there were any errors
	    console.log(err);
	});
}

// 获得离线存储的总的键数。 
dataLocal.lengthData = function(){
	localforage.length().then(function(numberOfKeys) {
	    // Outputs the length of the database.
	    console.log(numberOfKeys);
	}).catch(function(err) {
	    // This code runs if there were any errors
	    console.log(err);
	});
}

// 根据键索引得到键值。
dataLocal.keyData = function(keys){
	localforage.key(keys).then(function() {
	    // Outputs the length of the database.
	    console.log(numberOfKeys);
	}).catch(function(err) {
	    // This code runs if there were any errors
	    console.log(err);
	});
}

// 得到所有的键索引。
dataLocal.keysData = function(){
	localforage.keys().then(function() {
	    // Outputs the length of the database.
	    console.log(numberOfKeys);
	}).catch(function(err) {
	    // This code runs if there were any errors
	    console.log(err);
	});
}

// 对数据库中的每一个键值对调用回调函数，回调函数的参数分别是键值、键索引、迭代次数（基于1）。
dataLocal.iterateData = function(){
	// The same code, but using ES6 Promises.
	localforage.iterate(function(value, key, iterationNumber) {
	    // Resulting key/value pair -- this callback
	    // will be executed for every item in the
	    // database.
	    console.log([key, value]);
	}).then(function() {
	    console.log('Iteration has completed');
	}).catch(function(err) {
	    // This code runs if there were any errors
	    console.log(err);
	});
}