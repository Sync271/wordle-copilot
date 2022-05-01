import Pill from "./Pill";

export default function PillContainer({
	suggestions,
	setLetters,
}: {
	suggestions: string[];
	setLetters: CallableFunction;
}) {
	return (
		<div className="pill-container">
			{suggestions.map((suggestion) => {
				return <Pill setLetters={setLetters} suggestion={suggestion} />;
			})}
		</div>
	);
}
