import ImageGallery from "@/components/imageGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function contoso() {
	return (
		<div className="flex flex-col items-center min-h-screenMinusNavbar">
			<div className="max-w-6xl">
				<div className="relative h-52 md:h-[50vh] w-full">
					<ImageGallery contain imageFolderPath={`/images/contoso`} />
				</div>
				<div className="p-2">
					<h1 className="font-bold">Contoso Data Analysis</h1>
					<p className="mb-16">
						This Power BI dashboard provides an in-depth analysis of sales
						records for Contoso Retail spanning the years 2007, 2008, and 2009.
						The dashboard highlights key metrics such as total revenue, profit
						margins, and year-over-year sales growth. Additionally, it features
						visualizations like trend lines, bar charts, and pie charts to offer
						a clear and intuitive view of the data.
					</p>
				</div>
			</div>
		</div>
	);
}
