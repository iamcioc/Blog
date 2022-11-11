import React from "react";
import Footer from "./Signup/Footer"; 

const CreateNewPost = (props) => {
	return (
		<>
			<form onSubmit={props.savePost}>
				<h2>Create New Post</h2>
				<div className="row  justify-content-center align-items-center">
					<div class="col-10 col-md-8 col-lg-6">
						<label className="col-sm-12 col-form-label">
							<b>Title</b>
							<input
								className="form-control form-control-sm"
								autoFocus={true}
								type="text"
								placeholder="post title"
								onChange={props.savePostTitleToState}
								required
								ref={props.getTitle}
							/>
						</label>
						<br />
						<label className="col-sm-12 col-form-label">
							<b>Content</b>
							<textarea
								className="form-control form-control-sm"
								placeholder="description"
								onChange={props.savePostContentToState}
								rows="18"
								cols="41"
								required
								ref={props.getContent}
							/>
						</label>
						<br />
						<button title="save post" className="btn btn-success ml-3 save-button">
							save
						</button>
					</div>
				</div>
      </form>
      <Footer />
		</>
	);
};

export default CreateNewPost;
