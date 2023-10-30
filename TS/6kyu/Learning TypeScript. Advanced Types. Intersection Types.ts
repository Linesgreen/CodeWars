function intersect<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    for (let key in first) {
        if(second.hasOwnProperty(key)) {
            (<any>result)[key] = (<any>first)[key];
        }
    }

    return result;
}