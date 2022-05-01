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
	function Pill({ suggestion, key }: { suggestion: string; key: string }) {
		return (
			<div
				className="pill"
				key={key}
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
		<div className="pill-container" key="pill-container">
			{suggestions.map((suggestion) => {
				return <Pill key={suggestion} suggestion={suggestion} />;
			})}
		</div>
	);
}
