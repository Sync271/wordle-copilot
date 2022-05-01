import { wordleAcceptedWords, wordleAnswers } from "../utils";
function Keyboard({
	letters,
	setLetters,
	wordChecked,
	setWordChecked,
	alphabet,
	setAlphabet,
	setLetterColors,
}: {
	letters: string[];
	setLetters: CallableFunction;
	wordChecked: boolean;
	setWordChecked: CallableFunction;
	alphabet: object;
	setAlphabet: CallableFunction;
	setLetterColors: CallableFunction;
}) {
	const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
	const checkWord = () => {
		let actualWord = letters.join("").toLowerCase();
		if (
			wordleAnswers.includes(actualWord) ||
			wordleAcceptedWords.includes(actualWord)
		) {
			setWordChecked(true);
			setLetterColors(["#3a3a3c", "#3a3a3c", "#3a3a3c", "#3a3a3c", "#3a3a3c"]);
			let newAlphabet = {};
			letters.forEach((letter) => {
				// @ts-ignore
				newAlphabet[letter] = "#3a3a3c";
			});
			setAlphabet({ ...alphabet, ...newAlphabet });
		} else {
			console.log(false);
		}
	};
	return (
		<div>
			<div className="row">
				{row1.map((key) => {
					return (
						<div
							className="key"
							onClick={() => {
								if (letters.includes(key) && wordChecked) return;
								if (letters.length < 5) {
									setLetters([...letters, key]);
								}
								if (wordChecked) {
									setAlphabet({
										...alphabet,
										// @ts-ignore
										[key]: alphabet[key] === "#3a3a3c" ? "#818384" : "#3a3a3c",
									});
								}
							}}
							style={{
								// @ts-ignore
								backgroundColor: alphabet[key],
							}}>
							{key}
						</div>
					);
				})}
			</div>
			<div className="row">
				{row2.map((key) => {
					return (
						<div
							className="key"
							onClick={() => {
								if (letters.includes(key) && wordChecked) return;
								if (letters.length < 5) {
									setLetters([...letters, key]);
								}
								if (wordChecked) {
									setAlphabet({
										...alphabet,
										// @ts-ignore
										[key]: alphabet[key] === "#3a3a3c" ? "#818384" : "#3a3a3c",
									});
								}
							}}
							style={{
								// @ts-ignore
								backgroundColor: alphabet[key],
							}}>
							{key}
						</div>
					);
				})}
			</div>
			<div className="row">
				<div className="special-key" onClick={checkWord}>
					Enter
				</div>
				{row3.map((key) => {
					return (
						<div
							className="key"
							onClick={() => {
								if (letters.includes(key) && wordChecked) return;
								if (letters.length < 5) {
									setLetters([...letters, key]);
								}
								if (wordChecked) {
									setAlphabet({
										...alphabet,
										// @ts-ignore
										[key]: alphabet[key] === "#3a3a3c" ? "#818384" : "#3a3a3c",
									});
								}
							}}
							style={{
								// @ts-ignore
								backgroundColor: alphabet[key],
							}}>
							{key}
						</div>
					);
				})}
				<div
					className="special-key"
					onClick={() => {
						setLetters([...letters.slice(0, -1)]);
						setLetterColors([]);
						setWordChecked(false);
					}}>
					Del
				</div>
			</div>
		</div>
	);
}

export default Keyboard;
