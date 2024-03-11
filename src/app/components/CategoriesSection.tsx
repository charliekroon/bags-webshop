import {CategoryCard} from "./CategoryCard";
import Image from "next/legacy/image";

export const CategoriesSection: React.FC = () => {
	const categories = [
		{
			name: "Gucci",
			url: "/images/categories/gucci-bag.jpeg",
		},
		{
			name: "Louis Vuitton",
			url: "/images/categories/lv-bag.jpeg",
		},
		{
			name: "Chanel",
			url: "/images/categories/chanel-bag.jpeg",
		},
		{
			name: "Celine",
			url: "/images/categories/celine-bag.jpeg",
		},
	];

	return (
		<div>
			<h2 className="text-center text-xl mt-6 mb-3 p-2">
				Browse By Category
			</h2>
			<div className="grid grid-cols-4 gap-4">
				{categories.map((category, index) => {
					return (
						<CategoryCard
							name={category.name}
							imageUrl={category.url}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
