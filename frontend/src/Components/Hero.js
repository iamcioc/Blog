import React from "react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div>
			<section
				className="container-fluid"
				style={{ backgroundColor: "#d2e9ff", height: "50vh" }}
			>
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="mx-auto mt-5 my-5" style={{ width: "60%" }}>
							<div id="user">
								<p className="fs-3 fw-bold mb-1">Welcome to MyBlog</p>
							</div>
							<button
								type="button"
								className="btn get_started btn-primary rounded-pill"
							>
								<i className="fa-solid fa-circle-chevron-right"></i>
								<Link
									to={"/signup"}
									style={{ textDecoration: "none", color: "white" }}
								>
									Get Started
								</Link>
							</button>
						</div>
					</div>
					<div className="col-6 d-none d-lg-block">
						<img
							src="./Bloggingpana.svg"
							className="mx-auto"
							width="100%"
							height="250px"
							alt="blogging"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
