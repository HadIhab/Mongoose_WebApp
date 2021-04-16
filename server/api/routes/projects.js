const Project = require('../../models/project');

module.exports = function (router) {

	router.get('/projects',(req,res) => {

	});

	router.post('/projects', function (req,res) {
		let note = new Project(req.body);
		note.save(function (err, note){
			if (err){
				return res.status(400).json(err);
			}
			res.status(200).json(note);
		});
	});
};