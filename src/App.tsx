import Contact from "./components/Contact";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import SS from "./components/SS";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ThemeBtn from "./components/ThemeBtn";
import "./css/style.css";

// fix footer
// fix images
// Add back preloader
// Fix nav underline
// structure page
// studucate it
// rewrite in vite

export default function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Features />
			<Facts />
			{/* <div>Timetable</div> */}
			<SS />
			<Download />
			<Info />
			<Testimonials />
			<Team />
			<FAQ />
			<Contact />
			<Footer />
			<ThemeBtn />
		</>
	);
}
