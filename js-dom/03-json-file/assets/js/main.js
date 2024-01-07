import data from "../json/main.json";

// console.log(data)

const friendsListEl = document.querySelector("#friendsList");
const activeListEl = document.querySelector("#activeList");

// console.log(friendsListEl);

data.forEach((friends) => {
    friendsListEl.innerHTML += `<li class="list-items">${friends.name}, 
  ${friends.dob}</li>`;
});
