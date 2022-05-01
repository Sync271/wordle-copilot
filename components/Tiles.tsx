function Tiles({ letters }: { letters: string[] }) {
	function Tile({
		letterColor,
		letter,
	}: {
		letterColor?: string;
		letter: string;
	}) {
		return (
			<div
				className="tile"
				style={{
					backgroundColor: letterColor,
					border: `2rem solid ${letterColor || "#3a3a3c"}`,
				}}>
				{letter}
			</div>
		);
	}
	return (
		<div className="row">
			{letters.map((letter) => {
				return <Tile letter={letter} />;
			})}
		</div>
	);
}

export default Tiles;
