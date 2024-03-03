import React from "react";
import SearchIcon from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg";
import UserIcon from "../../assets/icons/user.svg";
import {NavButton} from "./NavButton";
import {NavLink} from "./NavLink";

export const Header: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-32">
			<nav className="flex justify-around bg-white/88 backdrop-blur-md shadow-md w-full fixed top-0 left-0 z-10">
				<div className="flex h-100 items-center space-x-8 lg:flex">
					<ul className="flex flex-row">
						<NavLink
							url="/new-arrivals"
							label="New Arrivals"
						/>
						<NavLink
							url="/designers"
							label="Designers"
						/>
						<NavLink url="/bags" label="Bags" />
						<NavLink url="/sale" label="Sale" />
					</ul>
				</div>
				<div className="flex items-center">LOGO</div>
				<div className="flex items-center space-x-5">
					<NavButton url="/search">
						<SearchIcon />
					</NavButton>
					<NavButton url="/user">
						<UserIcon />
					</NavButton>
					<NavButton url="/cart">
						<CartIcon />
					</NavButton>
				</div>
			</nav>
		</div>
	);
};
