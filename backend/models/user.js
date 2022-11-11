const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	userName: String,
	email: {
		unique: true,
		type: String,
	},
	password: String,
	gender: String,
	image: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
