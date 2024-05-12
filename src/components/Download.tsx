import "./Download.css";
export default function Download() {
	return (
		<section className="app-download section-padding" id="app_download" data-scroll-index="3">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-title">
							<h2>
								download <span>app</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="app-download-item">
							<i className="fab fa-google-play"></i>
							<h3>google play</h3>
							<p>
								With the Studucate app you can explore 150+ courses,download them to watch offline.
								Click below for android
							</p>
							<a href="." className="btn btn-2">
								download now
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="app-download-item">
							<i className="fab fa-apple"></i>
							<h3>apple store</h3>
							<p>
								With the Studucate app you can explore 150+ courses,download them to watch offline.
								Click below for apple
							</p>
							<a href="." className="btn btn-2">
								download now
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="app-download-item">
							<i className="fab fa-windows"></i>
							<h3>microsoft</h3>
							<p>
								With the Studucate app you can explore 150+ courses,download them to watch offline.
								Click below for windows
							</p>
							<a href="." className="btn btn-2">
								download now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
