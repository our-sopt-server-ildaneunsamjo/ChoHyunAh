var express = require('express');
var router = express.Router();

router.get('/login', function(req,res){
  const result = {
    status: 200,
    message: 'api/users/login 접근 성공'
  }
  res.status(200).send(result);
});

router.get('/signup', function(req,res){
  const result = {
    status: 200,
    message: 'api/users/signup 접근 성공'
  }
  res.status(200).send(result);
});

module.exports = router;
