console.log("Hello World!");

//TODO: create function (or functions) to handle (hyuk hyuk EventHandle) the purchase action
// the Player needs a button to buy the item
// when teh Player clicks the button:
// subtract cost of upgrade from totalCookieCount
// add increase value to cps
// could also save new values in local storage

//TODO: create DOM elements for the shop upgrades
//- create element
//- assign the value to its property (textContent)
//- append it to the DOM

// after you complete this task, you should see the upgrades in your shop-container!

// Sets empty variable for Player preferences to either be built and saved to local storage or updated when retrieved from local storage if already available (checkLocal):
let PlayerPreferences = {};

// will be defined once data fetched in gotCookieUpgrades:
let upgradeData = [];

// gets all button elements and stores for DOM
const listClickables = document.querySelectorAll("button");
console.log("listClickables:");
console.log(listClickables);

const htmlCount = document.getElementById("cookie-count");
const htmlCps = document.getElementById("cps-count");

//Cookie Count and Cookies Per Second object defined here:
let stats = {
  cookieCount: 0,
  cps: 0,
  // See details regarding Upgrade shops below. This one is NOT taken from API, but behaves the same way:
  clickScale: [1, 1.1],
  // Upgrade shop items - key names match array number from cookie upgrade API
  // Child array indeces are: 0 = upgrade level, 1 = scale factor.
  // Formula will be: base cps + (base cps * level * scale factor)
  0: [0, 0.1], //API: 0: "Auto-Clicker", base cost: 100, base cps: 1
  1: [0, 0.1], //API: 1: "Enhanced Oven", base cost: 500, base cps: 5
  2: [0, 0.1], //API: 2: "Cookie Farm", base cost: 1000, base cps: 10
  3: [0, 0.1], //API: 3: "Robot Baker", base cost: 2000, base cps: 20
  4: [0, 0.1], //API: 4: "Cookie Factory", base cost: 5000, base cps: 50
  5: [0, 0.1], //API: 5: "Magic Flour", base cost: 10000, base cps: 100
  6: [0, 0.1], //API: 6: "Time Machine", base cost: 20000, base cps: 200
  7: [0, 0.1], //API: 7: "Quantum Oven", base cost: 50000, base cps: 500
  8: [0, 0.1], //API: 8: "Alien Technology", base cost: 100000, base cps: 1000
  9: [0, 0.1], //API: 9: "Interdimensional Baker", cost: 200000, base cps: 2000
};

//TODO: fetch from cookie-upgrade-api

// fetches data from cookie upgrade API:
async function getCookieUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  return data;
}

// this function will call other functions depending on fetched API data, and will do so once that fetch response process has been completed:
async function gotCookieUpgrades() {
  const data = await getCookieUpgrades();
  upgradeData = data;
  buildLookUp(upgradeData);
  checkLocal();
  makeClickable();
}

//TODO: LocalStorage setup

// Check if local storage data exists and either build preferences from scratch or retrieve:
function checkLocal() {
  if (localStorage.getItem("Player preferences") == null) {
    console.log("Player preferences == null, rebuilding defaults...");
    PlayerPreferences = {
      audio: true,
    };
    const stringifiedPreferences = JSON.stringify(PlayerPreferences);
    localStorage.setItem("Player preferences", stringifiedPreferences);
    console.log("Rebuilding completed. Reading from local storage:");
    console.log(localStorage.getItem("Player preferences"));
  } else {
    console.log("Player preferences found, retrieving from local storage:");
    PlayerPreferences = localStorage.getItem("Player preferences");
    console.log(PlayerPreferences);
  }
}

//TODO: Clickable Object
// Object containing arrays for everybutton class and corresponding IDs:
const objectLookUp = {
  "cookie-button": {
    // Key value = base value of cookies added:
    sherlock: 1,
    superman: 100,
  },
  "upgrade-button": {
    // Upgrade shop items - key names match array number from cookie upgrade API
    // Array indeces are: 0 = base cost of upgrade, 1 = base cps added, 2 = current upgrade level, 3 = scale factor, 4 = Name
    // cps formula for upgrades != clickScale = ["upgrade-button"][id][1] + ([1]*[2]*[3])
    // cps formula for clickScale will behave like the other upgrades, it's just it will always add zero to zero
    // Formula for clickScale when cookie is clicked = ["cookie-button"][id] + (["cookie-button"][id]*["upgrade-button"][id][2]*[3])
    // Cost wil lwork the same way, just using [0] instead of [1]
    //TODO Not sure if bool value is the way to go, see readme
    //TODO: Build this from cookie upgrade API!!!!:
    clickScale: [50, 0, 0, 1.1, "Click Upgrade"], // "Click Upgrade", base cost: 50
    0: [], //API: 0: "Auto-Clicker", base cost: 100, base cps: 1
    1: [], //API: 1: "Enhanced Oven", base cost: 500, base cps: 5
    2: [], //API: 2: "Cookie Farm", base cost: 1000, base cps: 10
    3: [], //API: 3: "Robot Baker", base cost: 2000, base cps: 20
    4: [], //API: 4: "Cookie Factory", base cost: 5000, base cps: 50
    5: [], //API: 5: "Magic Flour", base cost: 10000, base cps: 100
    6: [], //API: 6: "Time Machine", base cost: 20000, base cps: 200
    7: [], //API: 7: "Quantum Oven", base cost: 50000, base cps: 500
    8: [], //API: 8: "Alien Technology", base cost: 100000, base cps: 1000
    9: [], //API: 9: "Interdimensional Baker", cost: 200000, base cps: 2000
  },
  "system-button": {
    // System buttons, will probably only be for volume mute on/off, but if I have time to implement theme for example, this will go here too.
    // Array indeces are: [0] = true boolean, [1] = false boolean
    audio: [true, false],
  },
};

function buildLookUp(data) {
  for (let i = 0; i <= data.length - 1; i++) {
    objectLookUp["upgrade-button"][i][0] = data[i].cost;
    objectLookUp["upgrade-button"][i][1] = data[i].increase;
    objectLookUp["upgrade-button"][i][2] = 0;
    objectLookUp["upgrade-button"][i][3] = 1.1;
    objectLookUp["upgrade-button"][i][4] = data[i].name;
  }
  console.log("Object Look Up:");
  console.log(objectLookUp);
}

//TODO: Create addListeners
// Takes all buttons found with listClickables, adding EventListener to each element:
//Won't be called until fetch for getCookieUpgrade is complete
function makeClickable() {
  for (let i = 0; i <= listClickables.length - 1; i++) {
    console.log(listClickables[i]);
    listClickables[i].addEventListener("click", clickHandler);
  }
}

//TODO: Create Universal Event Handler
//TODO: DOM stuff for click effects

//Handler for "click" event for all click-able elements
function clickHandler(e) {
  // stores button element's class and id attributes, storing them so we can find properties relating to button clicked using objectLookUp:
  const clickedClass = e.currentTarget.getAttribute("class");
  const clickedId = e.currentTarget.getAttribute("id");
  const classFound = objectLookUp[clickedClass];
  const idFound = classFound[clickedId];
  console.log("clickedClass:");
  console.log(clickedClass);
  console.log("classFound:");
  console.log(classFound);
  console.log("clickedId:");
  console.log(clickedId);
  console.log("idFound:");
  console.log(idFound);
  // Switch statement:
  // button class = "cookie-button". Player clicked cookie, we get the value of the cookie clicked and factor in the upgrade from "Click Upgrade". DOM for click effect on cookie will happen here
  switch (clickedClass) {
    case "cookie-button":
      console.log(
        "Scale factor for cookies awarded per click comes from here:"
      );
      console.log(objectLookUp["upgrade-button"].clickScale);
      const scale = objectLookUp["upgrade-button"].clickScale;
      const clickWorth = idFound + scale[2] * scale[3];
      console.log(
        `Player clicked ${clickedId} and will get ${clickWorth} cookies`
      );
      stats.cookieCount = stats.cookieCount + clickWorth;
      console.log(`Player now has ${stats.cookieCount} cookies`);
      htmlCount.innerHTML = Math.trunc(stats.cookieCount);
      break;
    // button class = "upgrade-button". Player clicked upgrade button
    // First we store the cost and awarded cps (scaled by upgrade level)
    //  we check if player can afford it. If not, use DOM to indicate failed purchase
    // if player can afford it, do a different indication with DOM, subtract cost and adjust cps
    case "upgrade-button":
      const upgradeCost = idFound[0] + idFound[0] * idFound[2] * idFound[3];
      const cpsAdd = idFound[1] + idFound[1] * idFound[2] * idFound[3];
      if (stats.cookieCount >= upgradeCost) {
        console.log(
          `Player has purchased ${idFound[4]} for ${upgradeCost} cookies`
        );
        stats.cookieCount = stats.cookieCount - upgradeCost;
        console.log(`Increasing cps by ${cpsAdd}`);
        stats.cps = stats.cps + cpsAdd;
        console.log(`New cps is ${stats.cps}`);
        htmlCount.innerHTML = Math.trunc(stats.cookieCount);
        // CPS: Multiplying by 100, truncating and dividing result by 100 to limit counter to 2 decimal places:
        htmlCps.innerHTML = Math.trunc(stats.cps * 100) / 100;
        idFound[2] = idFound[2] + 1;
        console.log(`Increasing ${idFound[4]} to level ${idFound[2]}`);
      } else {
        console.log(
          `Player only has ${stats.cookieCount} cookies and cannot afford to purchase ${idFound[4]} as it costs ${upgradeCost} cookies`
        );
      }
      break;
    //TODO: SYSTEM BUTTON STUFF
    case "system-button":
      console.log("Case: System");
      break;
  }
}

// 1 second interval that updates cookie counter with added cps value
setInterval(function () {
  stats.cookieCount = stats.cookieCount + stats.cps;
  htmlCount.innerHTML = Math.trunc(stats.cookieCount);
}, 1000);

// calls function to fetch cookie-upgrade api data and setup click-able eventListeners. Basically starts the whole game:
gotCookieUpgrades();
