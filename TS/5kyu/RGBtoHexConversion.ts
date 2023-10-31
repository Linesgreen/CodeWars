/*
The rgb function is incomplete.
Complete it so that passing in RGB decimal values will result in
a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255.
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
  255, 255, 255 --> "FFFFFF"
  255, 255, 300 --> "FFFFFF"
  0, 0, 0       --> "000000"
  148, 0, 211   --> "9400D3"

*/
function rgb(r: number, g: number, b: number): string {
   const closedValidNumber = function (number : number) : number {
       if (number < 0) {
          return  0
       } else if (number > 255) {
          return  255
       } else return number
    }

   const rHex:string = (closedValidNumber(r).toString(16)).padStart(2,'0');
   const gHex:string = (closedValidNumber(g).toString(16)).padStart(2,'0');
   const bHex:string = (closedValidNumber(b).toString(16)).padStart(2,'0');
   return `${rHex}${gHex}${bHex}`.toUpperCase()
}

console.log(rgb(173, 255, 47))
