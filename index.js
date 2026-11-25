// Start with a female user
let gender = "female";

// Get the elements we need
const image = document.getElementById("user-image");
const name = document.getElementById("user-name");
const genderText = document.getElementById("user-gender");

// Load a user from the Random User API
function loadUser() {
  fetch("https://randomuser.me/api/?gender=" + gender)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const user = data.results[0];

      image.src = user.picture.large;
      name.textContent = user.name.first + " " + user.name.last;
      genderText.textContent = gender === "female" ? "Female" : "Male";
    });
}

// Toggle between male and female
document.getElementById("toggle-button").addEventListener("click", function () {
  if (gender === "female") {
    gender = "male";
  } else {
    gender = "female";
  }
  loadUser();
});

// Load another random user
document.getElementById("random-button").addEventListener("click", loadUser);

// Load the first user when the page opens
loadUser();