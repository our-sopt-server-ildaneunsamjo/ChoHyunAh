var express = require('express');
var router = express.Router();

router.get('/post', (req, res)=>{
    const result = {
        status: 200,
        message: 'api/blog/post 접근 성공'
    }
    res.status(200).send(result);
});

module.exports = router;