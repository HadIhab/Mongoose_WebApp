// Project Model

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	name: { type: String },
	description: { type: String },
	isActive: { type: Boolean, default: true }
});