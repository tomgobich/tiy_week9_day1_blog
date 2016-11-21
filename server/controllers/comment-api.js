const chalk 	= require('chalk');
const Post  	= require('../models/post.js');
const Comment 	= require('../models/comment.js');




exports.post = ((req, res) => {

	let comment = new Comment({
		author: "Tom",
		comment: req.body.comment,
		date: new Date(),
		_post: req.body.postID
	});

	comment.save((err) => {
		if (err) {
			res.send({error:err});
			return;
		};

		Post
		.findById(req.body.postID)
		.populate('_comments')
		.exec((err, post) => {
			post._comments.push(comment);
			post.save(function(err,response){
				if (err) {
					res.send({error:err});
					return;
				};

				res.json(response);

				console.log(chalk.green('Comment successfully added!'));
			});
		})
	});

});
