const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.headers.authorization;
	console.log(token);

	try {
		//check if the token is provided
		if (token) {
			//verify the token

			const decoded = jwt.verify(token, process.env.SECRET_KEY);
			console.log(decoded);
			//attach the decoded data to the res.locals object
			res.locals.id = decoded.id;
			next();
		} else {
			res.status(403).json({ status: "false", message: "no token" });
		}
	} catch (error) {
		console.error(error);
		res.status(403).json({ status: "false", message: "bad token" });
	}
};
