import Link from "next/link";
import Router from "next/router";

export default function Home() {
	return (
		<>
			<p>
				Go to{" "}
				<Link href="/products/detail">
					<a>Products Detail</a>
				</Link>{" "}
				Page
			</p>
			<button onClick={() => Router.push("/products/detail")}>
				Go to Products Detail
			</button>
		</>
	);
}
