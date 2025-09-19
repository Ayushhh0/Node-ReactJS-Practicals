// asyncExample.js
function fetchUserData() {
  console.log("Fetching user data...");

  setTimeout(() => {
    console.log("Data received");
  }, 2000); // 2 seconds delay
}

fetchUserData();
