import {PRODUCTS} from "../../data/products";
import {ProductContainer} from "./ProductContainer";

interface Product {
	id: number;
	title: string;
	category: string;
	imgUrl: string;
	price: number;
	color: string;
	description: string;
}

export const ResultsContainer: React.FC = () => {
	return (
		<div className="flex">
			<div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid-cols-3">
				{PRODUCTS.map((product: Product) => {
					return (
						<ProductContainer
							key={product.id}
							title={product.title}
							imageUrl={product.imgUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};
