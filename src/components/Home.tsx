import { faCircleNotch, faPlay, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

export default function Home() {
	return (
		<>
			<section className="home d-flex align-items-center" id="home" data-scroll-index="0">
				<div className="effect-wrap">
					<FontAwesomeIcon icon={faPlus} className="fas fa-plus effect effect-1" />
					<FontAwesomeIcon icon={faPlus} className="fas fa-plus effect effect-2" />
					<FontAwesomeIcon icon={faCircleNotch} className="fas fa-circle-notch effect effect-3" />
				</div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<div className="home-text">
								<h1>
									The Best ever <br />
									E-Learning experience
								</h1>
								<p>
									Join Studucate's discord server at no cost and enjoy boundless entry to
									well-organized educational courses and establish connections with esteemed
									educators.
								</p>
								<div className="home-btn">
									<a href="." className="btn btn-1" data-scroll-goto="3">
										Join Studucate
									</a>
									<button type="button" className="btn btn-1 video-play-btn">
										<FontAwesomeIcon icon={faPlay} />
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-5 text-center">
							<div className="home-img">
								<div className="circle"></div>
								<img src={require("../img/1.png")} alt="studucate app" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="video-popup">
				<div className="video-popup-inner">
					<div className="iframe-box">
						<FontAwesomeIcon icon={faTimes} className="video-popup-close" />
						<iframe
							title="vid"
							id="player-1"
							src="https://www.youtube.com/embed/NrO0CJCbYLA"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}
