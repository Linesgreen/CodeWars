export const pigIt = (a : string) : string => a
                                                .split(/\b/)
                                                .map((word: string) : string => (/^\w*$/).test(word) ? (word + word[0]+ 'ay').slice(1) : word)
                                                .join("");

console.log( pigIt('Pig latin is cool'));
