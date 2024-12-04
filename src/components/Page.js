import React from "react";

export default function Page({ noPadding = false, children }) {
	return (
		<div
			className={`w-full flex justify-center ${!noPadding && "px-2 sm:px-8"}`}
		>
			<div className={` max-w-[1920px]`}>{children}</div>
		</div>
	);
}
