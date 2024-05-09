import Image from "next/image";
import NavBar from "./components/navbar";
import MainPage from "./components/main-page";

export default function Home() {
	return (
		<>
			<div className="flex px-10 flex-col mx-auto w-full items-center justify-center max-w-[1450px] bg-white">
        <div className="flex flex-col w-full">
				<NavBar></NavBar>
				<MainPage></MainPage>
        </div>
			</div>
		</>
	);
}
