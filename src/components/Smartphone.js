import "../stylesheets/Smartphone.css";
import Image from "../Assets/Other 17.png";

export default function Smartphone() {
	return (
		<div className="analytics">
			<div className="textWrapper">
				<h2 className="subHeading">GET OUR APP</h2>
				<h1 className="mainHeading">Browse NFTs From Your Smartphone</h1>
				<p className="bodyText">
					Our Krypto app is the easiest way to keep track of your assets when
					you’re on the go.
				</p>
				<div className="cta">
					<p>DOWNLOAD ON IOS</p>
				</div>
			</div>
			<div className="imageWrapper">
				<img src={Image} alt="" />
			</div>
		</div>
	);
}
