```javascript
//Incorrect Usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user.email);
  } else {
    // No user is signed in.
    console.log("No user signed in");
  }
});
```