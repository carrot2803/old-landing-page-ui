import { useState } from "react";

export default function VideoBtn() {
	const videoSrc = "https://youtu.be/NrO0CJCbYLA";
	const [isOpen, setIsOpen] = useState(false);

	const handlePopupToggle = () => setIsOpen(!isOpen);

	return (
		<div className={`video-popup ${isOpen ? "open" : ""}`}>
			<div className="video-popup-inner">
				<div className="iframe-box">
					<i className="fas fa-times video-popup-close" onClick={handlePopupToggle}></i>
					<iframe
						title="vid"
						id="player-1"
						src={videoSrc}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
}
