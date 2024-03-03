import Image from "next/image";
import LV from "../../../public/images/LV.jpg";
import {Button} from "./elements/Button.jsx";

export const Banner = () => {
	return (
		<div className="flex">
			<div className="banner__image-container flex items-center w-full sm:1-1/2 pl-12">
				<Image alt="banner image" src={LV} />
			</div>
			<div className="banner__description-container w-full sm:1-1/2">
				<div className="flex flex-col w-2/3">
					<h1 className="text-xl pb-3">Designer Bags</h1>
					<p className="pb-3">from Charlie</p>
					<Button>Shop Now</Button>
				</div>
			</div>
		</div>
	);
};
