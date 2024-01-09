const link = document.querySelector("#link");
const buttonEl = document.querySelector("#button");
const thumbnailLink = document.querySelector("#thumbnailImage");

// http://img.youtube.com/vi/YouTubeID/ImageFormat.jpg

buttonEl.addEventListener("click", () => {
  const url = link.value;
  const splitUrl = url.split("v=");
  const videoId = splitUrl[1];
//   console.log(videoId);
  const finalUrl = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
//   console.log(finalUrl);
  thumbnailLink.src = finalUrl;
});
