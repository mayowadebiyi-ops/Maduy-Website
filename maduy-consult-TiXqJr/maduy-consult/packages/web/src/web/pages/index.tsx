import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { WhatWeDo } from "../components/what-we-do";
import { Alliance } from "../components/alliance";
import { Insights } from "../components/insights";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

export default function Index() {
	return (
		<div className="min-h-screen bg-ink">
			<Nav />
			<main>
				<Hero />
				<WhatWeDo />
				<Alliance />
				<Insights />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
