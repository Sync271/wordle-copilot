import Pill from "./Pill";

export default function PillContainer({
	suggestions,
}: {
	suggestions: string[];
}) {
	return (
		<div className="pill-container">
			{suggestions.map((suggestion) => {
				return <Pill suggestion={suggestion} />;
			})}
		</div>
	);
}
