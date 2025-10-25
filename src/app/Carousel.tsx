"use client";
import Image from "next/image";


const images = [
	"/asset/carousel1.jpeg",
	"/asset/carousel2.jpeg",
	"/asset/carousel3.jpeg",
	"/asset/carousel4.jpeg",
];


export default function Carousel() {
		return (
			<div className="overflow-hidden w-full flex justify-start relative">
				{/* Left shadow */}
				<div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)'}} />
				{/* Right shadow */}
				<div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)'}} />
				<div
					className="flex flex-row gap-8 w-max carousel-track"
					style={{ alignItems: "flex-start" }}
				>
					{[...images, ...images].map((src, i) => (
						<div
							key={i}
							className="relative rounded-2xl overflow-hidden border border-[#232526] bg-[#181818]"
							style={{ width: 320, height: 320, minWidth: 320, minHeight: 320 }}
						>
							<Image
								src={src}
								alt={`carousel image ${i + 1}`}
								fill
								style={{ objectFit: "cover" }}
								priority={i < 4}
							/>
						</div>
					))}
				</div>
				<style>{`
					.carousel-track {
						animation: scroll-carousel 24s linear infinite;
					}
					@keyframes scroll-carousel {
						0% { transform: translateX(0); }
						100% { transform: translateX(-50%); }
					}
					div[ref]::-webkit-scrollbar { display: none; }
				`}</style>
			</div>
		);
}
