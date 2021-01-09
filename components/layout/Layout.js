import React from "react";
import Headers from "./headers/Headers";
import Offer from "./offer/Offer";

export default function Layout(props) {
	return (
		<div>
			<Offer />
			<Headers />
			<div className="mx-28">{props.children}</div>
		</div>
	);
}
