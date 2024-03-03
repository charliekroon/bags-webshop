import {SearchBar} from "../app/components/search/SearchBar";
import {ResultsContainer} from "@/app/components/search/ResultsContainer";
const SearchPage: React.FC = () => {
	return (
		<div>
			<h1 className="text-xl p-4 text-center font-montserratRegular">
				Search
			</h1>
			<SearchBar />
			<div className="grid grid-cols-4 h-screen">
				<div className="cols-span-4">
					<ResultsContainer />
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
