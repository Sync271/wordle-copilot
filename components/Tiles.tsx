import Tile from "./Tile";

function Tiles({
	letters,
	letterColors,
	setLetterColors,
}: {
	letters: string[];
	letterColors: string[];
	setLetterColors: CallableFunction;
}) {
	const onTileClick = (index: number) => {
		// if (!wordChecked) return;
		let colorArray = [...letterColors];
		if (letterColors[index] === "#3a3a3c") {
			colorArray[index] = "#538d4e";
			setLetterColors(colorArray);
		} else if (letterColors[index] === "#538d4e") {
			colorArray[index] = "#b59f3b";
			setLetterColors(colorArray);
		} else if (letterColors[index] === "#b59f3b") {
			colorArray[index] = "#3a3a3c";
			setLetterColors(colorArray);
		}
	};
	return (
		<div className="row">
			{letters.map((letter, index) => {
				return (
					<Tile
						letter={letter}
						letterColor={letterColors[index]}
						key={index}
						onClick={() => onTileClick(index)}
					/>
				);
			})}
		</div>
	);
}

export default Tiles;
