import React, { useRef } from "react";
import HeroSectiontwo from "./components/HeroSectiontwo";
import Globe from "./components/Globe";
import Carousel from "./components/Carousel";
import SocialMedia from "./components/SocialMedia";

const App = () => {
	const bottomRef = useRef(null);
	const TeamRef = useRef(null);

	return (
		<div className="App">
			<HeroSectiontwo />
			<Globe />
			<Carousel TeamRef={TeamRef} />
			<SocialMedia TeamRef={TeamRef} />
		</div>
	);
};

export default App;
