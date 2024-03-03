import {PRODUCTS} from "../../data/products";
import {ProductContainer} from "./ProductContainer";

interface Product {
	id: number;
	title: string;
	imgUrl: string; // Ensure this matches the expected prop in ProductContainer or adjust accordingly.
}

export const ResultsContainer = () => {
	return (
		<div className="flex">
			<div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid-cols-3">
				{PRODUCTS.map((product: Product, index: number) => {
					console.log(product);
					return (
						<ProductContainer
							key={product.id}
							name={product.title}
							imgUrl={product.imgUrl} // Adjust this line if the prop in ProductContainer is different.
						/>
					);
				})}
			</div>
		</div>
	);
};
