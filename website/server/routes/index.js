var path = require('path');
var express = require('express');

var db = require('../db.js');
var UserInfo = require('../controller/userinfo');

var router = express.Router();


router.get('/get-userinfo/:id', UserInfo.getUsers)
router.get('/login/:data', UserInfo.login);
router.get('/regist/:data', UserInfo.regist);
router.get('/update/:data', UserInfo.update);
router.get('/addListing/:data', UserInfo.addListing)
router.get('/getListings', UserInfo.getListings)


router.get('*', function(req, res, next) {
	res.sendfile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;
