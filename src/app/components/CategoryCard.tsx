import Image from "next/image";
import {Button} from "./elements/Button";

interface CategoryCardProps {
	name: string;
	imageUrl: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({name, imageUrl}) => {
	return (
		<div className="relative w-full h-80">
			<Image
				src={imageUrl}
				layout="fill"
				objectFit="cover"
				alt={name}
				style={{marginLeft: "auto", marginRight: "auto"}}
			/>
			<Button
				variant="secondary"
				className="absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 bottom-[10%]">
				{name}
			</Button>
		</div>
	);
};
