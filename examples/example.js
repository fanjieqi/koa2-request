var koa = require('koa');
var request = require('../index'); //koa2-request
 
var app = koa();

app.use(async(ctx, next) => {
	// request选项
	var res = await request(opts);
});



app.listen(process.env.PORT || 8080);