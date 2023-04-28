import clsx from "clsx";
import { ReactNode } from "react";

export const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={clsx(className)}>
			<div>{children}</div>
		</div>
	);
};
