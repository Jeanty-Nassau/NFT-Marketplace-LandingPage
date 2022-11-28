import logo from "./logo.svg";
import "./stylesheets/App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Analytics from "./components/Analytics";
import Smartphone from "./components/Smartphone";
import Access from "./components/Access";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
			<Analytics />
			<Smartphone />
			<Access />
			<Testimonials />
			<CTA />
			<Footer />
		</div>
	);
}

export default App;
