import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
	url: string;
	label: string;
	isActive: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({url, label, isActive}) => {
	const defaultStyle = "mr-1";
	const activeStyle = "border-b border-slate-900";

	return (
		<li className={clsx(defaultStyle, isActive && activeStyle)}>
			<Link href={url}>
				<div className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-300 m-2 p-5 rounded-lg">
					{label}
				</div>
			</Link>
		</li>
	);
};
