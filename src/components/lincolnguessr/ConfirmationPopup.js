import React from "react";
import Button from "./Button";

//buttonsText with what you want the buttons to say [0] is danger text [1] is inverted text,
//message: what the dialog should be
//onConfirm: what happens when the user confirms
//onCancel: what happens when the user cancels action? (probably closes confirmation popup)

export default function ConfirmationPopup({
	buttonsText = ["Quit", "Cancel"],
	message = "Are you sure you want to quit?",
	onConfirm = () => {},
	onCancel = () => {},
}) {
	return (
		<>
			<div
				className="popup-background"
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					onCancel(e);
				}}
			>
				<div className="pop-up" onClick={(e) => e.stopPropagation()}>
					<div className="text">
						<span>{message}</span>
					</div>
					<div className="buttons">
						<Button
							type="danger"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onConfirm(e);
							}}
						>
							{buttonsText[0]}
						</Button>
						<Button
							type="inverted"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onCancel(e);
							}}
						>
							{buttonsText[1]}
						</Button>
					</div>
				</div>
			</div>

			<style jsx>{`
				.popup-background {
					background-color: rgba(0, 0, 0, 0.4);
					width: 100dvw;
					height: 100dvh;
					position: fixed;
					top: 0;
					left: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 99;
				}

				.pop-up {
					width: 300px;
					height: 170px;
					padding: 8px;
					background: white;
					display: grid;
					grid-template-rows: 8fr 4fr;
					box-sizing: border-box;
					border-radius: 8px;
					z-index: 100;
				}
				.buttons {
					display: flex;
					gap: 16px;
					height: 40px;
				}
				.text {
					display: flex;
					color: black;
					justify-content: center;
					font-size: 18px;
					font-weight: bold;
					text-align: center;
					align-items: center;
				}
			`}</style>
		</>
	);
}
