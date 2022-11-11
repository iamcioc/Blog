import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";

const Post = ({ id, title, content, editPost, deletePost }) => {
	return (
		<>
			<div className="row h-100 justify-content-center align-items-center">
				<div class="col-10 col-md-8 col-lg-6">
					<div className="card card-width bg-dark">
						<section key={id}>
							<h3>{title}</h3>
							<hr className="new1"></hr>
							<p>{content}</p>
							<span
								title="edit post"
								style={{ color: "blue" }}
								onClick={() => editPost(id)}
							>
								<AiTwotoneEdit />
							</span>
							<span
								title="delete post"
								style={{ color: "red", marginLeft: "20px" }}
								onClick={() => deletePost(id)}
							>
								<FaTrash />
							</span>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
