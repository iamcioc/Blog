import React from 'react'

function Cards() {
  return (
      <div>
          
			<div className="mt-5 d-flex justify-content-between">
				<div
					className="mt-3"
					style={{borderTop: "1px solid #e8e9ec", width: "420px"}}
				></div>

				<p className="text-center fs-4 fw-bold">Most recent posts</p>
				<div
                  className="mt-3"
                  style={{ borderTop: "1px solid #e8e9ec", width: "420px" }}
				></div>
			</div>

			<div className="container mt-2" align="center">
				<div className="row gy-4">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="card" style={{width: "19rem"}}>
							<img src="./image1.jpg" className="card-img-top" alt="img" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 card1">
                      <div className="card" style={{ width: "19rem" }} >
							<img src="./image1.jpg" className="card-img-top" alt="img"  />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="card" style={{width: "19rem"}}>
							<img src="./image1.jpg" className="card-img-top" alt="img" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card" style={{width: "19rem"}}>
							<img src="./image1.jpg" className="card-img-top" alt="img" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card" style={{width: "19rem"}}>
							<img src="./image1.jpg"  className="card-img-top" alt="img" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="card" style={{width: "19rem"}}>
							<img src="./image1.jpg" className="card-img-top" alt="img" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	
    </div>
  )
}

export default Cards