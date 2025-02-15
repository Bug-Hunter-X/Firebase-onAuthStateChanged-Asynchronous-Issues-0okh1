# Firebase onAuthStateChanged Asynchronous Bug

This repository demonstrates a common issue when using Firebase's `onAuthStateChanged` method:  asynchronous handling.  The provided code snippet showcases an incorrect approach which may lead to race conditions or inaccurate updates, especially when combined with other asynchronous tasks.

The `bug.js` file contains the flawed code.  The `bugSolution.js` file presents a corrected solution for handling asynchronous operations reliably.