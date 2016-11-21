// The Post model

var mongoose = require('mongoose')
   ,Schema   = mongoose.Schema;

var commentSchema = new Schema({
	author: String,
	comment: String,
	date: Date,
	_post: {type: Schema.Types.ObjectId, ref: 'Post'}
});

module.exports = mongoose.model('Comment', commentSchema);
