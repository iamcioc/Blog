import React, { useEffect, useState } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function getLoggedInUser() {
		fetch("http://localhost:3002/auth/user", {
			headers: {
				authorization: localStorage.getItem("token"),
			},
		})
			.then((res) => res.json())
			.then(({ data, success }) => {
				if (success) {
					setUser(data);
					localStorage.setItem("user", JSON.stringify(data));
				}
			})
			.catch((err) => {
				// alert("Failed to retrieve user information");
				console.error(err);
			});
	}

	useEffect(() => {
		localStorage.getItem("token") && getLoggedInUser();
	}, []);

	function handleLogout() {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/login");
	}
	return (
		<div>
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<Link to={"/"} className="navbar-brand">
							MYBLOG
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse d-lg-flex justify-content-end">
							{localStorage.getItem("token") && pathname !== "/" ? (
								<>
									<p
										onClick={handleLogout}
										className="text-white me-5"
										style={{ cursor: "pointer" }}
									>
										Logout
									</p>
									<p className="text-white">
										Welcome, {user?.userName || "user"}
									</p>
								</>
							) : (
								<ul className="navbar-nav">
									<li className="nav-item">
										<NavLink className="nav-link fs-6" to="/login">
											<i className="fa-solid fa-arrow-right-to-bracket px-2"></i>
											Login
										</NavLink>
									</li>
								</ul>
							)}
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Navbar;
