// Project Model

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true},
	description: {
		type: String,
		required: true},
	isActive: {
		type: Boolean,
		required: true,
		default: true}
});

module.exports = mongoose.model('Project',ProjectSchema);