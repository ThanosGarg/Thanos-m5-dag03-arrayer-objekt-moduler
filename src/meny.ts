// Day 3, part 2: Functions that work with the menu. Make all tests pass (turn green) on tests.html.
// Use filter, map, find, reduce and sort where appropriate.
// The types (Ratt, OrderRad) are in typer.ts. Red underlines are normal until you have written a return statement.
import { formateraPris } from "./pris";
import type { Ratt, OrderRad } from "./typer";

// 1. All vegetarian dishes (filter). Returns a new array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
  // TODO
  return meny.filter(ratt => ratt.vegetarisk);
}

// 2. Only the names, as an array of strings (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
  // TODO
return meny.map(ratt => ratt.namn);
}

// 3. A price list as strings: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
  // TODO
  return meny.map(ratt => `${ratt.namn} – ${formateraPris(ratt.pris)}`);
}

// 4. Find a dish by id (find). Returns the object, or undefined if it is not found.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
  // TODO
  return meny.find(ratt => ratt.id === id);
}

// 5. The cheapest dish (reduce). Returns the object. An empty list gives undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
  // TODO
  return meny.reduce((prev, curr) => (curr.pris < prev.pris ? curr : prev), meny[0]); 
}

// 6. Sort by price, cheapest first. Returns a NEW array.
//    The original list must NOT be changed (sort changes the original, so copy it first).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
  // TODO
  return [...meny].sort((a, b) => a.pris - b.pris);
}

// 7. Total price for an order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Look up the price for each id in the menu. Unknown ids count as 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
  // TODO
  return order.reduce((total, rad) => {
    const ratt = meny.find(r => r.id === rad.id);
    return total + (ratt ? ratt.pris * rad.antal : 0);
  }, 0);
}

// 8. Number of dishes per category as an object: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
  // TODO
  return meny.reduce((acc, ratt) => {
    acc[ratt.kategori] = (acc[ratt.kategori] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

// 9. A copy of the dish with a new price. The original must NOT be changed (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
  // TODO
  return { ...ratt, pris: nyttPris };
}
