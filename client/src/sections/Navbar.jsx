import React from "react";
import { useState } from "react";
export default function Navbar() {
	const [nav, setNav] = useState(false);
	return (
		<div className="w-full  h-[130px] flex items-center justify-between z-10 absolute top-0 left-0 px-[60px]">
			<img src="/logo.svg" alt="" className="w-[150px] " />
			<div className="  gap-[40px] font-medium hidden md:flex lg:flex">
				<p className="text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer">
					Our Aim
				</p>
				<p className="text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer">
					Team
				</p>
				<p className="text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer">
					What we Do
				</p>
			</div>
			<p className="bg-[#302d50] px-5 py-3 rounded-full hidden lg:block md:block ">
				Contact Us
			</p>
			<p className="bg-[#302d50] px-5 py-3 block rounded-full lg:hidden md:hidden ">
				{nav ? "X" : "|||"}
			</p>
		</div>
	);
}
