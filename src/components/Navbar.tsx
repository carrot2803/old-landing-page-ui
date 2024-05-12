import React, { useEffect, useState } from "react";
import "./Nav.css";

export default function Navbar() {
	const [sticky, setSticky] = useState(false);

	const menuLinks = [
		{ name: "Home", link: "#home" },
		{ name: "Benefits", link: "#features" },
		{ name: "Classes", link: "#screenshots" },
		{ name: "Download", link: "#projects" },
		{ name: "Testimonials", link: "#contact" },
	];

	useEffect(() => {
		window.addEventListener("scroll", () => (window.scrollY > 0 ? setSticky(true) : setSticky(false)));
		return () => window.removeEventListener("scroll", () => { });
	}, []);

	return (
		<nav className={`navbar navbar-expand-lg fixed-top ${sticky ? "bg-[#187bcd]" : ""}`}>
			<div className="container">
				{/* Brand */}
				<a className="navbar-brand" href=".">
					Studucate
				</a>

				{/* Toggler/collapsibe Button */}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavbar"
				>
					<i className="fas fa-bars"></i>
				</button>

				{/* Navbar links */}
				<div className="collapse navbar-collapse" id="collapsibleNavbar">
					<ul className="navbar-nav ml-auto">
						{menuLinks.map((menu, i) => (
							<li key={i} className="nav-item">
								<a
									className={`nav-link ${i === 0 ? "active" : ""}`}
									data-scroll-nav={i}
									href={menu.link}
								>
									{menu.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
