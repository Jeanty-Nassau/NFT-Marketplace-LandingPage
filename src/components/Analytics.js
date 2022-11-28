import "../stylesheets/Analytics.css";
import Image from "../Assets/Other 18.png";

export default function Analytics() {
	return (
		<div className="analyticsSection">
			<div className="imageWrapperAnalytics">
				<img src={Image} alt="" />
			</div>
			<div className="textWrapperAnalytics">
				<h2 className="subHeadingAnalytics">ANALYTICS</h2>
				<h1 className="mainHeadingAnalytics">
					Built-In Analytics To Track Your NFTs
				</h1>
				<p className="bodyTextAnalytics">
					Use our built-in analytics dashboard to pull valuable insights and
					monitor the value of your Krypto portfolio over time.
				</p>
				<button className="ctaAnalytics">VIEW OUR PRICING</button>
			</div>
		</div>
	);
}
