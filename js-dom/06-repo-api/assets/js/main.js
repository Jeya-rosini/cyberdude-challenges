const repository = document.getElementById("repository")

const userName = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "muthukumarimoorthi",
  "sharif-22",
  "danielace1",
  "gayathrihg",
  "kishorekumar-kp",
];
// console.log(userName);

function getUserName(userId){
  
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    // console.log(this);
    if (this.readyState === 4 && this.status === 200) {
      const user = JSON.parse(xhr.responseText);
      profile(user)
      return user
    }
};

xhr.open("GET",`https://api.github.com/users/${userId}`, true );
xhr.send()

}

userName.forEach(userId => getUserName(userId));

function profile(user) {
  // console.log(user);

// main division card
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("bg-[#F7D9D9]","m-2","p-2", "text-center","rounded-full")

  //sub-division-1
  const firstDiv = document.createElement("div");
  firstDiv.classList.add("flex", "flex-col", "justify-center", "items-center", "space-y-4")

  //sub-division-content
  const image = document.createElement("img")
  image.src = user.avatar_url;
  image.alt = user.name;

  image.className = "rounded-full w-20 h-20 object-contain"

  const heading = document.createElement("h6");
  heading.classList.add("text-black", "font-bold");
  heading.innerText = user.name;

  firstDiv.append(image)
  firstDiv.append(heading)

  //sub-division-2
  const secondDiv = document.createElement("div");
  secondDiv.className = "flex flex-col items-center justify-center space-y-3 pt-2";

  //sub-division-repository-content
  const repDiv = document.createElement("div");
  repDiv.className = "bg-[#F25287] rounded w-full hover:bg-slate-100 p-1 font-semibold"

  const repAnchor = document.createElement("a")
  repAnchor.className = "flex items-center justify-center space-x-1"
  repAnchor.href = `https://github.com/${user.login}?tab=repositories`
  repAnchor.target = "blank"
  repAnchor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6.75 11.5c2.75 0 3.49-2.03 3.68-3.1c.91-.29 1.57-1.14 1.57-2.15C18 7 17 6 15.75 6S13.5 7 13.5 8.25c0 .94.57 1.75 1.39 2.08C14.67 11 14 12 12 12c-1.38 0-2.34.35-3 .84V8.87c.87-.31 1.5-1.14 1.5-2.12c0-1.25-1-2.25-2.25-2.25S6 5.5 6 6.75c0 .98.63 1.81 1.5 2.12v6.26c-.87.31-1.5 1.14-1.5 2.12c0 1.25 1 2.25 2.25 2.25s2.25-1 2.25-2.25c0-.93-.56-1.75-1.37-2.07c.28-.68 1.1-1.68 3.62-1.68m-4.5 3a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m0-10.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m7.5 1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75"/></svg>
  <span>Repositories</span>`

  repDiv.append(repAnchor);

  //sub-division-github-content
  const gitDiv = document.createElement("div");
  gitDiv.className = "bg-[#F25287] rounded w-full hover:bg-slate-100 p-1 font-semibold"

  const gitAnchor = document.createElement("a")
  gitAnchor.className = "flex items-center justify-center space-x-1"
gitAnchor.href = `https://github.com/${user.login}`
  gitAnchor.target = "blank"
  gitAnchor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>
  <span>GitHub Profile</span>`

  gitDiv.append(gitAnchor)
  
  //append to second division
  secondDiv.appendChild(repDiv);
  secondDiv.appendChild(gitDiv)

  //Append all the div to main div
  mainDiv.appendChild(firstDiv);
  mainDiv.appendChild(secondDiv)

  repository.append(mainDiv)

  }
  
  