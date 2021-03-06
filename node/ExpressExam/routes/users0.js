var express = require('express');
var router = express.Router();

/* GET users listing. */
var users = [];

router.get('/:id', function(req, res, next) {
	if(users.length > Number(req.params.id)){
		res.send(JSON.stringify(users[Number(req.params.id)]));
	}else{
		res.send(JSON.stringify({}));
	}
  // res.send('respond with a resource');
  	// res.send(JSON.stringify({method:'GET', url:'/users'}));
});

router.post('/', function(req, res, next){
	console.log(req.body.name);
	console.log(req.body.age);
	var user = {
		name : req.body.name, age:req.body.age
	};
	users.push(user);
	res.send(JSON.stringify(user));
  	// res.send(JSON.stringify({method:'POST', url:'/users'}));
});

router.put('/:id', function(req, res, next){
  	// res.send(JSON.stringify({method:'PUT', url:'/users'}));
  	console.log(req.body.name);
	console.log(req.body.age);
	var user = {
		name : req.body.name, age:req.body.age
	};
	if(users.length > Number(req.params.id)){
		users[Number(req.params.id)] = user;
	}else{
		users.push(user);
	}
	res.send(JSON.stringify(user));
})
router.delete('/', function(req, res, next){
  	// res.send(JSON.stringify({method:'DELETE', url:'/users'}));

})
module.exports = router;
