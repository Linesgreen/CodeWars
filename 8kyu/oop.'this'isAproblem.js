/*We already implemented that function, 
but when we actually run the code, 
the "name" property is accessible, 
but the "firstName" and "lastName" 
is not accessible. All the properties 
should be accessible. Can you find 
what's wrong with it? 
A test fixture is also available */

//          function NameMe(first, last) {
//          this.firstName = first;
//          this.lastName = last;
//          return {name: this.firstName + ' ' + this.lastName};
//               }


class NameMe {
    constructor(first,last) {
        this.firstName = first;
        this.lastName = last;
    }
    get name() {
        return this.firstName + ' ' + this.lastName
    }
}
///////////////// или же в старой записи ///////////////
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
    return this;
  }
///////////////////////////////////////////////////////
var n = new NameMe('John', 'Doe');
console.log(n.firstName) //Expected: John
console.log(n.lastName) //Expected: Doe
console.log(n.name) //Expected: John Doe