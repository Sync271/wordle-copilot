export default function PillContainer({
	suggestions,
	setLetters,
	setLetterColors,
	setWordChecked,
}: {
	suggestions: string[];
	setLetters: CallableFunction;
	setLetterColors: CallableFunction;
	setWordChecked: CallableFunction;
}) {
	function Pill({ suggestion }: { suggestion: string }) {
		return (
			<div
				className="pill"
				onClick={() => {
					setLetterColors([]);
					setWordChecked(false);
					setLetters([...suggestion.toUpperCase().split("")]);
				}}>
				{suggestion}
			</div>
		);
	}
	return (
		<div className="pill-container">
			{suggestions.map((suggestion) => {
				return <Pill suggestion={suggestion} />;
			})}
		</div>
	);
}
