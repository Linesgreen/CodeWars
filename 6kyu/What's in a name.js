/* What's in a name?
...Or rather, what's a name in? For us, a particular string is where we are looking for a name.

Task
Write a function, taking two strings in parameter,
that tests whether or not the first string contains
 all of the letters of the second string, in order.

The function should return true if that is the case,
and else false. Letter comparison should be case-INsensitive.

Examples
    "Across the rivers", "chris" --> true
      ^      ^  ^^   ^
      c      h  ri   s
                
    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    "Next to a lake", "chris" --> false

    Contains none of the letters in "chris".
--------------------------------------------------------------------
    "Under a sea", "chris" --> false
         ^   ^
         r   s

    Contains only some of the letters in "chris".
-------------------------------------------------------------------- */

function nameInStr(str, name){
name = name.toLowerCase();
str = str.toLowerCase();
let name_new = Array.from(name);

  for (const letter of name_new) {
   
    if (str.indexOf(letter) !== -1) {
        str = str.substring(str.indexOf(letter) + 1 , str.length)
    } 
    else { return false; }
    }
  return true;
}

console.log(nameInStr(' fe i ee  nqeayioe set   r dndomr mwmi lgnjeg jeapa iyyfkyyhtabtyaatmb  hnyhzm',
'Tim'));