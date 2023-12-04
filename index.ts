import fs from 'node:fs/promises';
import * as one from './day1/index';
import * as two from './day2/index';

const loadFile = async (day: string, part: string, filename: string): Promise<string[]> => {
	const content = await fs.readFile(`./day${day}/files/${filename}.txt`);
	return content.toString().split('\n')
};

(async () => {
	const day = process.argv[2];
	const part = process.argv[3];
	const filename = process.argv[4];

	const data = await loadFile(day, part, filename);

	if (day === '1') {
		if (part === '1') {
			console.log(`Day ${day} - Part 1`);
			one.part1(data);
		}
		if (part === '2') {
			console.log(`Day ${day} - Part 2`);
			one.part2(data);
		}
		return;
	}

	if (day === '2') {
		if (part === '1') {
			console.log(`Day ${day} - Part 1`);
			two.part1(data);
		}
		return;
	}

	console.log('Day number is missing.');
})();
