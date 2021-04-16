const mongoose = require('mongoose');

const requiredStringValidator = [
	function(val){
		let testVal = val.trim();
		return (testVal.length > 0);
	},
	// Custom error text
	'Please supply a value for {PATH}'
];

const standupSchema = new mongoose.Schema({
	teamMemberId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'teamMembers'
	},
	teamMember: { type: String },
	project: { type: String },
	workYesterday: { type: String },
	workToday: { type: String },
	impediment: { type: String },
	createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Standup',standupSchema);