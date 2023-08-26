interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export function Container({ children, className }: ContainerProps) {
	return (
		<div
			className={`w-[100vw] max-w-[280px] md:max-w-[704px] xl:max-w-[1232px]
			 my-0 mx-auto ${className}`}
		>
			{children}
		</div>
	);
}
