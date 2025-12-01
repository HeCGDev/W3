/**
 * *** Patterns and flags
 * Regular Expressions
 * Flags
 * Searching
 * Replacing
 * Testing
 */
let arrayOfStr = [
    "hello world",
    "We will, we will rock you.",
    "I love JavaScript",
];

// Regular Expressions
// regexp = new RegExp("pattern", "flags"); // dynamic string
// regexp = /pattern/; // no flags, static string
// regexp = /pattern/gmi; // with flags g,m and i, static string
let tag = "h2" // prompt("Enter any tag", "h2");
let regExp = new RegExp(`<${tag}>`);
console.log(regExp);

// Flags ...

// Searching strings
let strRegExp = [
    /we/,
    /we/i,
    /we/g,
    /we/ig,
    /eee/ig,
];
for (let regExp of strRegExp) {
    let matchExp = arrayOfStr[1].match(regExp) || [];
    // returns null if no match, make it as empty array
    if (regExp.test(arrayOfStr[1])) {
        console.log(`Searching: ${regExp}`, matchExp);
    } else {
        console.warn(`Searching: ${regExp} - no match`, matchExp);
    }
}

// Replacing strings
let replaceStr = arrayOfStr[1].replace(/we/ig, "$&eee");
console.log("Replacing:", replaceStr);

// Testing strings
let checkStr = /LOVE/i;
console.log("Testing:", checkStr.test(arrayOfStr[2]));
