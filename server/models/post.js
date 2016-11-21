// The Post model

var mongoose = require('mongoose')
   ,Schema   = mongoose.Schema;

var postSchema = new Schema({
	author: String,
	title: String,
	date: Date,
	blog: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', postSchema);
