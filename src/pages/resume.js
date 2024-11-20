import React from "react";

export default function resume() {
	return (
		<>
			<div className="h-screenMinusNavbar">
				<div className="pdf-viewer h-screenMinusNavbar">
					<iframe src="/docs/resume.pdf" className="h-full w-full" />
				</div>
			</div>
		</>
	);
}
