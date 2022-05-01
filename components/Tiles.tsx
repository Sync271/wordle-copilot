import Tile from "./Tile";
import { RefreshCw } from "react-feather";
import { alphabetDict } from "../utils";

function Tiles({
	letters,
	setLetters,
	letterColors,
	setLetterColors,
	alphabet,
	setAlphabet,
	wordChecked,
	setWordChecked,
}: {
	letters: string[];
	setLetters: CallableFunction;
	letterColors: string[];
	setLetterColors: CallableFunction;
	alphabet: object;
	setAlphabet: CallableFunction;
	wordChecked: boolean;
	setWordChecked: CallableFunction;
}) {
	const onTileClick = (index: number) => {
		if (!wordChecked) return;
		let colorArray = [...letterColors];
		if (letterColors[index] === "#3a3a3c") {
			colorArray[index] = "#538d4e";
			setLetterColors(colorArray);
			setAlphabet({
				...alphabet,
				[letters[index]]: "#538d4e",
			});
		} else if (letterColors[index] === "#538d4e") {
			colorArray[index] = "#b59f3b";
			setLetterColors(colorArray);
			setAlphabet({
				...alphabet,
				[letters[index]]: "#b59f3b",
			});
		} else if (letterColors[index] === "#b59f3b") {
			colorArray[index] = "#3a3a3c";
			setLetterColors(colorArray);
			setAlphabet({
				...alphabet,
				[letters[index]]: "#3a3a3c",
			});
		}
		// @ts-ignore
		if (alphabet[letters[index]] === "#818384") {
			setAlphabet({
				...alphabet,
				[letters[index]]: "#3a3a3c",
			});
		}
	};

	const tiles = () => {
		let tilesArr = [];
		for (let i = 0; i < 5; i++) {
			tilesArr.push(
				<Tile
					letter={letters[i] || ""}
					letterColor={letterColors[i]}
					key={i}
					onClick={() => onTileClick(i)}
				/>
			);
		}
		return tilesArr;
	};
	return (
		<div className="row">
			{tiles()}
			<RefreshCw
				className="reset"
				onClick={() => {
					setLetters([]);
					setLetterColors([]);
					setWordChecked(false);
					setAlphabet(alphabetDict);
				}}
				color="white"
			/>
		</div>
	);
}

export default Tiles;
