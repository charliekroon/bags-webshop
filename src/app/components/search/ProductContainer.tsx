import Image from "next/image";
import React from "react";

type ProductContainerProps = {
	title: string;
	imageUrl: string;
};

const imageLoader = ({src}) => {
	return `/images/products/${src}`;
};

export const ProductContainer: React.FC<ProductContainerProps> = ({title, imageUrl}) => {
	const width = 500;
	const height = 300;

	return (
		<div className="w-full text-center rounded">
			<div className="border rounded border-slate-300">
				<Image
					loader={imageLoader}
					src={imageUrl}
					alt="product image"
					width={width}
					height={height}
					unoptimized={true}
				/>
			</div>
			<p>{title}</p>
		</div>
	);
};

export default ProductContainer;
