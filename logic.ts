import { wordleAnswers } from "./utils";

export default function getListOfWords(
	letters: string[],
	letterColors: string[],
	alphaDict: object
) {
	let words = [...wordleAnswers];
	for (let i = 0; i < 5; i++) {
		if (letterColors[i] === "#538d4e") {
			words = words.filter((a) => letters[i].toLowerCase() === a.split("")[i]);
		} else if (letterColors[i] === "#b59f3b") {
			words = words.filter(
				(a) =>
					a.split("").includes(letters[i].toLowerCase()) &&
					a.split("")[i] != letters[i].toLowerCase()
			);
		}
	}
	let notUsedLetters = Object.keys(alphaDict).filter(
		// @ts-ignore
		(key) => alphaDict[key] === "#3a3a3c"
	);

	if (notUsedLetters.length) {
		words.forEach((a) => {
			notUsedLetters.forEach((b) => {
				if (a.split("").includes(b.toLowerCase())) {
					words = words.filter((c) => a != c);
				}
			});
		});
	}
	return words.slice(0, 10);
}
