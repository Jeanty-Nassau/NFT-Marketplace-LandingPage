import "../stylesheets/Footer.css";

export default function Footer() {
	return (
		<div className="footerSection">
			<h2 className="footerLogo">KRYPTO</h2>
			<ul className="footerList">
				<li className="footerHeading">krypto</li>
				<li>Home</li>
				<li>About</li>
				<li>Buy NFTs</li>
				<li>Sell NFTs</li>
			</ul>
			<ul className="footerList">
				<li className="footerHeading">Market</li>
				<li>Browse NFTs</li>
				<li>Buy NFTs</li>
				<li>Sell NFTs</li>
			</ul>
			<ul className="footerList">
				<li className="footerHeading">Contact</li>
				<li>Email</li>
				<li>LinkedIn</li>
				<li>Instagram</li>
				<li>Twitter</li>
			</ul>
			<form action="" className="formCTA">
				<h2 className="formHeading">join our newsletter</h2>
				<div className="formButtonContainer">
					<input
						type="email"
						placeholder="Email Address"
						name=""
						id=""
						className="formInput"
					/>
					<button type="submit">SUBMIT</button>
				</div>
			</form>
		</div>
	);
}
