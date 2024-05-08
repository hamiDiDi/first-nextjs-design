import Image from "next/image";
function MainPage() {
	return (
		<>
			<div className="flex h-screen bg-[#fff] text-[#101828] w-full justify-center">
				<div className="flex flex-col  pt-14 gap-12">
					<div className="text-6xl leading-72 font-semibold">
						Start spending the <br /> smart way
					</div>
					<div className="text-[#667085]">
						Take Control of Your Finances Anytime, Anywhere <br />
						with Kobodrop. Discover the Smart Way to Use <br />
						Your Money
					</div>
					<div className="flex gap-[12px]">
						<Image
							src="/images/appstore.png"
							alt="appstore"
							width={56}
							height={24}
						/>
						<Image
							src="/images/googleplay.png"
							alt="googleplay"
							width={56}
							height={24}
						/>
					</div>
				</div>
				<div className="flex relative h-100 max-h-[612px] pt-14">
					<Image
						className="absolute"
						src="/images/iPhone.png"
						alt="iPhone"
						width={320}
						height={652}
					/>
					<Image className="h-100" src="/images/girl.png" alt="girl" width={650} height={612} />
				</div>
			</div>
		</>
	);
}
export default MainPage;
