// Function to check login information
function isValidLogin(username, password) {
  // Replace this with your actual login validation logic
  // Example: Check against a database or hardcoded credentials
  const adminCredentials = { username: "admin", password: "1234" };
  const staffCredentials = { username: "staff", password: "1234" };

  return (
    (username === adminCredentials.username && password === adminCredentials.password) ||
    (username === staffCredentials.username && password === staffCredentials.password)
  );
}

// Function to handle login form submission
function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isValidLogin(username, password)) {
    if (username === "admin") {
      // Redirect to admin.html for admin
      window.location.href = "admin/admin.html";
    } else if (username === "staff") {
      // Redirect to staff.html for staff
      window.location.href = "admin/appointments.html";
    }
  } else {
    alert("Invalid username or password");
  }
}

// Event listener for login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  handleLogin(); // Call the login function
});

// Close the login modal when X or Close button is clicked
// document.getElementById("closeLoginModal").addEventListener("click", function () {
//     $("#authModal").modal("hide"); // Hide the modal using Bootstrap 
// });



// Function to update the modal body content with search results
function updateSearchResults(keyword) {
  const searchResults = document.getElementById("searchResults");

  // Clear previous search results
  searchResults.innerHTML = "";

  // Add new search results to the modal body
  // Replace this with your actual search logic
  for (let i = 1; i <= 5; i++) {
    const resultItem = document.createElement("div");
    resultItem.textContent = `Search result ${i} for keyword: ${keyword}`;
    searchResults.appendChild(resultItem);
  }
}

// Event listener for search button click
document.getElementById("searchButton").addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput").value;
  updateSearchResults(searchInput);
});

// Event listener for close button click on the modal
document.getElementById("closeSearchModal").addEventListener("click", function () {
  // Clear the search input field
  document.getElementById("searchInput").value = "";
  // Clear the search results
  updateSearchResults("");
});


document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  if (searchButton) {
    searchButton.addEventListener("click", function () {
      const searchInput = document.getElementById("searchInput").value;
      updateSearchResults(searchInput);
    });
  }
});

// Event listener for close button click
// document.getElementById("closeSearchModal").addEventListener("click", function () {
// Hide the search modal using Bootstrap
//   $("#searchModal").modal("hide");
// });

// Event listener for Zalo button click
document.getElementById("zaloButton").addEventListener("click", function () {
  $("#zaloChatModal").modal("show");
  console.log($("#zaloChatModal"));
  console.log("Modal shown");
});


  // Wait for the DOM to be fully loaded before attaching event listeners
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("loginForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
//     handleLogin(); // Call the login function
//   });
// });

