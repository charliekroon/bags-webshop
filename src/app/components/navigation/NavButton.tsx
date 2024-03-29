import Link from "next/link";
import React from "react";

interface NavButtonProps {
	url: string;
	children: React.ReactNode;
}

export const NavButton: React.FC<NavButtonProps> = ({url, children}) => {
	return (
		<Link href={url}>
			<div className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-300 m-1 p-5 rounded-lg">
				{children}
			</div>
		</Link>
	);
};
