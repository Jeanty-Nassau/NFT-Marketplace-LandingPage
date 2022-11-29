import "../stylesheets/Hero.css";
import HeroImage from "../Assets/Other 07.png";
import logo1 from "../Assets/image 5.png";
import logo2 from "../Assets/image 6.png";
import logo3 from "../Assets/image 7.png";
import logo4 from "../Assets/image 8.png";

export default function Hero() {
	return (
		<>
			<div className="heroSection">
				<div className="circleGradient1"></div>
				<div className="circleGradient2"></div>
				<div className="heroTextWrapper">
					<h1 className="mainHeading">Discover And Collect Rare NFTs</h1>
					<p className="bodyText">
						The most secure marketplace for buying and selling unique crypto
						assets.
					</p>
					<div className="buttonWrapper">
						<button className="buyButton">BUY NFTs</button>
						<button className="sellButton">SELL NFTs</button>
					</div>
				</div>
				<div className="heroImageWrapper">
					<img src={HeroImage} alt={HeroImage} />
				</div>
			</div>
			<div className="logos">
				<h2>FEATURED ON</h2>
				<div className="logosWrapper">
					<img src={logo1} alt="" />
					<img src={logo2} alt="" />
					<img src={logo3} alt="" />
					<img src={logo4} alt="" />
				</div>
			</div>
		</>
	);
}
