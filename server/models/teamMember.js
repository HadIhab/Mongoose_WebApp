//TeamMember

const mongoose = require('mongoose');

TeamMemberSchema = new mongoose.Schema({
	name: { type: String }
});

module.exports = mongoose.model('TeamMember',TeamMemberSchema);