import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
	const supabaseUrl = process.env.SUPABASE_URL;
	const supabaseKey = process.env.SUPABASE_SECRET;
	const supabase = createClient(supabaseUrl, supabaseKey);
	if (req.method === "POST") {
		// Save a new score
		const { alias, score } = req.body.data;

		try {
			// Insert the new score into Supabase
			const { data, error } = await supabase
				.from("scores") // Replace with your actual table name
				.insert([{ alias, score }])
				.select();

			if (error) {
				return res
					.status(500)
					.json({ error: "Failed to save score: " + error.message });
			}

			// Retrieve all scores, sorted in descending order
			const { data: allScores, error: fetchError } = await supabase
				.from("scores")
				.select("*")
				.order("score", { ascending: false });

			if (fetchError) {
				return res
					.status(500)
					.json({ error: "Failed to load leaderboard: " + fetchError.message });
			}

			// Find the rank of the newly added score
			const newScoreId = data[0].id;
			const rank = allScores.findIndex((score) => score.id === newScoreId) + 1;

			return res.status(200).json({ leaderboard: allScores, rank });
		} catch (error) {
			return res
				.status(500)
				.json({ error: "Failed to save score: " + error.message });
		}
	} else if (req.method === "GET") {
		// Retrieve the leaderboard
		try {
			// Retrieve all scores from Supabase, sorted in descending order
			const { data, error } = await supabase
				.from("scores")
				.select("*")
				.order("score", { ascending: false });

			if (error) {
				return res
					.status(500)
					.json({ error: "Failed to load leaderboard: " + error.message });
			}

			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json({ error: "Failed to load leaderboard" });
		}
	} else {
		return res.status(405).json({ error: "Method not allowed" });
	}
}
