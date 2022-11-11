const UserModel = require("../models/user");
module.exports = async (req, res, next) => {
	const { id } = res.locals;
	try {
		const UserExist = await UserModel.findById(id);
		if (userExist) {
			next();
		} else res.status(404).json({ success: false, message: "user not found" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ success: false, message: "something went wrong" });
	}
};
