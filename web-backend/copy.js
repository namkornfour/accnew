var path = require('path');
var ncp = require('ncp').ncp;

var src = '../web-accounting/build';
var des = '../published/build';

ncp(src, des, (err) => {
    if(err)
    {
        return console.error(err);
    }
    console.log("Copy file complete.");
})