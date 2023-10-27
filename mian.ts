// 1-
// Write Your Code Here
type n = number
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// ******************************************
// 2-
// Write Your Code Here
type mix = number | boolean;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// ******************************************
// 3-
// Write Your Code Here
type Info = {
  theName: string,
  theAge: string | number
}

type Full = Info & {
  country: string
}

// Do Not Edit Here
function showInfo(data: Info): string {
  return `The Name Is ${data.theName} and The Age Is ${data.theAge}`;

}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full): string {
  return `The Name Is ${data.theName}, The Age Is ${data.theAge} and The Country Is ${data.country}`;
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// ******************************************
// 4-
function yesOrNo(val: number | string | boolean): string | boolean {
  if (typeof val === 'string') return 'Error'
  return +val > 10;
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False


// ******************************************
// 5-
type custom = string
function isHeOld(age: number | string): custom {
  if (typeof age === 'string') return 'Error'
  return age > 40 ? 'Yes' : 'No';
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

// ******************************************
// 6-
let post: readonly [number, string, boolean];
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here

const [id, title, state] = post

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

// ******************************************
// 7-
const insane = (num: number, hard: number): number => hard - num

enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - (Easy / 2),
  Insane = insane(10, Hard)
}


// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20


// ********************************************************

const user: {
  username: string,
  age: number | string,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: any[]
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);