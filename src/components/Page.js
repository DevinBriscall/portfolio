import React from "react";

export default function Page({ noPadding = false, children }) {
	return (
		<div className={`${!noPadding && "px-2 sm:px-8"} max-w-[1920px]`}>
			{children}
		</div>
	);
}
