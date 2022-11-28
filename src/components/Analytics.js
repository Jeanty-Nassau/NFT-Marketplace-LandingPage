import "../stylesheets/Analytics.css";
import Image from "../Assets/Other 18.png";

export default function Analytics() {
	return (
		<div className="analytics">
			<div className="imageWrapper">
				<img src={Image} alt="" />
			</div>
			<div className="textWrapper">
				<h2 className="subHeading">ANALYTICS</h2>
				<h1 className="mainHeading">Built-In Analytics To Track Your NFTs</h1>
				<p className="bodyText">
					Use our built-in analytics dashboard to pull valuable insights and
					monitor the value of your Krypto portfolio over time.
				</p>
				<div className="cta">
					<p>VIEW OUR PRICING</p>
				</div>
			</div>
		</div>
	);
}
