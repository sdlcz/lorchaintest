
 // Get the element where we want to display the user information
let userElement = document.getElementById("profile");

   // Fetch the user information from GitHub API
fetch("https://api.github.com/users/octocat")
  // Handle the response
  .then(function (response) {
    // Return the response as JSON
    return response.json();
  })
  // Handle the data
  .then(function (data) {
    // Display the user name
    userElement.innerHTML = "<h1>" + data.name + "</h1>";
    // Display some other user details
    userElement.innerHTML += "<p>Bio: " + data.bio + "</p>";
    userElement.innerHTML += "<p>Location: " + data.location + "</p>";
    userElement.innerHTML += "<p>Public repos: " + data.public_repos + "</p>";
  }) 


  // Handle any errors
  .catch(function (error) {
    // Display an error message
    userElement.innerHTML = "<p>Something went wrong: " + error.message + "</p>";
  });

 