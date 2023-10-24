/*
Write a function, which takes a non-negative integer (seconds)
as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

 */
function humanReadable(seconds:number):any {
    let hh : number|string = Math.floor(seconds / 3600);
    let mm : number|string = Math.floor((seconds / 3600 - hh) * 60)
    let ss : number|string = Math.round((((seconds / 3600 - hh) * 60) - mm) * 60)

    hh > 9 ? hh = hh + '': hh = '0' + hh;
    mm > 9 ? mm = mm + '': mm = '0' + mm;
    ss > 9 ? ss = ss + '' : ss = '0' + ss;

    return `${hh}:${mm}:${ss}`
}


console.log(humanReadable(359999));