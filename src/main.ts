// Day 3, part 1: Arrays and objects in the console.
import { meny } from "./data";
import { studentPris } from "./rabatt";

// TASK 1: arrays
// a) create const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) add "Chai" at the end using push. Print the list and its length.
// c) remove the last item using pop and print what was removed.
// d) print the index of "Latte" (indexOf) and whether "Cola" is in the list (includes).
// e) print the entire list as a string: drycker.join(", ")
// TODO
const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
console.log(drycker);

drycker.push("Chai");
console.log(drycker, drycker.length);

const removedDrink = drycker.pop();
console.log(removedDrink);

console.log(drycker.indexOf("Latte"));
console.log(drycker.includes("Cola"));

console.log( drycker.join(", "))



// TASK 2: objects
// a) create const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) print kopp.namn and kopp["pris"]
// c) change the price to 48, and add the property storlek: "stor"
//    TypeScript reports an error for storlek. Describe the object with an interface where storlek is optional (storlek?: string).
// d) print Object.keys(kopp)
// TODO

interface kopp {
  namn: string;
  pris: number;
  vegetarisk: boolean;
  storlek?: string;
}

const kopp: kopp = { namn: "Latte", pris: 45, vegetarisk: true };
console.log(kopp.namn, kopp["pris"]);

kopp.pris = 48;
kopp.storlek = "stor";
console.log(kopp.pris,);

console.log(Object.keys(kopp));




// TASK 3: arrays of objects
// a) print how many dishes the menu has and the name of the first one
// b) loop using for...of and print "name – price kr" for each dish
// c) print the name of the last dish without knowing the number of dishes (hint: length - 1)
// TODO
console.log(meny.length);
console.log(meny[0].namn);

for (const dish of meny) {
  console.log(`${dish.namn} – ${dish.pris} kr`);
}

console.log(meny[meny.length - 1].namn)

for (const dish of meny) {
   console.log(`${dish.namn} – student price: ${studentPris(dish.pris)} kr`);
}


// Step 10 – Test 1: Missing type="module"
// When I removed type="module", the browser reported
// "Cannot use import statement outside a module"
// because it loaded main.ts as a regular script.

// Test 2: Wrong import path
// The browser showed a 500 error for main.ts because
// Vite could not find the module "./rabattFel".

//  Test 3: Opening index.html directly
// When I opened index.html through file://, the page could not load main.ts.
// Opening the page through the Vite server fixed it.