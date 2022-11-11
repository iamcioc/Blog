import React from "react";
import Footer from "./Signup/Footer"

const ModifyPost = (props) => {
	return (
		<>
			<div className="row  justify-content-center align-items-center">
				<div class="col-10 col-md-8 col-lg-6">
					<form style={{ marginTop: "20px" }}>
						<h2>Modify Post</h2>
						<label
							className="col-sm-12 col-form-label"
							style={{ width: "" }}
						>
							<b>Title</b>
							<input
								className="form-control form-control-sm"
								defaultValue={props.title}
								autoFocus={true}
								onChange={props.savePostTitleToState}
								placeholder="title"
								size="39"
							/>
						</label>
						<br />
						<label
							className="col-sm-12 col-form-label"
							style={{ width: "" }}
						>
							<b>Content</b>
							<textarea
								className="form-control form-control-sm"
								defaultValue={props.content}
								onChange={props.savePostContentToState}
								placeholder="contents"
								rows="18"
								cols="41"
							/>
						</label>
						<button
							title="update changes"
							className="btn btn-success update-button ml-3"
							onClick={props.updatePost}
						>
							Update Post
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default ModifyPost;
