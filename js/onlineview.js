let onlineCount = 0;

// Function to update online count
function updateOnlineCount(count) {
  const onlineCountElement = document.getElementById("view-online");
  onlineCountElement.textContent = count;
}

// Simulate user visits
function simulateUserVisits() {
  onlineCount += 1;
  updateOnlineCount(onlineCount);
}

// Simulate user leaves
function simulateUserLeaves() {
  if (onlineCount > 0) {
    onlineCount -= 1;
    updateOnlineCount(onlineCount);
  }
}

// Simulate users
setInterval(() => {
  simulateUserVisits();
}, 5000); // Simulate a user visit every 5 seconds

setInterval(() => {
  simulateUserLeaves();
}, 10000); // Simulate a user leaving every 10 seconds
