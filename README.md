# cookie-clicker

a clicker game

Reflection Please also provide an assignment reflection in your project README.md file.

Required 🎯 What requirements did you achieve? 🎯 Were there any requirements or goals that you were unable to achieve? 🎯 If so, what was it that you found difficult about these tasks? Optional 🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission. What useful external sources helped you complete the assignment (e.g Youtube tutorials)? What errors or bugs did you encounter while completing your assignment? How did you solve them? What went really well and what could have gone better?

//========================================

Reflections

//========================================

//========================================

My Notes

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
