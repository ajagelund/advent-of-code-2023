//only 12 red cubes, 13 green cubes, and 14 blue cubes?
const maxRed: number = 12;
const maxGreen: number = 13;
const maxBlue: number = 14;

const redRegex = /[0-9]+ red/g;
const greenRegex = /[0-9]+ green/g;
const blueRegex = /[0-9]+ blue/g;

const findMatches = (str: string, regex: RegExp) => {
    const matches: string[] = [];
    let match;
    while (match = regex.exec(str)) {
        matches.push(match[0]);
        regex.lastIndex = match.index + 1;
    }
    return matches;
}

const validSet = (sets: string) => {
    const reds = findMatches(sets, redRegex).map((match) => parseInt(match.split(' ')[0]));
    if (reds.filter((red) => red > maxRed).length > 0) {
        return false;
    }

    const greens = findMatches(sets, greenRegex).map((match) => parseInt(match.split(' ')[0]));
    if (greens.filter((green) => green > maxGreen).length > 0) {
        return false;
    }

    const blues = findMatches(sets, blueRegex).map((match) => parseInt(match.split(' ')[0]));
    if (blues.filter((blue) => blue > maxBlue).length > 0) {
        return false;
    }

    return true;
}
const part1 = (data) => {
    const numbers = data.map((line) => {
        const game = line.split(':');
        // const sets = game[1].split(';');



        return validSet(game[1]) ? parseInt(game[0].split(' ')[1]) : 0;
    });
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`Result >> ${result}`);
}

export {
    part1,
}
