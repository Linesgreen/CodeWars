/*
Write a function that takes a string of braces,
and determines if the order of the braces is valid.
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata,
but introduces new characters: brackets [], and curly braces {}.
Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses,
brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

 */
function validBraces(braces : string) {
    const mapBraces = new Map([
        ['(', ')'] as const,
        ['[', ']'] as const,
        ['{', '}'] as const
    ]);

    const filterArray:string[] = []
    const arrayFromBraces = braces.split("")
    let count = 0
    try {
        arrayFromBraces.forEach(braces => {
        const key = mapBraces.get(braces as "(" | "[" | "{")
            if (key) {
                filterArray.push(key);
            } else {
                count++;
                if (braces !== filterArray.pop()) {
                    throw new Error('false');
                }
            }
        });
    }
    catch (e) {
        return false;
    }
    return count !== 0;
}

console.log(validBraces("(((({{"))

