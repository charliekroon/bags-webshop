import Image from "next/image";

type ProductContainerProps = {
	name: string;
	imgUrl: string;
};

export const ProductContainer: React.FC<ProductContainerProps> = ({name, imgUrl}) => {
	const imagePath = `/images/products/${imgUrl}`;

	return (
		<div className="w-full text-center rounded">
			<div className="border border-slate-300 rounded">
				<Image src={imagePath} alt={name} fill />
			</div>
			<p>{name}</p>
		</div>
	);
};
