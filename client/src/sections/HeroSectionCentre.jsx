import React from "react";

export default function HeroSectionCentre() {
	return (
		<div className="flex flex-col  items-center  relative">
			<p className="text-[30px] lg:text-[50px] font-light text-[#a9a9a9]">
				Exploit the power of
			</p>
			<p className="text-[40px] lg:text-[60px] font-medium text-center">
				Purposeful Connections
			</p>
			<p className="bg-[#a79fff] px-6 py-3 font-medium text-[20px] text-black rounded-full mt-[30px]">
				Join the waitlist -{">"}
			</p>
			<p className="mt-[20px]">
				🎉 <span className="text-yellow-500"> BETA</span> version Dropping Soon
			</p>
			<img
				className="absolute z-[-5] w-[300px] top-[-100px] lg:w-auto left-[-80px] md:w-auto lg:top-[-100px] lg:left-[-100px]"
				src="/center1.svg"
				alt=""
			/>
			<img
				className="absolute z-[-5] w-[200px] bottom-[-140px] right-[-60px] lg:w-auto lg:top-[30px] lg:right-[-120px] md:w-auto md:top-[30px] md:right-[-120px]"
				src="/center2.svg"
				alt=""
			/>
		</div>
	);
}
