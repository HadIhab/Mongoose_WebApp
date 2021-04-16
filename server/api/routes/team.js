const TeamMember = require('../../models/teamMember');


module.exports = function (router) {

	router.get('/team',(req,res) => {

	});

	router.post('/team', function (req,res) {
		let note = new TeamMember(req.body);
		note.save(function (err, note){
			if (err){
				return res.status(400).json(err);
			}
			res.status(200).json(note);
		});
	});
};