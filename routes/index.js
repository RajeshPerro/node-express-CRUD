const express = require('express');
const router = express.Router();

const Profile = require('../models/Profile')

router.get(['/','/home'], (req, res) => {
//	res.render('index', {text: 'Hey there this my first project!!'})

let filters = req.query;
 if(req.query.age != null){
	filters ={
	age:{$gt : req.query.age}
	}
}
Profile.find(filters)
	.then(profiles => {
		res.render('index', {data: profiles})
	}).catch(err =>{
		res.json({
			confirmation:'fail',
			data:err.message
		})
	})

})

// router.get('/home', (req, res) => {
// 	res.render('index', {text: 'Hey there this my first project!!'})
// })

router.get('/about', (req, res) => {
	res.render('about', {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})
})

router.get('/contact', (req, res) => {
	res.render('contact', {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})
})




module.exports = router
