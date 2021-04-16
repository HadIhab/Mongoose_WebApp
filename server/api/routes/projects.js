const Project = require('../../models/project');

module.exports = function (router) {

	router.get('/projects',(req,res) => {
		const query = {
			isActive: { $eq: true }
		}
		Project.find(query)
			.sort({ 'name': 1 })
			.exec()
			.then(docs => res.status(200)
				.json(docs))
			.catch(err => res.status(500)
				.json({
					message: 'Error finding projects',
		  			error: err
				}));
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