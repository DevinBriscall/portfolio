import React, { useEffect, useState } from "react";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { useRouter } from "next/router";
//mode 0 for lincoln-gusser styling
//mode 1 for homepage styling

export default function Leaderboard({ mode = 0, userScore }) {
	const [top3, setTop3] = useState([]);
	const [userScoreInTop3, setUserScoreInTop3] = useState(
		userScore && userScore.place <= 3
	);

	const router = useRouter();

	useEffect(() => {
		console.log("user Score", userScore);
		async function getScores() {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/lincoln-guessr-scores?populate=*&sort=score:desc&pagination[pageSize]=3`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();

				setTop3(
					data.data.map((score) => {
						return {
							alias: score.alias,
							score: score.score,
						};
					})
				);
			} catch (error) {
				console.log("Failed to fetch data from Strapi:", error);
			}
		}

		getScores();
	}, []);

	return (
		<>
			<div
				className="leaderboard-container"
				style={{
					backgroundColor: mode === 0 ? "" : "#FFFFFF",
					border: mode === 0 ? "4px solid #92e5f4" : "2px solid black",
				}}
			>
				<div className="grid" style={{ color: mode === 0 ? "white" : "black" }}>
					{top3.length > 0 &&
						top3.map((entry, index) => {
							return (
								<div key={entry + index} className="grid-row">
									<div className={`cell${index + 1}-1 cell`}>
										<FontAwesomeIcon icon={faCrown} />
									</div>
									<div className={`cell${index + 1}-2 cell`}>{entry.alias}</div>
									<div className={`cell${index + 1}-3 cell`}>{entry.score}</div>
								</div>
							);
						})}

					{/* now ... user */}
					{mode === 0 && !userScoreInTop3 && (
						<div className="dot-dot-dot">. . .</div>
					)}
					{mode === 0 && !userScoreInTop3 && (
						<div className="grid-row">
							<div className={`cell5-1 cell`}>{userScore.place}th</div>
							<div className={`cell5-2 cell`}>{userScore.alias}</div>
							<div className={`cell5-3 cell`}>{userScore.score}</div>
						</div>
					)}

					{mode === 1 && (
						<>
							<span className="home-description">
								Can you guess where you are based on a single snapshot?
								Challenge yourself and discover all the beauty that Lincoln has
								to offer!
							</span>
							<div className="play-btn-div">
								<div className="play-btn">
									<Button
										type="green"
										onClick={() => router.push("/lincolnguessr")}
									>
										Play
									</Button>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			<style jsx>{`
				.leaderboard-container {
					width: 100%;
					height: 100%;
					border-radius: 16px;
					box-shadow: -4px 4px 4;
					color: white;
					box-sizing: border-box;
					padding: 20px;
					display: flex;
					justify-content: center;
				}

				.grid {
					display: grid;
					grid-template-rows: 5;
					width: 100%;
					max-width: 600px;
					gap: 4px;
				}

				.grid-row {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
				}

				.cell {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.home-description {
					text-align: center;
					color: black;
				}

				.play-btn-div {
					display: flex;
					justify-content: center;
				}

				.play-btn {
					width: 210px;
					height: 40px;
				}

				.cell1-1 {
					color: gold;
				}

				.cell2-1 {
					color: #d1d1d1;
				}

				.cell3-1 {
					color: #977547;
				}

				.cell1-3,
				.cell2-3,
				.cell3-3,
				.cell5-3 {
					color: #ffce1c;
					font-weight: bold;
				}

				.dot-dot-dot {
					font-weight: bold;
					text-align: center;
					font-size: 1.3rem;
				}
			`}</style>
		</>
	);
}
