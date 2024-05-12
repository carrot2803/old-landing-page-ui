import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonials.css";

export default function Testimonials() {
	return (
		<section className="testimonials section-padding" id="testimonials" data-scroll-index="4">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-title">
							<h2>
								what our <span>students</span> say
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="owl-carousel testimonials-carousel">
						<div className="testimonial-item">
							<div className="img-box">
								<img
									src="https://i.seadn.io/gae/6xxeJMz0SBziNYlf0NnN_59rbuizSfH64lAdW1wKk2lXUcX5ARDLmyj6SNOCr0fxXnT5paImdRaNA8dO3NhyWtpbVd6njMmu_HPa_Q?auto=format&dpr=1&w=1000"
									alt="testimonial"
								/>
								<i className="fas fa-quote-right">
									<FontAwesomeIcon icon={faQuoteRight} />
								</i>
							</div>
							<p>
								“I’ve watched my employees grow into their jobs,That’s fun to be a part of and great for
								the business.”
							</p>
							<h3>Bob</h3>
							<span>Student of QRC</span>
							<div className="rating">
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</div>
						</div>
						<div className="testimonial-item">
							<div className="img-box">
								<img
									src="https://i.seadn.io/gae/6xxeJMz0SBziNYlf0NnN_59rbuizSfH64lAdW1wKk2lXUcX5ARDLmyj6SNOCr0fxXnT5paImdRaNA8dO3NhyWtpbVd6njMmu_HPa_Q?auto=format&dpr=1&w=1000"
									alt="testimonial"
								/>
								<i className="fas fa-quote-right">
									<FontAwesomeIcon icon={faQuoteRight} />
								</i>
							</div>
							<p>
								“The school was definitely a challenge, but it taught me a great deal about the topic
								and industry.”
							</p>
							<h3>Mark</h3>
							<span>CEO of Bob</span>
							<div className="rating">
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</div>
						</div>
						<div className="testimonial-item">
							<div className="img-box">
								<img
									src="https://i.seadn.io/gae/6xxeJMz0SBziNYlf0NnN_59rbuizSfH64lAdW1wKk2lXUcX5ARDLmyj6SNOCr0fxXnT5paImdRaNA8dO3NhyWtpbVd6njMmu_HPa_Q?auto=format&dpr=1&w=1000"
									alt="testimonial"
								/>
								<i className="fas fa-quote-right">
									<FontAwesomeIcon icon={faQuoteRight} />
								</i>
							</div>
							<p>
								"Our younger workforce likes the breadth of courses within Studucate and the flexibility
								of the mobile app."
							</p>
							<h3>Tusk</h3>
							<span>Teacher</span>
							<div className="rating">
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</div>
						</div>
						<div className="testimonial-item">
							<div className="img-box">
								<img
									src="https://i.seadn.io/gae/6xxeJMz0SBziNYlf0NnN_59rbuizSfH64lAdW1wKk2lXUcX5ARDLmyj6SNOCr0fxXnT5paImdRaNA8dO3NhyWtpbVd6njMmu_HPa_Q?auto=format&dpr=1&w=1000"
									alt="testimonial"
								/>
								<i className="fas fa-quote-right">
									<FontAwesomeIcon icon={faQuoteRight} />
								</i>
							</div>
							<p>
								It's tremendous! People find things they're interested in & spend hours on that topic
								inside the Stucademy."
							</p>
							<h3>Bepo</h3>
							<span>Student</span>
							<div className="rating">
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
