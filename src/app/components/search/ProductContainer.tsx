import Image, {ImageLoader} from "next/image";
import React from "react";

type ProductContainerProps = {
	title: string;
	imageUrl: string;
};

const imageLoader: ImageLoader = ({src}) => {
	return `/images/products/${src}`;
};

export const ProductContainer: React.FC<ProductContainerProps> = ({title, imageUrl}) => {
	return (
		<div className="w-full text-center rounded">
			<div className="border rounded border-slate-300">
				<Image
					loader={imageLoader}
					src={imageUrl}
					alt="product image"
					layout="fill"
				/>
			</div>
			<p>{title}</p>
		</div>
	);
};

export default ProductContainer;
