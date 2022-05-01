import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Tiles from "../components/Tiles";

const Home: NextPage = () => {
	const [letters, setLetters] = useState(["W", "O", "R", "D", "S"]);
	return (
		<>
			<Head>
				<title>Wordle Copilot</title>
			</Head>
			<div className="container">
				<div className="title">Wordle Copilot</div>
				<Tiles letters={letters} />
			</div>
		</>
	);
};

export default Home;
