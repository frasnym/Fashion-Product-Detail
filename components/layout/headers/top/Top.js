import React from "react";

export default function Top() {
	return (
		<div className="flex">
			<div>
				<img src="https://www.eshakti.com/assets/images/logo.svg" />
			</div>
			<div className="flex-grow self-center px-5">
				<input
					className="border-b-2 w-full"
					placeholder="Search products"
				/>
			</div>
			<div className="w-20 text-center self-center uppercase">
				Sign In
			</div>
			<div className="w-20 text-center self-center uppercase">
				Wishlist
			</div>
			<div className="w-20 text-center self-center uppercase">Cart</div>
		</div>
	);
}
