import { alphabetDict } from "../utils";
function Keyboard() {
	const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
	return (
		<div>
			<div className="row">
				{row1.map((key) => {
					return (
						<div
							className="key"
							// disabled={word.includes(key) && wordChecked}
							// @ts-ignore
							style={{ backgroundColor: alphabetDict[key] }}>
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
							// disabled={word.includes(key) && wordChecked}
							// @ts-ignore
							style={{ backgroundColor: alphabetDict[key] }}>
							{key}
						</div>
					);
				})}
			</div>
			<div className="row">
				<div className="special-key">Enter</div>
				{row3.map((key) => {
					return (
						<div
							className="key"
							// disabled={word.includes(key) && wordChecked}
							// @ts-ignore
							style={{ backgroundColor: alphabetDict[key] }}>
							{key}
						</div>
					);
				})}
				<div className="special-key">Del</div>
			</div>
		</div>
	);
}

export default Keyboard;
