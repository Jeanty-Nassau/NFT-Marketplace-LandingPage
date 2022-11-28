import "../stylesheets/Smartphone.css";
import Image from "../Assets/Other 17.png";

export default function Smartphone() {
	return (
		<div className="phoneSection">
			<div className="textWrapperPhone">
				<h2 className="subHeadingPhone">GET OUR APP</h2>
				<h1 className="mainHeadingPhone">Browse NFTs From Your Smartphone</h1>
				<p className="bodyTextPhone">
					Our Krypto app is the easiest way to keep track of your assets when
					you’re on the go.
				</p>
				<button className="ctaPhone">DOWNLOAD ON IOS</button>
			</div>
			<div className="imageWrapperPhone">
				<img src={Image} alt="" />
			</div>
		</div>
	);
}
