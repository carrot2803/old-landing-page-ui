import { faEnvelope, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";

export default function Contact() {
	return (
		<section className="contact section-padding" id="contact" data-scroll-index="6">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-title">
							<h2>
								Contact <span>Us</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-5">
						<div className="contact-info">
							<h3>for any queries or support</h3>
							<div className="contact-info-item">
								<i className="fas fa-location-arrow ">
									<FontAwesomeIcon icon={faLocationArrow} />
								</i>
								<h4>Location</h4>
								<p>Studucate BB, Jasmine Greene</p>
							</div>
							<div className="contact-info-item">
								<i className="fas fa-envelope">
									<FontAwesomeIcon icon={faEnvelope} />
								</i>
								<h4>Write to us at</h4>
								<p>studucate@gmail.com</p>
							</div>
							<div className="contact-info-item">
								<i className="fas fa-phone">
									<FontAwesomeIcon icon={faPhone} />
								</i>
								<h4>Call us via</h4>
								<p>+1 (246) 000-0000</p>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-md-7">
						<div className="contact-form">
							<form>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<input
												type="text"
												placeholder="Your name"
												id="field1"
												className="form-control"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<input
												type="text"
												placeholder="Your Email"
												id="field2"
												className="form-control"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<input
												type="text"
												placeholder="Your Phone"
												id="field3"
												className="form-control"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<input
												type="text"
												placeholder="Subject"
												id="field4"
												className="form-control"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<textarea
												placeholder="Message"
												id="field5"
												className="form-control"
											></textarea>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<button type="submit" className="btn btn-2">
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
