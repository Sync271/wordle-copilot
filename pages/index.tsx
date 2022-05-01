import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Keyboard from "../components/Keyboard";
import Tiles from "../components/Tiles";
import { alphabetDict } from "../utils";

const Home: NextPage = () => {
	const [letters, setLetters] = useState([]);
	const [letterColors, setLetterColors] = useState([]);
	const [wordChecked, setWordChecked] = useState(false);
	const [alphabet, setAlphabet] = useState(alphabetDict);
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
						setLetters={setLetters}
						letterColors={letterColors}
						setLetterColors={setLetterColors}
						alphabet={alphabet}
						setAlphabet={setAlphabet}
						wordChecked={wordChecked}
						setWordChecked={setWordChecked}
					/>
					<Keyboard
						letters={letters}
						setLetters={setLetters}
						wordChecked={wordChecked}
						setWordChecked={setWordChecked}
						alphabet={alphabet}
						setAlphabet={setAlphabet}
						setLetterColors={setLetterColors}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
