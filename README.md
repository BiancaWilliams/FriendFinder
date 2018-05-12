
# Friend Finder - Node and Express Servers

### Overview

In this activity, I've built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 


* `FriendFinder`consists of the  following:

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Instructions

1. Survey has 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2.  `server.js` file  requires the basic npm packages: `express`, `body-parser` and `path`.

3.  `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. is used to handle incoming survey results. This route  also  handles the compatibility logic. 

5.  Application's data is inside of `app/data/friends.js` as an array of objects.