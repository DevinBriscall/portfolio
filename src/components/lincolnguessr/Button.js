import React, { useState } from "react";

/*type: primary (white text blue back)
        inverted (blue text, white back)
        danger (white text, red back)
        green (white text, green back)
onClick => pass a function for something to actually happen when button clicked
*/

export default function Button({
	children,
	type = "primary",
	onClick = () => {},
	disabled,
}) {
	return (
		<>
			<div
				className={`button ${type} ` + `${disabled && " disabled"}`}
				onClick={!disabled ? onClick : () => {}}
				disabled={disabled}
			>
				{children}
			</div>
			<style jsx>{`
				.button {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-weight: bold;
					border-radius: 10px;
					box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
				}

				.button:hover {
					cursor: pointer;
					filter: brightness(0.9);
				}

				.primary {
					background-color: var(--secondary);
					color: white;
				}

				.inverted {
					background-color: white;
					color: black;
					border: 1px solid black;
				}

				.green {
					background-color: var(--color-secondary);
					color: white;
				}

				.danger {
					background-color: #ff3c3c;
					color: white;
				}

				.disabled {
					background-color: grey;
				}

				.disabled:hover {
					filter: brightness(1);
					cursor: default;
				}
			`}</style>
		</>
	);
}
