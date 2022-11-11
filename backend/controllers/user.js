const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.creatUser = async function (req, res) {
	const newUser = req.body;
	console.log(newUser);

	try {
		const existingUser = await UserModel.findOne({ email: newUser.email });
		if (existingUser) {
			res.status(409).json({ success: false, message: "user already exist" });
		} else {
			const hash = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));

			newUser.password = hash;
			const user = await UserModel.create(newUser);
			console.log("Created User Data", user);
			res
				.status(200)
				.json({ success: true, message: "User created successfully" });
			// if (res.json.success) {
			// 	// change text color
			// 	message.innerText = json.success;
			// 	message.style.color = "green";
			// 	setTimeout(() => {
			// 		window.location.pathname = "login.html";
			// 	}, 3000);
			// } else {
			// 	message.innerText = jsonResponse.message;
			// 	message.style.color = "red";
			// }
		}
	} catch (err) {
		console.log(err);
		res
			.status(409)
			.json({ success: false, message: "something went wrong", err });
	}
};

exports.signin = async function (req, res) {
	const user = req.body;
	try {
		const existingUser = await UserModel.findOne({ email: user.email });

		if (existingUser) {
			const isPasswordMatch = bcrypt.compareSync(
				user.password,
				existingUser.password
			);
			// if password match

			if (isPasswordMatch === true) {
				const tokenPayload = {
					id: existingUser._id,
					email: existingUser.email,
				};
				//generate auth token
				const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
					expiresIn: "3d",
				});
				//respond to the client
				res.status(200).json({
					success: true,
					message: "user logged in successfully",
					token,
				});
			} else {
				//else respon to the client
				res
					.status(400)
					.json({ success: false, message: "email or password is incorrect" });
			}
		} else {
			//respond to the client
			res.status(404).json({ success: false, message: "user not found" });
		}
	} catch (error) {
		console.log(error);
		//respond to the client
		res.status(500).json({ success: false, message: "something went wrong" });
	}
};

exports.updateUser = async function (req, res) {
	//get the id from res.locals
	const userId = res.locals.id;
	//data from rwq body
	const dataToUpdate = req.body;

	try {
		//find and update the users data
		const updateData = await UserModel.findByIdAndUpdate(userId, dataToUpdate, {
			new: true,
		});

		//check if data was updated
		if (updateData) {
			res.status(201).json({
				success: true,
				message: "profile updated successfully",
				data: "updated data",
			});
		} else {
			res.status(404).json({ success: false, message: "user not found" });
		}
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "something went wrong",
		});
	}
};

exports.deleteUserById = async (req, res) => {
	//gets the user id from req.params
	const id = req.params.user_id;
	try {
		//find and delete the user
		const deletedUser = await UserModel.findByIdAndDelete(id);
		//if deleted
		if (deletedUser) {
			//respond to the client
			res.status(200).json({ success: true, message: deletedUser });
		}

		//else
		else {
			//respnds to the client
			res.status(404).json({ success: false, message: "User not found" });
		}
	} catch (error) {
		console.log(error);
		//respond to the client
		res.status(500).json({ success: false, message: "something went wrong" });
	}
};

exports.getUserById = async (req, res) => {
	const id = req.params.id || res.locals.id;
	try {
		//finds the user
		const user = await UserModel.findById(id);
		//if found
		if (user) {
			//responds to the client
			res.status(200).json({
				success: true,
				message: "user retrieved successfully",
				data: user,
			});
		} else {
			//respond to the client
			res.status(404).json({ success: false, message: "user not found" });
		}
	} catch (error) {
		console.log(error);
		//respond to the client
		res.status(500).json({ success: false, message: "something went wrong" });
	}
};
