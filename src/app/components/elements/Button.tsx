import clsx from "clsx";
import React, {ReactNode, MouseEventHandler} from "react";

type ButtonVariant = "primary" | "secondary" | "dark";

interface ButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
	variant?: ButtonVariant;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = "primary",
	className,
}) => {
	const defaultStyle = "h-10 px-5 rounded-lg";

	const buttonStyle = {
		primary: "text-white bg-slate-800 hover:bg-slate-900",
		secondary: "text-black bg-white hover:bg-slate-50",
		dark: "text-white bg-black hover:bg-gray-700 rounded-none",
	};

	return (
		<button
			onClick={onClick}
			className={clsx(defaultStyle, buttonStyle[variant], className)}>
			{children}
		</button>
	);
};
