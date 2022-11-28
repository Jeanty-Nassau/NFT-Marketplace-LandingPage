import "../stylesheets/Access.css";
import Image from "../Assets/Other 12.png";

export default function Access() {
	return (
		<div className="analytics">
			<div className="imageWrapper">
				<img src={Image} alt="" />
			</div>
			<div className="textWrapper">
				<h2 className="subHeading">24/7 ACCESS</h2>
				<h1 className="mainHeading">
					Sell Your NFTs From Anywhere At Any Time
				</h1>
				<p className="bodyText">
					With our easy-to-use platform, you can buy or sell assets from
					anywhere in the world, at any time.
				</p>
				<div className="cta">
					<p>GET STARTED</p>
				</div>
			</div>
		</div>
	);
}
