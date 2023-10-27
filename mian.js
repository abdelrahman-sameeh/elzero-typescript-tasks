"use strict";
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    return `The Name Is ${data.theName} and The Age Is ${data.theAge}`;
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    return `The Name Is ${data.theName}, The Age Is ${data.theAge} and The Country Is ${data.country}`;
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// ******************************************
// 4-
function yesOrNo(val) {
    if (typeof val === 'string')
        return 'Error';
    return +val > 10;
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (typeof age === 'string')
        return 'Error';
    return age > 40 ? 'Yes' : 'No';
}
// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
// ******************************************
// 6-
let post;
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
// ******************************************
// 7-
const insane = (num, hard) => hard - num;
console.log(insane(10, 30));
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = insane(10, Game.Hard)] = "Insane";
})(Game || (Game = {}));
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
