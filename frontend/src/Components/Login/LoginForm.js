import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
	const navigate = useNavigate();

	const [payload, setPayload] = useState({
		email: "",
		password: "",
	});

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

		fetch("http://localhost:3002/auth/login", {
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
					localStorage.setItem("token", data.token);
					setTimeout(() => {
						navigate("/posts");
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
			<div
				className="d-flex"
				style={{ backgroundColor: "#F0F2F5", height: "70vh" }}
			>
				<div className="" style={{ width: "50%" }}>
					<div
						className="card mx-auto mt-5 shadow-lg"
						style={{ width: "80%", height: "80%" }}
					>
						<form
							className="mx-auto mt-5"
							id="signinForm"
							style={{ width: "80%" }}
							onSubmit={handleSubmit}
						>
							<p
								className="message"
								style={{ textAlign: "center", textTransform: "capitalize" }}
							>
								{data.msg}
							</p>

							<div className="mb-4">
								<label className="form-label mb-2">Email</label>
								<input
									type="email"
									name="email"
									value={payload.email}
									onChange={handleChange}
									className="form-control rounded-pill"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="mb-4">
								<label className="form-label mb-2">Password</label>
								<input
									type="password"
									name="password"
									value={payload.password}
									onChange={handleChange}
									className="form-control rounded-pill"
									id="exampleInputPassword1"
								/>
							</div>
							<div className="d-grid">
								<button
									disabled={data.isSubmit}
									type="submit"
									className="btn btn-primary btn-lg rounded-4"
								>
									Log In
								</button>
							</div>
						</form>
						<p className="text-center my-3 text-primary">
							Don't have an account?
							<span>
								<Link to={"/signup"}>Sign Up</Link>
							</span>
						</p>
					</div>
				</div>

				{/* second div */}
				<div className="mx-auto my-3" style={{ width: "50%" }}>
					<div style={{ paddingLeft: "10%" }}>
						<p className="fs-2 fw-bold mt-3 text-center">
							#1 Blogging Website for everyone around the globe. Totally and
							free and easy to use.
						</p>
					</div>
					<div style={{ paddingLeft: "10%" }}>
						<img
							src="./Mobilewireframe.gif"
							alt=""
							className="mt-3"
							style={{ width: "50%", marginLeft: "20%" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
