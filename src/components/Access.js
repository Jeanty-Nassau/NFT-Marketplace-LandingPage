import "../stylesheets/Access.css";
import Image from "../Assets/Other 12.png";

export default function Access() {
	return (
		<div className="accessSection">
			<div className="imageWrapperAccess">
				<img src={Image} alt="" />
			</div>
			<div className="textWrapperAccess">
				<h2 className="subHeadingAccess">24/7 ACCESS</h2>
				<h1 className="mainHeadingAccess">
					Sell Your NFTs From Anywhere At Any Time
				</h1>
				<p className="bodyTextAccess">
					With our easy-to-use platform, you can buy or sell assets from
					anywhere in the world, at any time.
				</p>
				<button className="ctaAccess">GET STARTED</button>
			</div>
		</div>
	);
}
