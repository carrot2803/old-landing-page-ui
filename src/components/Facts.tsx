import "./Facts.css";

export default function Facts() {
	return (
		<section className="fun-facts section-padding" id="fun_facts">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-5 d-flex align-items-center justify-content-center">
						<div className="fun-facts-img">
							<img src={require("../img/1.png")} alt="fun facts" />
						</div>
					</div>
					<div className="col-lg-6 col-md-7">
						<div className="section-title">
							<h2>
								Studucate <span>facts</span>
							</h2>
						</div>
						<div className="fun-facts-text">
							<p>Take the best steps toward your personal and academic goals with Studucate</p>
							<div className="row">
								<div className="col-sm-6">
									<div className="fun-fact-item style-1">
										<h3>5000+</h3>
										<span>Students</span>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="fun-fact-item style-2">
										<h3>50+</h3>
										<span>Teachers</span>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="fun-fact-item style-3">
										<h3>150+</h3>
										<span>CSEC Subjects</span>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="fun-fact-item style-4">
										<h3>50+</h3>
										<span>CAPE Subjects</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
