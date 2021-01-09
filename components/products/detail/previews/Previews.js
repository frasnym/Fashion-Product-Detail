import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Custom from "./custom/Custom";

export default class Previews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
		};
	}

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
	}

	render() {
		const images = [
			"https://img1.eshakti.com/clothimages/CL0080930ML.jpg",
			"https://img1.eshakti.com/clothimages/CL0080930ML1.jpg",
			"https://img1.eshakti.com/clothimages/CL0080930ML2.jpg",
			"https://img1.eshakti.com/clothimages/CL0080930ML3.jpg",
			"https://img1.eshakti.com/clothimages/CL0080930ML4.jpg",
		];

		return (
			<>
				<div>
					<div className="grid grid-cols-7">
						<div className="col-span-5">
							<Slider
								asNavFor={this.state.nav2}
								ref={(slider) => (this.slider1 = slider)}
								lazyLoad={true}
								arrows={false}
							>
								{images.map((image) => {
									return (
										<div key={image}>
											<img src={image} />
										</div>
									);
								})}
							</Slider>
						</div>
						<Custom />
					</div>
					<Slider
						asNavFor={this.state.nav1}
						ref={(slider) => (this.slider2 = slider)}
						slidesToShow={3}
						swipeToSlide={true}
						focusOnSelect={true}
						lazyLoad={true}
					>
						{images.map((image) => {
							return (
								<div key={image}>
									<img key={image} src={image} />
								</div>
							);
						})}
					</Slider>
				</div>
			</>
		);
	}
}
