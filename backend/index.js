const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const userRouter = require("./routes/user");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("Database connected successfully");
	})
	.catch((err) => {
		console.error("failed to connect", err);
	});

app.use("/auth", userRouter);

const port = 3002;

app.listen(port, () => {
	console.log(` listening on port ${port}`);
});
