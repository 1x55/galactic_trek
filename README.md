# galactic_trek
Imagine this app as your personal tour guide to the universe's most intriguing extraterrestrial neighbors! 🌌 It's like having a space encyclopedia at your fingertips, but way more fun. 🚀
Our Express.js-powered server is your gateway to discovering the secrets of different alien species. 🛸 

It's always ready to chat on port 8001, eager to spill the beans on any alien you ask about. 😄

Just name an alien, any alien! 🌠 Whether it's the Vulcans with their pointy ears, the Klingons and their epic battles, or even those mysterious Borgs with their pale skin and a hive mind – this app has got you covered. It'll tell you everything you need to know about their name, where they come from, their unique features, fascinating facts, and even some famous folks from their species.

## Install & Use
-  Fork and clone repo
-  Install dependencies via `npm install`
-  `npm run dev` to start development server
-  Open localhost:8001 in browser

**Key Features:**

-Functionality:
- This app provides information about various alien species from the Star Trek universe.
- It offers details such as the species name, homeworld, physical features, interesting facts, notable examples, and an image for each species.
- Users can access this information by making API requests with the species name as a parameter.

**Link to project:** 
- https://galatic-trek.cyclic.app/

**Tech used:** 
- HTML, Node.js, Express.js: It uses the Express.js and Cors 

## Lessons Learned:
- Importing and Using Modules:  imported the necessary modules (express, cors) using require and applied them to your Express application using app.use()
- API Endpoint Handling:  defined two API endpoints, / and /api/:alienName, which serve HTML content and alien information, respectively. You used app.get() to define these routes and specify the request handling functions.
- Data Storage and Retrieval: stored information about different alien species in a JavaScript object called aliens. When a request is made to /api/:alienName, you retrieve the requested alien's information from this object based on the provided :alienName parameter.
- 
##Optimisation:
- Enhance modularity and maintainability by relocating the alien data from server.js to a dedicated folder.
