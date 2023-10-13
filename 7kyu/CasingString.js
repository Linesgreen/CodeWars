function buba(string) {
    return string.split(" ").map(word => word.at(0).toUpperCase()+word.slice(1)).join(" ")
};


console.log(buba("When I Die. Then You Will Realiz'e."));