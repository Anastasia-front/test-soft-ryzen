interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
	return (
		<div
			className={`w-[100vw] max-w-[280px] s:max-w-[80vw] sm:max-w-[450px] md:max-w-[704px] xl:max-w-[1232px]
			 h-full my-0 mx-auto ${className}`}
		>
			{children}
		</div>
	);
}
