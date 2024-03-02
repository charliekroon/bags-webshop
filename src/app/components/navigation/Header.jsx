import SearchIcon from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg";
import UserIcon from "../../assets/icons/user.svg";

export const Header = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-32">
			<nav className="flex justify-around bg-white/88 backdrop-blur-md shadow-md w-full fixed top-0 left-0 z-10">
				<div className="flex h-100 items-center space-x-8 lg:flex">
					<ul className="flex flex-column">
						<li>Louis Vuitton</li>
						<li>Gucci</li>
					</ul>
				</div>
				<div className="flex items-center">LOGO</div>
				<div className="flex items-center space-x-5">
					<SearchIcon />
					<UserIcon />
					<CartIcon />
				</div>
			</nav>
		</div>
	);
};
