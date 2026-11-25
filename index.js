const image = document.getElementById("user-image");
const name = document.getElementById("user-name");
const genderText = document.getElementById("user-gender");
let gender = "female";

async function loadUser(userGender = gender) {
    try {
        const response = await fetch(`https://randomuser.me/api/?gender=${userGender}`);
        const data = await response.json();
        const user = data.results[0];

        image.src = user.picture.large;
        name.textContent = `${user.name.first} ${user.name.last}`;
        genderText.textContent = userGender === "female" ? "Female" : "Male";
    } catch (error) {
        genderText.textContent = "Could not load user. Try again.";
    }
}

document.getElementById("toggle-button").addEventListener("click", () => {
    gender = gender === "female" ? "male" : "female";
    loadUser();
});

document.getElementById("random-button").addEventListener("click", () => {
    loadUser();
});
