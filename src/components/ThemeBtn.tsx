import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Theme.css";

export default function ThemeToggle() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	useEffect(() => toggleTheme(), []);

	const toggleTheme = () => {
		const storedTheme = localStorage.getItem("studucate-theme");
		if (storedTheme !== null) setIsDarkTheme(storedTheme === "dark");
	};

	const handleThemeToggleClick = () => {
		setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
		localStorage.setItem("studucate-theme", isDarkTheme ? "light" : "dark");
	};

	useEffect(() => {
		isDarkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark");
		localStorage.setItem("studucate-theme", isDarkTheme ? "dark" : "light");
	}, [isDarkTheme]);

	return (
		<div className={`toggle-theme ${isDarkTheme ? "dark" : ""}`} onClick={handleThemeToggleClick}>
			<FontAwesomeIcon className="self-center" icon={isDarkTheme ? faSun : faMoon} />
		</div>
	);
}
