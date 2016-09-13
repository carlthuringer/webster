# webster
Webster is an application which will find the shortest path from any article on Wikipedia through its links to the article on Philosophy. It is being developed as a portfolio application and is still a work in progress.

Webster will help me explore the following technologies:

* Nodejs 6.x
* StandardJS Style
* ES6
* Websockets
* Background Processes with Node
* Worker Pools
* Fast Graph construction and traversal
* Vue.js
* Redux
* Redis

To run:
```
npm install
npm start
(new window)
cd frontend
npm install
npm dev
```

Browse at `http://localhost:8080`. You should be able to enter any Wikipedia topic page title and get a list of all body text links present there.

Todo:
[] Change the API to use a Websocket connection and Redux store to communicate searches and the results of the scrape.
[] Use a background worker to do the actual scrape
[] Have a service which plans the search and triggers background jobs
[] Visualize the status of the search on the frontend
[] Build a directed graph from the links discovered on each page
[] Visualize the live graph status on the frontend
[] Have a service which subscribes to the graph and attempts to find Philosophy.
[] Be able to handle multiple seekers at once, and build upon the prior graph when executing new searches.
[] Allow any begin/endpoint!
