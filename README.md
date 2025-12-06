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
