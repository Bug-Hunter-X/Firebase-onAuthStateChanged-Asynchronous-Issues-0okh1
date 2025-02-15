```javascript
//Correct Usage of Firebase's onAuthStateChanged with Async/Await
async function checkAuth() {
  try {
    const user = await firebase.auth().onAuthStateChanged(user => {
       return user;
    });
    if (user) {
      // User is signed in.
      console.log(user.email);
    } else {
      // No user is signed in.
      console.log("No user signed in");
    }
  } catch (error) {
    console.error("Error checking authentication:", error);
  }
}

checkAuth();
```