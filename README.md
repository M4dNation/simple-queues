# simple-queues

## About

`simple-queues` is a package for creating a queue structure.  
It provides one `Queue` class you can instanciate and populate with any data you want.

## Install

`npm install --save simple-queues`  
`yarn add simple-queues`

## Usage

`simple-queues` exports a `Queue` class you can import:

```javascript
// ES6
import { Queue } from "simple-queues";

// ES5
const Queue = require("simple-queues").Queue;
```

Once imported, you just have to instanciate a Queue and add data to have an usable queue.

```javascript
import { Queue } from "simple-queues";

const queue = new Queue();
const myData = {id: "some-id"};

list.addToHead(node); // Add the node to the head of the list
list.addToTail(node); // Add the node to the tail of the list
list.removeHead(); // Remove the head node of the list
list.removeTail(); // Remove the tail node of the list

```

## Authors

`simple-queues` is maintained by M4dNation Company.  
First version written by [axelvaindal](https://github.com/axelvaindal).

## Contributors

There is actually no other contributors for this project.
If you want to contribute, feel free to make any suggestions or to contact us.

### Contributing to the package

We try to keep `simple-queues` as simple as possible.  
Before proposing a PR or opening an issue, please keep in mind :

    - This package is meant to be as simple as possible
    - This package tries to respect the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
    - This package tries to use the minimum of dependencies possible

Taking into account the previous points leads us to **NOT** merge proposed pull-request if those :

    - Integrate changes that are too far from the initial purpose of the package
    - Integrate changes that are adding additional dependencies
    - Integrate changes that are not unit tested and motivationated

This being said, we **really** welcome pull-request and bug report, so feel free to start a contribution.

Moreover, Pull Requests should always come with related unit tests, and won't be considered if tests aren't included.

### Testing

`simple-queues` uses jest for unit testing.  
If you don't know about jest yet, you can check out their [documentation](https://jestjs.io/en/).

To run the tests, just run : 

`yarn test`

Note that we are using [codecov](https://codecov.io) to keep track of code coverage related to our tests and you shouldn't affect negatively the current coverage of the code by removing tests or not covering new features with new unit tests.

## Licence

`simple-queues` is available under the terms of the MIT LICENSE.  
Check the licence file for more information.