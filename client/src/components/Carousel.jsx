import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import "./Carousel.css";
import { Tabs, Tab } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const Carousel = () => {
	const [selectedTab, setSelectedTab] = useState("All");
	const [autoSlideEnabled, setAutoSlideEnabled] = useState(true); // State to toggle auto slide
	const getTabClassName = (tabName) => {
		return selectedTab === tabName ? "selected-tab" : "";
	};
	let teamData = {
		All: [
			{
				name: "Abhay Tai",
				role: "Founder",
				image:
					"https://media.licdn.com/dms/image/D5603AQFm5xdxd0vHKA/profile-displayphoto-shrink_100_100/0/1712607280250?e=1720656000&v=beta&t=dLXQtOIiC5v-M6PJf8M67iKpUwgKDYP4bamsx0rWLz4",
			},
			{
				name: "Sahil Mengji",
				role: "Co-Founder",
				image:
					"https://media.licdn.com/dms/image/D5603AQEamguVr4e5UA/profile-displayphoto-shrink_400_400/0/1701718025399?e=1720656000&v=beta&t=Rx05yZTySavIqsUoFPgtmjMbxvND10Nvg0GddUolyPQ",
			},
			{
				name: "Sahil Kumar",
				role: "Co-Founder",
				image:
					"https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?size=626&ext=jpg&ga=GA1.1.546243260.1706593150&semt=ais",
			},
		],
		Founders: [
			{
				name: "Abhay Tai",
				role: "Founder",
				image:
					"https://media.licdn.com/dms/image/D5603AQFm5xdxd0vHKA/profile-displayphoto-shrink_100_100/0/1712607280250?e=1720656000&v=beta&t=dLXQtOIiC5v-M6PJf8M67iKpUwgKDYP4bamsx0rWLz4",
			},
			{
				name: "Sahil Mengji",
				role: "Co-Founder",
				image:
					"https://media.licdn.com/dms/image/D5603AQEamguVr4e5UA/profile-displayphoto-shrink_400_400/0/1701718025399?e=1720656000&v=beta&t=Rx05yZTySavIqsUoFPgtmjMbxvND10Nvg0GddUolyPQ",
			},
			{
				name: "Sahil Kumar",
				role: "Co-Founder",
				image:
					"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=1060&t=st=1713959851~exp=1713960451~hmac=34940b0d57af03134523c3886b183e38c73ce7678f31fe88965bd80f1d10ff46",
			},
		],
		webTeam: [
			{
				name: "Abhay Tai",
				role: "Founder",
				image:
					"https://media.licdn.com/dms/image/D5603AQFm5xdxd0vHKA/profile-displayphoto-shrink_100_100/0/1712607280250?e=1720656000&v=beta&t=dLXQtOIiC5v-M6PJf8M67iKpUwgKDYP4bamsx0rWLz4",
			},
			{
				name: "Sahil Mengji",
				role: "Co-Founder",
				image:
					"https://media.licdn.com/dms/image/D5603AQEamguVr4e5UA/profile-displayphoto-shrink_400_400/0/1701718025399?e=1720656000&v=beta&t=Rx05yZTySavIqsUoFPgtmjMbxvND10Nvg0GddUolyPQ",
			},
			{
				name: "Sahil Kumar",
				role: "Co-Founder",
				image:
					"https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg?w=1060&t=st=1713959851~exp=1713960451~hmac=34940b0d57af03134523c3886b183e38c73ce7678f31fe88965bd80f1d10ff46",
			},
		],
		designTeam: [],
		marketingTeam: [],
	};

	const carouselRef = useRef(null);

	const scrollCarousel = (direction) => {
		const scrollAmount = 300; // Adjust as needed
		if (carouselRef.current) {
			const container = carouselRef.current;
			if (direction === "left") {
				container.scrollLeft -= scrollAmount;
			} else if (direction === "right") {
				container.scrollLeft += scrollAmount;
			}
		}
	};

	// Function to start automatic sliding
	const startAutoSlide = () => {
		// Enable auto slide
		setAutoSlideEnabled(trues);
	};

	// Effect to handle automatic sliding
	useEffect(() => {
		let intervalId;
		if (autoSlideEnabled) {
			intervalId = setInterval(() => {
				// Scroll right automatically
				scrollCarousel("right");
			}, 10000); // Adjust interval time as needed
		}
		// Clear interval when component unmounts or auto slide is disabled
		return () => clearInterval(intervalId);
	}, [autoSlideEnabled]); // Re-run effect when auto slide state changes

	return (
		<div className="h-screen w-full bg-black text-5xl flex flex-col justify-center items-center mt-60">
			<div className="h-[20%] w-full bg-black flex justify-center items-center">
				<h1 className="" id="Team">
					OUR TEAM
				</h1>
			</div>
			<div className="h-[10%] w-full bg-black flex justify-center items-center">
				<div className="w-full  bg-black flex justify-center items-center text-lg text-white flex-wrap gap-6">
					<div
						className={`cursor-pointer  transition duration-300 ease-in-out text-[#999999] ${getTabClassName(
							"All"
						)}`}
						onClick={() => setSelectedTab("All")}
					>
						<span>All</span>
					</div>

					<div
						className={`cursor-pointer  transition duration-300 ease-in-out text-[#999999] ${getTabClassName(
							"Founders"
						)}`}
						onClick={() => setSelectedTab("Founders")}
					>
						<span>Founders</span>
					</div>

					<div
						className={`cursor-pointer  transition duration-300 ease-in-out text-[#999999] ${getTabClassName(
							"webTeam"
						)}`}
						onClick={() => setSelectedTab("webTeam")}
					>
						<span>Web-Team</span>
					</div>

					<div
						className={`cursor-pointer  transition duration-300 ease-in-out text-[#999999] ${getTabClassName(
							"designTeam"
						)}`}
						onClick={() => setSelectedTab("designTeam")}
					>
						<span>Design-Team</span>
					</div>
					<div
						className={`cursor-pointer  transition duration-300 ease-in-out text-[#999999] ${getTabClassName(
							"marketingTeam"
						)}`}
						onClick={() => setSelectedTab("marketingTeam")}
					>
						<span>Marketing-Team</span>
					</div>
				</div>
			</div>
			<div className="h-[75%] w-full bg-black flex justify-center items-center gap-10 p-10 relative">
				<button
					className="carousel-btn right border-2 rounded-full p-3 border-[#A79FFF]"
					onClick={() => {
						scrollCarousel("left");
						stopAutoSlide();
					}}
				>
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 25 25"
							width="24"
							height="24"
						>
							<path
								style={{ fill: "#A79FFF" }}
								d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
								data-name="Left"
							/>
						</svg>
					}
				</button>
				<div
					style={{ scrollSnapType: "x mandatory" }}
					className={`carousel carousel-center h-full lg:w-[900px] md:w-[600px] w-[200px] flex overflow-y-hidden ${
						teamData["All"].length < 3 ? "justify-center" : ""
					} items-center p-4 space-x-[20px] bg-black rounded-box`}
					ref={carouselRef}
				>
					{teamData[selectedTab].map((elem, index) => (
						<div
							className="carousel-item h-2/3 lg:w-[280px] md:w-[280px] w-[200px] py-[160px] "
							style={{ scrollSnapAlign: "start" }}
							key={index}
						>
							<div className="h-full w-full bg-[#110725] rounded-[35px] border-1 border-[#A79FFF] flex flex-col items-center justify-center py-[80px]">
								<div className="h-32 w-32  mb-[20px] relative">
									<img
										className="h-[120px] w-[120px] rounded-full border-2 object-cover border-[#A79FFF]"
										src={elem.image}
									/>
									<img
										className="absolute w-[60px] h-[60px] bottom-[-15px] right-[-15px]"
										src="/linkedin.svg"
										alt=""
									/>
								</div>

								<div className=" text-xl font-semibold  ">{elem.name}</div>
								<div className=" text-lg text-[#8d85da] ">{elem.role}</div>
							</div>
						</div>
					))}
				</div>
				<button
					className="carousel-btn right border-2 rounded-full p-3 border-[#A79FFF]"
					onClick={() => {
						scrollCarousel("right");
						stopAutoSlide();
					}}
				>
					{
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 25 25"
							width="24"
							height="24"
						>
							<path
								style={{ fill: "#A79FFF" }}
								d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
								data-name="Right"
							/>
						</svg>
					}
				</button>
			</div>
		</div>
	);
};

export default Carousel;
