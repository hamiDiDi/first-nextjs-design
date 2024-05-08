import Image from "next/image";
import NavBar from "./components/navbar";
import MainPage from "./components/main-page";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center bg-white">
        <div className="flex flex-col max-w-7xl min-w-full w-full">
				<NavBar></NavBar>
				<MainPage></MainPage>
        </div>
			</div>
		</>
	);
}
