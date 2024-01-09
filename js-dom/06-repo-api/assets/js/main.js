const profile = document.querySelector("#profile");
const xhr = new XMLHttpRequest();

// console.dir(profile.pathname);

xhr.onreadystatechange = function () {
    console.log(this);
 
    if (this.readyState === 4 && this.status === 200) {
        // console.log(xhr.responseText);
        const userName = profile.pathname.split("/");
        const userId = userName[1];
        console.log(userId);
    }
};
  
  xhr.open(
    "GET",
    "https://api.github.com/users/jeya-rosini/repos"
  );
  xhr.send();