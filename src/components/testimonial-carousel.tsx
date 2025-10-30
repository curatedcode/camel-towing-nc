import { StarIcon } from "lucide-react";
import { GoogleLogoIcon } from "~/components/icons/google-logo-icon";
import {
	Carousel,
	CarouselContent,
	CarouselItem as CarouselItemRoot,
	useCarousel,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

const testimonials: {
	author: string;
	authorBg: string;
	body: string;
	reviewHref: string;
}[] = [
	{
		author: "Cindy Teague",
		authorBg: "#c2185b",
		body: "I was very pleased with the service. He got to me quickly. He took care of my car and let me know when he had delivered it to the shop. Excellent service.",
		reviewHref: "https://maps.app.goo.gl/tLGjGGYfsQ6zrNjr8",
	},
	{
		author: "Susan Williams",
		authorBg: "#bf360c",
		body: "Absolutely amazing. Prompt and accommodating. Communication and Kindness above reproach. Appreciate their willingness to move things around so I could make my flight.",
		reviewHref: "https://maps.app.goo.gl/qoY1aA6B4E5RdzEN6",
	},
	{
		author: "Ashley Jeffreys",
		authorBg: "#7b1fa2",
		body: "I had a great experience with Dakota at Camel Towing! He was quick to respond and had my car picked up within an hour. Professional, efficient, and reliable. Definitely recommend him for any towing needs!",
		reviewHref: "https://maps.app.goo.gl/4auYEZ6RWAfyBCbg8",
	},
	{
		author: "Spencer Rice",
		authorBg: "#4d2a15",
		body: "BEST IN TOWN! Dakota got to me in such a hurry and he helped me from the side of the road in the rain. I can't thank him enough for the great service and I would recommend this company for all your towing needs!!",
		reviewHref: "https://maps.app.goo.gl/asQXUrNzv3Xj8oBP8",
	},
	{
		author: "Jeremy Kirk",
		authorBg: "#c2185b",
		body: "Breaking down sucks. Having a reliable tow truck show up quickly at a great price makes it a little bit better. Trust these guys to make your bad day a little bit better. Showed up within 15 minutes of my call and had the best price in town.",
		reviewHref: "https://maps.app.goo.gl/59EJra3ZZ7AbewJZ8",
	},
	{
		author: "Hannah Shackleford",
		authorBg: "#ab47bc",
		body: "I recently had the pleasure of using Camel Towing, and I couldn't be more impressed. Dakota demonstrated utmost professionalism, responding promptly to my tow. I highly recommend Camel Towing for anyone in need of reliable and efficient towing services.",
		reviewHref: "https://maps.app.goo.gl/tqg66TAPtXtohaWC9",
	},
];

export function TestimonialCarousel() {
	return (
		<div className="relative mx-auto max-w-[1920px]">
			<Carousel className="w-full px-px">
				<CarouselContent className="py-1">
					{testimonials.map((d, i) => (
						<CarouselItem key={d.author} index={i} {...d} />
					))}
				</CarouselContent>
			</Carousel>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent transition-opacity duration-300 md:w-24" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent transition-opacity duration-300 md:w-24" />
		</div>
	);
}

function CarouselItem({
	author,
	authorBg,
	body,
	reviewHref,
	index,
}: (typeof testimonials)[number] & {
	index: number;
}) {
	const { selectedIndex } = useCarousel();

	return (
		<CarouselItemRoot
			data-active={selectedIndex === index ? true : undefined}
			className={cn(
				"group basis-[70%] opacity-70 transition-opacity duration-300 md:basis-[400px] md:opacity-100",
				"data-active:opacity-100",
			)}
		>
			<div className="flex flex-col gap-3 rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
				<p className="cursor-default select-none">{body}</p>
				<div className="flex items-center gap-3">
					<div
						className="flex size-8 items-center justify-center rounded-full text-white"
						style={{ backgroundColor: authorBg }}
					>
						<span className="cursor-default select-none">
							{author.charAt(0)}
						</span>
					</div>
					<div className="grid">
						<span className="cursor-default select-none overflow-hidden text-ellipsis whitespace-nowrap text-card-foreground/90">
							{author}
						</span>
						<div className="flex gap-1">
							<StarIcon className="size-4 fill-google-star-gold stroke-0" />
							<StarIcon className="size-4 fill-google-star-gold stroke-0" />
							<StarIcon className="size-4 fill-google-star-gold stroke-0" />
							<StarIcon className="size-4 fill-google-star-gold stroke-0" />
							<StarIcon className="size-4 fill-google-star-gold stroke-0" />
						</div>
					</div>
					<a
						href={reviewHref}
						target="_blank"
						rel="noopener"
						referrerPolicy="no-referrer"
						aria-label="Open review"
						className="ml-auto flex size-10 items-center justify-center"
					>
						<GoogleLogoIcon className="size-6" aria-hidden="true" />
					</a>
				</div>
			</div>
		</CarouselItemRoot>
	);
}
