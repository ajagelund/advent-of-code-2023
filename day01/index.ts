import fs from 'node:fs';

const test1 = (filename: string) => {
	let content: string[] = [];
	//read file with fs
	fs.readFile(`./day01/files/${filename}.txt`, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		content = data.split('\n');

		if (!content) {
			return 0;
		}

		const regex = /[0-9]/g;
		let numbers: string[] = content.map((line) =>
			[...line.matchAll(regex)]
				.map((match) => match[0]))
			.map(arr =>  `${arr[0]}${arr[arr.length - 1]}`);

		const result = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
		console.log(`Result >> ${result}`);
	});
};

export {
	test1,
};
