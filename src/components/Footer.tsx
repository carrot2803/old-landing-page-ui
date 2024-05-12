import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="footer-col">
							<h3>About Us</h3>
							<p>
								Studucate is Studucate's Online tutoring platform which enables students to learn with
								some of Studucate's best-curated teachers. Studucate`s USP is its quality of teachers.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-col">
							<h3>Team</h3>
							<ul>
								<li>
									<a href=".">Privacy policy</a>
								</li>
								<li>
									<a href=".">Terms & condition</a>
								</li>
								<li>
									<a href=".">Lates blogs</a>
								</li>
								<li>
									<a href=".">App services</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-col">
							<h3>Quick links</h3>
							<ul>
								<li>
									<a href="#home">Home</a>
								</li>
								<li>
									<a href="#timetable">features</a>
								</li>
								<li>
									<a href="#download">download</a>
								</li>
								<li>
									<a href="#screenshots">screenshots</a>
								</li>
								{/* <!-- <li><a href="#pricing">pricing</a></li> --> */}
								<li>
									<a href="#testimonials">testimonials</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-col">
							<h3>social pages</h3>
							<ul>
								<li>
									<a href=".">Facebook</a>
								</li>
								<li>
									<a href=".">twitter</a>
								</li>
								<li>
									<a href=".">instagram</a>
								</li>
								<li>
									<a href=".">linkedin</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<p className="copyright-text">&copy; Team Studucate | 2021</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
