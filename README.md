# Data Structures in TypeScript

This collection is a side effect of my picking up some TypeScript over the weekend.

- [x] Array
- [x] Stack
- [x] Queue
- [x] Binary Search Tree
- [x] Graph

I'm still wary of using JavaScript classes, and my intuition tells me that using TypeScript reinforces that style of thinking in classical inheritance. So I opted instead to write the structures in the classical JavaScript prototypical style.

I also included Lodash in the project just to learn how to import external libraries for use in TypeScript environments.

Tests are also included (except for graphs, because the weekend is over). Not all batteries are included though - you have to have TypeScript installed globally: `npm install typescript -g`. Then `npm install` and run `npm test`.