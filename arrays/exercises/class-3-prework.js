let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);
console.log(phrase, "has", phrase.length, "characters");
console.log(phrase.toLowerCase());

let word = 'Rutabaga';
console.log(word.length);

const cityName = "Vienna";
const stateName = "Virginia";
const location = cityName + ", " +  stateName;

console.log(location.length);
console.log(location.replace("i", "I"));

word = "JavaScript";
console.log(word.slice(4).toUpperCase());

//let language = "JavaScript";
//language.replace('J', 'Q');
//language.slice(0,5);
//console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

console.log('Launch\nCode');

let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);

let pluralNoun = "dogs";
let name = "Johna";
let verb = "run";
let adjective = "shiny";
let color = "yellow";
let madLib = `JavaScript provides a ${color} collection of tools - including ${adjective} syntax and ${pluralNoun} - that allows ${name} to ${verb} with strings.`;

console.log(madLib);

let num = 1001;
console.log(typeof (num));
console.log(String(num));
console.log(String(num).length);
console.log(String(num).length-1);
num = 12345;
if (String(num).includes(".")){
    console.log(String(num).length-1)
} else {
    console.log(String(num).length);
}


let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
//console.log(dna.trim(0,52));
//let newDNA = dna.trim();
//console.log(newDNA);
//let newDNA2 = dna.toUpperCase();
//console.log(newDNA2);
//dna = newDNA.toUpperCase();
//console.log(dna);
dna = dna.trim().toUpperCase();
console.log(dna);
dna = dna.replace("GCT","AGG");
console.log(dna);

if (dna.indexOf("CAT")) {
    console.log("CAT found");
} else {
    console.log("CAT not found");
}

/*dna = dna.slice(16,19);
console.log(dna);*/

let templateLiteral = `The DNA strand is ${dna.length} characters long.`
console.log(templateLiteral);
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf("CAT"),dna.indexOf("CAT")+3).toLowerCase()}`);


//console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);

let language = " JavaScript ";
console.log(language.slice(0,1) + language.slice(4,5));
let firstInitial = language[0];
let fourthInitial = language[4];
const initials = firstInitial+fourthInitial;
console.log(initials);

console.log(`The abbreviation for '${language}' is '${initials}'.`);

console.log(language.trim(0,11).toUpperCase().slice(4));

let exampleTwo = "title case";
exampleTwoRefined = exampleTwo.replace("t", "T").replace("c","C");
console.log(exampleTwoRefined)

let classes = ["science, computer, art"];
console.log(classes.length);
let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length);

let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);
console.log(javaScriptFrameworks.includes("Vue"));
console.log(javaScriptFrameworks.indexOf("Vue"));
console.log(javaScriptFrameworks.reverse());
console.log(javaScriptFrameworks.sort());
console.log(javaScriptFrameworks.pop());
console.log(javaScriptFrameworks.push("Wue"));
console.log(javaScriptFrameworks.shift());
console.log(javaScriptFrameworks.splice(2,"Vue"));
console.log(javaScriptFrameworks.unshift("Xue"));

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];
let newSchool = "dancing"
school[0].push(newSchool);
console.log(school);
let newSchool2 = "Holmes";
school[1].push(newSchool2);
console.log(school);

let phrase2 = "JavaScript rocks!";
console.log(phrase2[phrase2.length - 8]);
