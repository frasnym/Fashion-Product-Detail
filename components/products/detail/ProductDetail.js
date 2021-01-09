import React from "react";

import Layout from "../../layout/Layout";
import Previews from "./previews/Previews";

export default function ProductDetail() {
	return (
		<Layout>
			<div className="w-full">
				<div className="grid grid-cols-2">
					<Previews />
					<div>Desc</div>
				</div>
			</div>
		</Layout>
	);
}
