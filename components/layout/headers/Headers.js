import React from "react";
import Bottom from "./bottom/Bottom";
import Top from "./top/Top";

export default function Headers() {
	return (
		<div className="w-screen px-10 py-5">
			<Top />
			<Bottom />
		</div>
	);
}
