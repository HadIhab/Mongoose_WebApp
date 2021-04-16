const Standup = require('../../models/standup');
const mongoose = require('mongoose');

module.exports = function (router) {

	router.get('/standup',(req,res) => {
		Standup.find()
		  .sort({ 'createdOn': 1 })
		  .exec()
		  .then(docs => res.status(200)
		  		.json(docs))
		  .catch(err => res.status(500)
		  		.json({
		  			message: 'Error finding standup meeting notes',
		  			error: err
		  		}));
	});

	router.get('/standup/:teamMemberId',(req,res) => {
		const query = {
			_teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
		};
		Standup.find(query)
		  .sort({ 'createdOn': 1 })
		  .exec()
		  .then(docs => res.status(200)
		  		.json(docs))
		  .catch(err => res.status(500)
		  		.json({
		  			message: 'Error finding standup meeting notes for team Id',
		  			error: err
		  		}));
	});	

	router.post('/standup', function (req,res) {
		let note = new Standup(req.body);
		note.save(function (err, note){
			if (err){
				return res.status(400).json(err);
			}
			res.status(200).json(note);
		});
	});
};