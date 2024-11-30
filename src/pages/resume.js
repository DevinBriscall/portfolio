import React from "react";

export default function resume() {
	return (
		<>
			<div className="h-screenMinusNavbar">
				<p className="text-center">
					If my resume does not load automatically,{" "}
					<a
						href="/docs/resume.pdf"
						target="_blank"
						className="text-blue-500 underline"
					>
						click here
					</a>{" "}
					to view it.
				</p>
				<div className="pdf-viewer h-full">
					<iframe src="/docs/resume.pdf" className="h-full w-full" />
				</div>
			</div>
		</>
	);
}
