const part1 = (data: string[]) => {
	const regex = /[0-9]/g;
	const numbers: string[] = data.map((line) =>
		[...line.matchAll(regex)]
			.map((match) => match[0]))
		.map(arr =>  `${arr[0]}${arr[arr.length - 1]}`);

	const result = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
	console.log(`Result >> ${result}`);
};

const findMatches = (str: string, regex: RegExp) => {
	const matches: string[] = [];
	let match;
	while (match = regex.exec(str)) {
		matches.push(match[0]);
		regex.lastIndex = match.index + 1;
	}
	return matches;

}
const part2 = (data: string[]) => {
	const numberStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const digitRegex = /[0-9]/g;
	const regex = /[0-9]|one|two|three|four|five|six|seven|eight|nine/g;

	const numbers = data
		.map(d => findMatches(d, regex))
		.map(arr => {
			const first = arr[0].match(digitRegex)
				? arr[0]
				: numberStrings.indexOf(arr[0]).toString();
			const last = arr[arr.length - 1].match(digitRegex)
				? arr[arr.length - 1]
				: numberStrings.indexOf(arr[arr.length - 1]).toString();
			return `${first}${last}`
		});

	const result = numbers
		.reduce((acc, curr) => acc + parseInt(curr), 0);

	console.log(`Result >> ${result}`);
}

export {
	part1,
	part2,
};
