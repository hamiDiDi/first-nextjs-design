import Image from "next/image"; // Import the Image component from Next.js

function NavBar() {
	return (
		<>
			<div className="flex fixed top-0 bg-[#fff] w-full max-h-14 text-[#333] justify-between self-center items-center px-4 py-2 max-w-7xl">
				<div className="flex  justify-between max-w-7xl w-full">
					<div className="flex gap-4 items-center">
						<div className="flex items-center">
							<Image
								src="/images/Kobodrop.png"
								alt="Kobo"
								width={29.04}
								height={24}
							/>
							<div className="ml-2 text-[#023047] font-bold text-base leading-6">
								Kobodrop
							</div>
						</div>
						<div className="text-[#667085] ">learn</div>
						<div className="flex items-center gap-[4px] text-[#667085]  ">
							<div>resources</div>
							<Image
								src="/images/dropdown.png"
								alt="Dropdown"
								width={20}
								height={20}
							/>
						</div>
						<div className="text-[#667085] ">FAQs</div>
					</div>
					<div className=" bg-[#023047] rounded-xl px-3 py-2 ">
						<p className=" text-base text-white">Install Kobodrop</p>
					</div>
				</div>
			</div>
		</>
	);
}
export default NavBar;
