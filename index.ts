import * as one from './day01/index';

(() => {
	const day = process.argv[2];
	const data = process.argv[3];

	if (day === '1') {
		console.log(`Day ${day} - Part 1`);
		one.test1(data);
		return;
	}

	console.log('Day number is missing.');
})();
