import {SearchBar} from "../app/components/search/SearchBar";

const search: React.FC = () => {
	return (
		<div>
			<h1 className="text-xl p-4 text-center font-montserratRegular">
				Search page
			</h1>
			<SearchBar />
		</div>
	);
};

export default search;
