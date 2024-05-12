import { faChalkboardTeacher, faCheck, faCommentDots, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Features.css";

export default function Features() {
	return (
		<div className="features section-padding" id="features" data-scroll-index="1">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-title">
							<h2>
								Studucate<span className="ml-2"> Benefits</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="owl-carousel features-carousel">
						<div className="feature-item">
							<div className="icon">
								<FontAwesomeIcon icon={faChalkboardTeacher} />
								<i className="fas fa-comment-dots"></i>
							</div>
							<h3>Easy Learning</h3>
							<p>
								We craft learning journeys for every student at Studucate that address their unique
								needs.
							</p>
						</div>
						<div className="feature-item">
							<div className="icon">
								<FontAwesomeIcon icon={faInfinity} />
								<i className="fas fa-comment-dots"></i>
							</div>
							<h3>Free Courses</h3>
							<p>Get access to CSEC and CAPE structured classes based on your interest and need.</p>
						</div>
						<div className="feature-item">
							<div className="icon">
								<FontAwesomeIcon icon={faCommentDots} className="fas" />
								<i className="fas fa-comment-dots"></i>
							</div>
							<h3>Discussion forms</h3>
							<p>
								We at Studucate host an interactive platform where knowledge can be share among
								students.
							</p>
						</div>
						<div className="feature-item">
							<div className="icon">
								<FontAwesomeIcon icon={faCheck} />
								<i className="fas fa-comment-dots"></i>
							</div>
							<h3>Doubts clearing sessions</h3>
							<p>Tutors will take some sessions periodically to clear doubts for clear understanding.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
