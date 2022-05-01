import { useState } from "react";

export default function Tile({
	letterColor,
	letter,
	key,
	onClick,
}: {
	letterColor: string;
	letter: string;
	key: number;
	onClick(): void;
}) {
	return (
		<div
			onClick={() => onClick()}
			className="tile"
			key={key}
			style={{
				backgroundColor: letterColor,
				border: `.1rem solid ${true && "#818384"}`,
			}}>
			{letter}
		</div>
	);
}
