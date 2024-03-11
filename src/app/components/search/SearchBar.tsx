import Search from "../../assets/icons/search.svg";
import {useState} from "react";

export const SearchBar: React.FC = () => {
	const [search, setSearch] = useState("");

	return (
		<div className="flex justify-center">
			<input
				type="text"
				placeholder="Search"
				className="bg-slate-300 p2 rounded-md"
				value={search}
				readOnly
			/>
			<button className="transparent border-2 border-black w-10 h-10 mx-4 flex items-center justify-center">
				<Search />
			</button>
		</div>
	);
};
