# cookie-clicker

a clicker game

Reflection Please also provide an assignment reflection in your project README.md file.

Required 🎯 What requirements did you achieve? 🎯 Were there any requirements or goals that you were unable to achieve? 🎯 If so, what was it that you found difficult about these tasks? Optional 🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission. What useful external sources helped you complete the assignment (e.g Youtube tutorials)? What errors or bugs did you encounter while completing your assignment? How did you solve them? What went really well and what could have gone better?

//========================================

Attributions:

<a href="https://www.flaticon.com/free-icons/biscuit" title="biscuit icons">Biscuit icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/click" title="click icons">Click icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/oven" title="oven icons">Oven icons created by Hasymi - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/farm" title="farm icons">Farm icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/baker" title="baker icons">Baker icons created by amonrat rungreangfangsai - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/industry" title="industry icons">Industry icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/witch" title="witch icons">Witch icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/time-machine" title="time machine icons">Time machine icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/factory-machine" title="factory machine icons">Factory machine icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/ufo" title="ufo icons">Ufo icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/cthulhu" title="cthulhu icons">Cthulhu icons created by Smashicons - Flaticon</a>

//========================================

<!-- Comment out as once commited and pushed -->

<!--Commited and pushed: main-logic branch 05/12/2025: 09.52:
- Added hero-cookie img to html
- Started working on a universal eventHandler for all clickable elements in the game.
  ===[ removeEventListener() ] === could come in handy for elements that can only be clicked once (or under certain conditions) but are not removed immediately.
- Added villain-cookie to html just to test event listener/handler interactions
- Added:
  listClickables
  heroCookie()
  villainCookie()
  objectClickID
  makeClickable()
  clickHandler(e)
  -->

<!--Commited and pushed: main-logic branch 05/12/2025: 13.50:
- Fetch from cookie-upgrade-api =[ Ran into some problems because I wasn't taking into account async properly. Although I understood it, I was thrown for a loop by a console.log that wasn't after an await operator. It was showing the fetched data which made me improperly evaluate what was happening! Bertie kindly steered me back on track by informing me that the console.log will actually update it's message after response received!]=
- Tidied up commented out test code and added signposting comments
-->

<!--Commited and pushed: main-logic branch 05/12/2025: 15.40:
- Setting up local storage, using userPreferences to test with.
- checkLocal() will check if there is a local storage "copy" of userPreferences. If so, userPreferences will be updated to match. If not, userPreferences will be built with default values. I will use cookie count and cps using this method, where basically if no save game found then these will start with default values of 0 as it indicates a new player (or a corrupted save!)
-->

<!--Commited and pushed: main-logic branch 06/12/2025: 11.25:
- Adding some sections to HTML as well as placeholder h2s with "cookie-count" and "cps-count" IDs.
- Changing to use buttons instead of just images
  When changing to button, had to stop using e.target and instead e.currentTarget
- Re-structured objectLookUp so there are no array elements as not required and only served to cause me confusion! Adjusted clickHandler to account for this.
-->

<!--Commited and pushed: main-logic branch 07/12/2025: 05.50:
Just to note: in clickHandler I check ID primarily for buttons for system and upgrade shop to distinguish options and upgrades from each other. I did have an idea for "enemy" cookies which would use class "cookie-button" and have different click events to the main cookie and would use IDs for this, but that's a "maybe" feature. If I have time, setting it up as I have should allow modularity to accommodate.

Also while each class has an associated function in objectLookup, I do intend to try and avoid using this if possible. Basically my aim is for clickHandler to be a one-stop function, but this may come at the cost of readability. If I tidied up all the console logs into a loop function or something, that would help!

-Start working on incrementing cookie counter
Would like to account for number values not going crazy, like converting "1000 000" to "1 million" for example. I have a vague awareness of interger value limits and taking that into consideration, but for this assignment it's more in terms of a UX consideration. Big numbers can look impressive, but too big gets hard to read (and looks ugly)! If I have time though.

Also if I have time: capping upgrade levels!

- Adding template buttons for shop upgrades

**===//TODO Not sure if bool value is the way to go, see readme===**
The idea was that I would check to see if player still has enough cookies to click this button again. Although as I type this, rather than the check happening AFTERWARDS, have it happen before cookie transaction is applied. Obviously! I threw myself because I was thinking in terms of dimming the button as well so it communicates that it can't be clicked.

I think the buttons greying out can happen on setInterval. I could have multiple going where one is updating cps and the other is on a ashorter interval, but for the purposes of this assignment I might just stick with one interval. It won't be such a big deal if user clicks on non-dimmed button for purchase not to be made, a fraction of a second before it goes dim! Plus, feedback that will happen on click, WON'T happen if user doesn't have enough funds.

MIGHT want the bool statements to be index 0, then. (Already done, did it right away)

**================================================================**

Taking a break, don't forget to investigate if statement, doesn't seem to be working:

 <!-- if ((idFound[0] = "true" + stats.cookieCount < 100)) {

Although instead of the "true/false" array item, think I'll just use a switch with class determining which case. -->

<!--Commited and pushed: main-logic branch 07/12/2025: 11.05:
- Actually building objectLookup from cookie upgrade api. Have done so with a loop in buildLookUp() which is called after fetch API async function getCookieUpgrades() is complete (via gotCookieUpgrades())
- Cleaned up the rest of objectLookUp, getting rid of function references (and their corresponding functions as well as operator functions that won't be used)
- Can't remember if I wrote this in the readme but I was multiplying -1 to objectLookUp upgrade values as "cookie-button" and "upgrade-button" was sharing logic, so clicking a cookie or buying an upgrade used:
  stats.cookieCount = stats.cookieCount + idFound[0]
  This way clicking cookie would accumulate (positive number + positive number) whereas clicking shop upgrade was positive number + negative number, resulting in a subtraction. Now, however, I have a switch statement in place so for upgrades it looks like:
  stats.cookieCount = stats.cookieCount - idFound[0];
- Finished logic for incrementing cookie count and cps. Readability is... not great. Will try and convert arrays to objects so key values make things clearer. -->

<!--Commited and pushed: main-logic branch 07/12/2025: 11.50:
- Manipulating "cookie-count" and "cps-count" h2 elements via DOM so they update accordingly. Cookie count will update immediately on cookie click and upgrade purchase and again alongside cps-count on setInterval.
  Using Math.trunc(stats.cookieCount) so numbers after decimal place are ignored
- Adding setInterval() for adding cps to cookie total and updating HTML element
  -Probably want to getElementById as a global variable, right now it's within clickHandler(); (I did this immediately) -->

<!--Commited and pushed: main-logic branch 07/12/2025: 14.39:
-You can have too many console logs! Getting rid of most but the obviously useful ones and will re-add some if need be.
-General tidy up too.

- Changed how default userPreferences is built so it's just audio: true for now
- checkLocal() is now called in gotCookieUpgrades() although this needs further consideration, the order in relation to call for buildLookUp() at the very least -->

<!--Commited and pushed: main-logic branch 07/12/2025: 21.25:
- added global hasClicked bool for updating local storage save if player clicked within the last second - setInterval. hasClicked set to true for cookie and store upgrade click events.
- added userPreference save and local storage update at system button click event, don't need to save this everytime gamplay click events occur.
- audio button now essentially inverts true / false. SO if audio is on, when clicked, it will switched off, and vise versa. Well, not yet as there's currently no audio to mute! But code is just about ready for it.
- added code in clickHandler for deleting player preferences and/or playerStats. A nested switch seems not to be recommended, but I don't think this looks TOO bad. But yeah I do appreciate that this isn't best practice. cookie-button and upgrade-button are pretty modular, though!
- set stringified variables as global to be set again when needed, rather than the same const name being used in several functions. This only actually seemed to be a problem with setInterval, probably because I've set it up as a... constructor function? Is that the right terminology? Amyhow, after making this change a bunch of stuff broke and it's time for dinner. Will come back to it shortly.
- As an aside, I really should have had DOM adjustments be put into a function but won't have time now.
- updating playerPreferences, playerStats and their corresponding local storage saving should have been in a function too. Likely won't have time to correct this. Could have used as callback functions too, instead of checkLocal calling buildPlayerStats to set a global variable (playerStats) for checkLocal to reference on the next line. May have its own drawbacks, though.

!!! Hmmm noticed bug where cps isn't saved. NO WAIT! DOM element doesn't load, increasing cps shows it again... fixed. Count was updating on interval whereas cps isn't. I was going to add both after checkLocal but these DOM elements already feel like they are all over the place, so adding cps update on Interval too contains the spread a little. This introduced a bug where cps shows more than 2 decimal places. Think it must be how I'm multiplying and dividing them, but no time to investigate!

Probably would have been better to only fetch from API when no save data exists, then I could have directly updated that and used it as playerStats rather than having these two large objects that are more or less holding the same information.

Reached download limit for icons, autoclicker will just have to be represented by a cookie!

No indication of upgrade level. No time!

No time to implement animation when clicking or anyt audio feedback whatsoever, so mute button will not exist!

No themes! No system buttons at all!

Very little CSS done, not comfortable with it enough to do under intense time pressure and I left myself basically half an hour. Time management skills need work!

Virtually no responsiveness at all.

Pushing, merging. Publishing. Submitting. -->
