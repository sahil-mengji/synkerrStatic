import React from "react";
import GlobeA from "./GlobeAnimation";
import "./globe.css";
function Globe() {
	return (
		<div className="GlobeAnimation">
			<GlobeA className="SpinningGlobe" />
			<div className="GlobeText">
				<p>
					Synkerr is here to make your Connections meaningfull and purpousefull{" "}
				</p>
			</div>
		</div>
	);
}
export default Globe;
