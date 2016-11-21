const express 		= require('express');
const mongoose 		= require('mongoose');
const cors 			= require('cors');
const bodyParser 	= require('body-parser');

const app 			= express();

const port = process.env.PORT || 3000;



app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds159507.mlab.com:59507/tiy-w9d1-blog');



const postAPI 		= require('./controllers/post-api.js');
const commentAPI 	= require('./controllers/comment-api.js');

app.get('/api/blog', postAPI.get);
app.get('/api/blog/:postID', postAPI.getSingle);
app.post('/api/blog', postAPI.post);
app.delete('/api/blog/:postID', postAPI.delete);

app.post('/api/blog/comment', commentAPI.post);



app.get('/', function(req, res){
	res.render('../dist/index');
});



app.listen(port, function () {
	console.log('Server running on port ' + port);
});
