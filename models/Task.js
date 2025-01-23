const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	status: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Task", TaskSchema);
