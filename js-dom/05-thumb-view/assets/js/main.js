

const link = document.querySelector("#link");
const buttonEl = document.querySelector("#button");
const thumbnailLink = document.querySelector("#thumbnailImage");
const xhr = new XMLHttpRequest();

// http://img.youtube.com/vi/YouTubeID/ImageFormat.jpg - single video format

// https://www.youtube.com/watch?v=OuUqS8Po5ps&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa - playlist vide format

buttonEl.addEventListener("click", () => {
  const url = link.value;
  const splitUrl = url.split("v=");
  const videoId = splitUrl[1];
  console.log(videoId);
  const finalUrl = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
//   console.log(finalUrl);
      thumbnailLink.src = finalUrl; 
  
});



