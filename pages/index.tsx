import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Keyboard from "../components/Keyboard";
import Tiles from "../components/Tiles";

const Home: NextPage = () => {
	const defaultLetters = ["W", "O", "R", "D", "S"];
	const defaultColors = ["#121213", "#121213", "#121213", "#121213", "#121213"];
	const [letters, setLetters] = useState(defaultLetters);
	const [letterColors, setLetterColors] = useState(defaultColors);
	return (
		<>
			<Head>
				<title>Wordle Copilot</title>
			</Head>
			<div className="container">
				<div className="title">Wordle Copilot</div>
				<div className="game">
					<Tiles
						letters={letters}
						letterColors={letterColors}
						setLetterColors={setLetterColors}
					/>
					<Keyboard />
				</div>
			</div>
		</>
	);
};

export default Home;
