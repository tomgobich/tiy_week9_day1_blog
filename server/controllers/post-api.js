const chalk 	= require('chalk');
const Post  	= require('../models/post.js');



exports.get = ((req, res) => {
	let promise = Post
		.find()
		.populate('_comments')
		.sort({ date: -1 })
		.exec((err, post) => {
			if (err) return res.send(err);
	  		res.json(post);
		})
});



exports.getSingle = ((req, res) => {

	// Get the ID passed in
	let postID 		= req.params.postID;

	let promise = Post
		.findOne({ _id: postID})
		.populate('_comments')
		.exec((err, post) => {
			if (err) return res.send(err);
			res.json(post);
		})
});



exports.post = ((req, res) => {
	let post = new Post({
		author: 'Tom',
		title: req.body.title,
		date: new Date(),
		blog: req.body.blog,
	});

	post.save((err) => {
		if (err) {
			res.send({error:err});
			return;
		};
		res.send({success:"post successfully created"})
	});

	console.log(chalk.green('Post successfully added!'));
});



exports.delete = ((req,res) => {

	// Get the ID passed in
	let postID 		= req.params.postID;

	console.log(postID);

	Post.remove({ _id: postID }, function (err) {
	  if (err) return handleError(err);
	  res.send({success:"post successfully removed"})
	});

	console.log(chalk.green('Post successfully deleted!'));
});
