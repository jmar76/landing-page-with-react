import React from "react";
import { Navbar } from "../component/navbar.js";
import { Jumbotron } from "../component/jumbotron.js";
import { Tarjetas } from "../component/cardComponent.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="bg-secundary mt-5">
					<Jumbotron />
				</div>
				<div>
					<Tarjetas />
				</div>
			</div>
		</div>
	);
}
