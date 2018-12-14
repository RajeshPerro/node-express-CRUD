const express = require('express');
const router = express.Router();

const Profile = require('../models/Profile')

router.get('/profile',(req, res)=>{
	let filters = req.query;
	 if(req.query.age != null){
  	filters ={
		age:{$gt : req.query.age}
  	}
	}
	Profile.find(filters)
		.then(profiles => {
			res.json({
				confirmation:'success',
				data: profiles
			})
		}).catch(err =>{
			res.json({
				confirmation:'fail',
				data:err.message
			})
		})

})

router.get('/profile/:id',(req,res)=>{
	const id = req.params.id;
Profile.findById(id)
	.then(profile => {
  res.render('profile', {data: profile})
	})
	.catch(err => {
		res.json({
			confirmation : 'fail',
			message: 'Profile with id : '+id+' not found!!'
		})

	})
})

// router.post('/profile',(req, res)=>{
//   res.json(req.body)
// })
router.post('/profile',(req, res)=>{
  Profile.create(req.body)
	.then(() =>{
		res.json({
			confirmation: 'success',
			data:'added!!'
		})
	})
	.catch(err =>{
		res.json({
			confirmation:'fail',
			message: err.messages
		})

	})
})

//delete the player we want to remove from the team..
router.delete('/profile/delete/:id',(req, res)=>{
console.log(req.params.id);
	 Profile.findOneAndDelete({_id:req.params.id})
	 .then( data =>{
		 res.json({
			 confirmation: 'success',
 			data:data
		 })
	 })
	 .catch(err =>{
 		res.json({
 			confirmation:'fail',
 			message: err.messages
 		})

 	})
 })

//find the player we want to edit ....
 router.get('/profile/edit/:id',(req,res)=>{
 	const id = req.params.id;
 Profile.findById(id)
 	.then(profile => {
   res.render('edit', {data: profile})
 	})
 	.catch(err => {
 		res.json({
 			confirmation : 'fail',
 			message: 'Profile with id : '+id+' not found!!'
 		})

 	})
 })

//update one player information.....
 router.post('/profile/edit/:id',(req,res)=>{
 	console.log(req.params.id);
	Profile.findOneAndUpdate({_id:req.params.id},{$set:req.body})
	.then( msg =>{
		res.json({
			confirmation:'success',
			data : msg
		})
	})
	.catch(err => {
 		res.json({
 			confirmation : 'fail',
 			message: 'Profile with id : '+id+' not found!!'
 		})

 	})

 })


router.get('/users',(req,res)=>{
	const users = [
		{id:100, name:'Rajesh',age:28, email:'rajesh@gmail.com', department:'SE'},
		{id:101, name:'Psha',age:29, email:'pasha@gmail.com', department:'SE'},
		{id:102, name:'Likon',age:27, email:'linkon@gmail.com', department:'UX'},
		{id:103, name:'Shakil',age:28, email:'shakil@gmail.com', department:'BUS'},
	];
	res.json({
		confirmation : 'sucess',
		data:users
	})
})

module.exports = router;
