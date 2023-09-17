
// Посчитать сколько каждый символ встречается в тексте 
function abc(story) {
    
    let alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0,
        f: 0, g: 0, h: 0, i: 0, j: 0, k: 0,
        l: 0, m: 0, n: 0, o: 0, p: 0, q: 0,
        r: 0, s: 0, t: 0, u: 0, v: 0, w: 0,
        x: 0, y: 0, z:0 }
    story = story.toLowerCase();   
    
    for (let i = 0; i < story.length; i += 1) { 
        switch (story[i]) {
            case 'a' :alphabet.a += 1; 
            break; 
            case 'b' :alphabet.b += 1; 
            break;
            case 'c' :alphabet.c += 1; 
            break;
            case 'd' :alphabet.d += 1; 
            break;
            case 'e' :alphabet.e += 1; 
            break;
            case 'f' :alphabet.f += 1; 
            break;
            case 'g' :alphabet.g += 1; 
            break;
            case 'h' :alphabet.h += 1; 
            break;
            case 'i' :alphabet.i += 1; 
            break;
            case 'j' :alphabet.j += 1; 
            break;
            case 'k' :alphabet.k += 1; 
            break;
            case 'l' :alphabet.l += 1; 
            break;
            case 'm' :alphabet.m += 1; 
            break;
            case 'n' :alphabet.n += 1; 
            break;
            case 'o' :alphabet.o += 1; 
            break;
            case 'p' :alphabet.p += 1; 
            break;
            case 'q' :alphabet.q += 1; 
            break;
            case 'r' :alphabet.r += 1; 
            break;
            case 's' :alphabet.s += 1; 
            break;
            case 't' :alphabet.t += 1; 
            break;
            case 'u' :alphabet.u += 1; 
            break;
            case 'v' :alphabet.v += 1; 
            break;
            case 'w' :alphabet.w += 1; 
            break;
            case 'x' :alphabet.x += 1; 
            break;
            case 'y' :alphabet.y += 1; 
            break;
            case 'z' :alphabet.z += 1; 
            break; 
        } 
    } 
return alphabet;
};

console.log(abc('sator arepo tenet opera rotas'));