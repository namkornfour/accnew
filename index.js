var path = require('path');
var ncp = require('ncp').ncp;

var src = './web-backend';
var des = './published';
var message = "Good Life";

ncp(src, des, (err) => {
    if(err) return console.log(err);
    console.log("Completed");
})