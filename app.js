console.log("Hello World!");

//game logic
// when the user clicks on the cookie, the total count of cookies goes up by 1
// when the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

// we will need functions to contain the game logic
// we will get the shop upgrades data from the Cookie-Upgrade API
// to create the logic for the shop upgrades
//-OPTION 1: You could use a function to handle each upgrade
//-OPTION 2: You could have a reusable function

// Tip on local storage:
//-Make sure the local storage values are updated after the user buys an upgrade OR/AND when the user clicks on a cookie

//=================================================

// data storage
// global scope
let totalCookieCount = 0;
let cps = 0;

let stats = {
  cookieCount: 0,
  cps: 0,
};

// if there is data already in local storage, update stats with this data, so the user picks it up where they left off

//=================================================

// shop upgrades

// fetch the upgrades from the API

// create multiple DOM elements to contain the upgrades (loop)

//TODO: create DOM elements for the shop upgrades
//- create element
//- assign the value to its property (textContent)
//- append it to the DOM

// after you complete this task, you should see the upgrades in your shop-container!

//TODO: create function (or functions) to handle (hyuk hyuk EventHandle) the purchase action
// the user needs a button to buy the item
// when teh user clicks the button:
// subtract cost of upgrade from totalCookieCount
// add increase value to cps
// could also save new values in local storage

//=================================================

// the interval

// setInterval(function () {
//   totalCookieCount += cps; //totalCookieCount = totalCookieCount + cps
//   //update the DOM to reflect the changes in the values
//   // save the values in local storage
// }, 1000);

//TODO: Global constants

const listClickables = document.querySelectorAll(".click-me");

console.log(listClickables);

console.log(listClickables.length);

//TODO: Clickable Functions

function heroCookie() {
  return "Do hero stuff";
}

function villainCookie() {
  return "Do villain stuff";
}

//TODO: Clickable Object

const objectClickID = {
  "hero-cookie": ["Hero", heroCookie],
  "villain-cookie": ["Villain", villainCookie],
};

//TODO: Create addListeners

function makeClickable() {
  for (let i = 0; i <= listClickables.length - 1; i++) {
    listClickables[i].addEventListener("click", clickHandler);
  }
}

makeClickable();

//TODO: Create Universal Event Handler

function clickHandler(e) {
  console.log(e);
  const clickedID = e.target.getAttribute("id");
  console.log(clickedID);
  const idFound = objectClickID[clickedID][1];
  console.log(idFound);
  console.log(idFound());
}
