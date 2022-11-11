import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateForm() {
	const [payload, setPayload] = useState({
		userName: "",
		email: "",
		password: "",
		image: "",
	});

	const navigate = useNavigate();

	const [data, setData] = useState({ isSubmit: false, msg: "" });

	function handleChange({ target: { name, value, files } }) {
		if (name === "image") value = files[0];
		setPayload((state) => ({ ...state, [name]: value }));
		console.log(payload);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setData((state) => ({
			...state,
			isSubmit: true,
			msg: "Submitting data...",
		}));

		fetch("http://localhost:3002/auth/signup", {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success) {
					setTimeout(() => {
						navigate("/login");
					}, 2000);
				}
				setData((state) => ({ ...state, isSubmit: false, msg: data.message }));
			})
			.catch((err) => {
				setData((state) => ({
					...state,
					isSubmit: false,
					msg: "Something went wrong",
				}));
				console.error(err);
			});
	}

	useEffect(() => {
		localStorage.getItem("token") && navigate("/posts");
	}, []);
	return (
		<div>
			{/* main section  */}
			<div
				className="card mx-auto mt-5 py-5 px-5 shadow-lg"
				style={{ width: "40%", height: "100vh" }}
			>
				<div>
					<p className="fs-3 fw-bold text-center">Sign Up for Free</p>
				</div>
				<p
					className="message"
					style={{ textAlign: "center", textTransform: "capitalize" }}
				>
					{data.msg}
				</p>
				<form className="mt-5" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Username
						</label>
						<input
							type="text"
							className="form-control rounded-pill"
							name="userName"
							value={payload.userName}
							onChange={handleChange}
							id="exampleInputUsername"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-4">
						<label className="form-label">Password</label>
						<input
							type="password"
							name="password"
							value={payload.password}
							onChange={handleChange}
							className="form-control rounded-pill"
							id="exampleInputPassword1"
						/>
					</div>

					<div className="mb-4">
						<label className="form-label">Email</label>
						<input
							type="email"
							name="email"
							value={payload.email}
							onChange={handleChange}
							className="form-control rounded-pill"
							id="exampleInputEmail1"
						/>
					</div>

					<div className="mb-4">
						<label className="form-label">Input URL</label>
						<input
							type="file"
							name="image"
							onChange={handleChange}
							className="form-control rounded-pill"
							id="exampleInputURL"
						/>
					</div>
					<div className="d-grid">
						<button
							type="submit"
							disabled={data.isSubmit}
							className="btn btn-primary btn-lg rounded-4"
						>
							Sign Up
						</button>
					</div>
					<div>
						<p className="text-primary text-center mt-3">
							Already have an account?
							<span>
								<Link to={"/login"}>Log In!</Link>
							</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateForm;
