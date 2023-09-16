
DESCRIPTION:
/* Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
 Marketing thinks it would be great to welcome visitors to the site in their own language. 
 Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String,
and returns a greeting - if you have it in your database.
It should default to English if the language is not in the database, or in the event of an invalid input.


The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]  */


let dict = new Map();
dict.set("english", "Welcome")
    .set("czech", "Vitejte")
    .set("danish", "Velkomst")
    .set("dutch", "Welkom")
    .set("estonian", "Tere tulemast")
    .set("finnish", "Tervetuloa")
    .set("flemish", "Welgekomen")
    .set("french", "Bienvenue")
    .set("german", "Willkommen")
    .set("irish", "Failte")
    .set("italian", "Benvenuto")
    .set("latvian", "Gaidits")
    .set("lithuanian", "Laukiamas")
    .set("polish", "Witamy")
    .set("spanish", "Bienvenido")
    .set("swedish", "Valkommen")
    .set("welsh", "Croeso");

function greet(language) {
	 
    return dict.get(language) || "Welcome";


}


greet('welsh');
