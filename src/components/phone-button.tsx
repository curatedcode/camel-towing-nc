import type { VariantProps } from "class-variance-authority";
import { Button, type buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function PhoneButton({
	className,
	children,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	return (
		<Button
			asChild
			size="lg"
			className={cn(
				"rounded-full bg-primary px-6 py-3 font-medium text-base text-primary-foreground shadow-lg transition-colors hover:bg-primary/90",
				className,
			)}
			{...props}
		>
			<a href="tel:+13369472786">{children}</a>
		</Button>
	);
}
