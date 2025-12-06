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
// let totalCookieCount = 0;
// let cps = 0;

// let stats = {
//   cookieCount: 0,
//   cps: 0,
// };

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

//TODO: Cookie COunt and Cookies Per Second object defined here:
let stats = {
  cookieCount: 0,
  cps: 0,
};

//TODO: fetch from cookie-upgrade-api
//You can try using setTimeout or setInterval to simulate a slow fetch response

async function getCookieUpgrades() {
  //fetch() will get data from a specific url
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  ); //the browser will wait until the response has been received
  console.log(response);
  //translate (parse) data into JSON
  const data = await response.json(); //this is async
  console.log(data);
  return data; //now data is availble for other functions
}

//control function to run getFoxesData and createFoxImage in the order we want them too
async function gotCookieUpgrades() {
  const data = await getCookieUpgrades();
  upgradeData = data;
  makeClickable(); //this function will not be called until the data is ready. Ensures elements page load starts with that are intended to be clickable have their corresponding API data fetched and ready before they ARE clickable
}

//TODO: LocalStorage setup
// Sets empty variable for user preferences to either be built and saved to local storage or updated when retrieved from local storage if already available (checkLocal):
let userPreferences = {};

// Check if local storage data exists and either build preferences from scratch or retrieve:
function checkLocal() {
  if (localStorage.getItem("user preferences") == null) {
    console.log("User preferences == null, rebuilding defaults...");
    userPreferences = {
      theme: "dark",
      font: "large",
      contrast: "high",
      colourblindMode: true,
    };
    //STEP 1: stringify the data
    const stringifiedPreferences = JSON.stringify(userPreferences);
    //STEP 2: add our stringified data to local storage
    localStorage.setItem("user preferences", stringifiedPreferences);
    console.log("Rebuilding completed. Reading from local storage:");
    console.log(localStorage.getItem("user preferences"));
  } else {
    console.log("User preferences found, retrieving from local storage:");
    userPreferences = localStorage.getItem("user preferences");
    console.log(userPreferences);
  }
}

checkLocal();

//TODO: Global variables

// will be defined once data fetched in gotCookieUpgrades
let upgradeData = [];

// gets all elements with class "click-me" and stores to DOM
const listClickables = document.querySelectorAll("button");

console.log("listClickables:");
console.log(listClickables);

console.log(listClickables.length);

//TODO: Clickable Functions
// Will likely want this to be Cookie / Upgrades / System (something like that) which will then have their own "child functions" (although probably best to split up the class="click-me" into these categories)

function cookieButton(a) {
  return a;
}

function upgradeButton(a) {
  return a;
}

function systemButton(a) {
  return a;
}

//TODO: Operator functions

function add(a, b) {
  const result = a + b;
  console.log(`Adding ${a} and ${b}...`);
  console.log(`Returning answer: ${result}`);
  return result;
}

function subtract(a, b) {
  const result = a + b;
  console.log(`Adding ${a} and ${b}...`);
  console.log(`Returning answer: ${result}`);
  return result;
}

function doNothing(a, b) {
  //CODE
}

//TODO: Clickable Object
// Object containing arrays for every type of click-able element. Array structure is ["ALT TEXT", associatedFunction] - ALT TEXT is a maybe though. Also may want three separate of these for COOKIE / UPGRADE /SYSTEM (or something like that)

const objectLookUp = {
  "cookie-button": {
    function: cookieButton,
    count: add,
    cps: doNothing,
    sherlock: "Bob",
    superman: "Mary",
  },
  "upgrade-button": {
    function: upgradeButton,
    count: subtract,
    cps: add,
    "first-upgrade": "Susie",
    "second-upgrade": "Joe",
  },
  "system-button": {
    function: systemButton,
    count: doNothing,
    cps: doNothing,
    audio: "Susie",
    "something-else": "Joe",
  },
};

// const testaaaa = objectLookUp.cookieButton[0].sherlock;
// const testaaaa = objectLookUp["upgrade-button"].function;
const feet = "sherlock";
const testaaaa = objectLookUp["cookie-button"][feet];
console.log("Leg fapenzzz");
console.log(testaaaa);

//TODO: Create addListeners
// So far just one for making elements already on the page. Finds them with listClickables, adding EventListener to each element.

//Won't be called until fetch for getCookieUpgrade is complete
function makeClickable() {
  for (let i = 0; i <= listClickables.length - 1; i++) {
    console.log(listClickables[i]);
    listClickables[i].addEventListener("click", clickHandler);
  }
}

//TODO: Create Universal Event Handler
//Handler for "click" event for all click-able elements

function clickHandler(e) {
  // logs clicked element:
  console.log(e);
  // stores element's class and id attributes and logs:
  const clickedClass = e.currentTarget.getAttribute("class");
  console.log("clickedClass:");
  console.log(clickedClass);
  const clickedId = e.currentTarget.getAttribute("id");
  console.log("clickedId:");
  console.log(clickedId);
  //TODO: May just want to use ID, perhaps come back to this:
  // checks class with objectClickID to find corresponding function reference --> [1]:
  const classFound = objectLookUp[clickedClass];
  console.log("classFound:");
  console.log(classFound);
  const classFunc = classFound.function;
  console.log("classFunc:");
  console.log(classFunc);
  const idFound = classFound[clickedId];
  console.log("idFound:");
  console.log(idFound);
  // logs function reference summary:
  // logs return of referenced function:
  console.log(classFunc(idFound), "Andrews");
  // console.log(classFound(clickedId));
  //TODO: Put below in here to test fetch set up correctly. Currently does not and may never have a reason to be here:
  // logs fetched upgradeData:
  console.log(upgradeData);
  console.log(classFound[2]);
}

const testObj = {
  Parent1: [
    {
      Child1: "Bob",
      Child2: "Mary",
    },
  ],
  Parent2: [
    {
      Child1: "Steve",
      Child2: "John",
    },
  ],
  Parent3: [
    {
      Child1: "Susie",
      Child2: "Joe",
    },
  ],
};

console.log(testObj);
console.log(testObj.Parent3);

// calls function to fetch cookie-upgrade api data and setup click-able eventListeners. Basically starts the whole game:
gotCookieUpgrades();
