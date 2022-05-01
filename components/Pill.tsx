function Pill({
	suggestion,
	setLetters,
}: {
	suggestion: string;
	setLetters: CallableFunction;
}) {
	return (
		<div className="pill" onClick={() => setLetters([...suggestion.split("")])}>
			{suggestion}
		</div>
	);
}

export default Pill;
