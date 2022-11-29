import "../stylesheets/Testimonials.css";
export default function Testimonials() {
	return (
		<div className="testimonialSection">
			<div className="mainText">
				<h2 className="subheading">TESTIMONIALS</h2>
				<h1 className="testimonialMainHeading">Read What Others Have To Say</h1>
			</div>
			<div className="testimonialsContainer">
				<div className="testimonial">
					<div className="testimonialMask"></div>
					<div className="testimonialImageWrapper" id="image1">
						<div className="imageIcon"></div>
					</div>
					<h2 className="testimonialSubHeading">OLIVIA COLE</h2>
					<p className="testimonialBodyText">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
					</p>
				</div>
				<div className="testimonial">
					<div className="testimonialMask"></div>
					<div className="testimonialImageWrapper" id="image2">
						<div className="imageIcon"></div>
					</div>
					<h2 className="testimonialSubHeading">EVAN WHITE</h2>
					<p className="testimonialBodyText">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
					</p>
				</div>
				<div className="testimonial">
					<div className="testimonialMask"></div>
					<div className="testimonialImageWrapper" id="image3">
						<div className="imageIcon"></div>
					</div>
					<h2 className="testimonialSubHeading">JESSICA PAIGE</h2>
					<p className="testimonialBodyText">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
