const ipAddress = document.querySelector("#ipAddress");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  // console.log(this);
  if (this.readyState === 4 && this.status === 200) {
    //   console.log(xhr.responseText);
      
      ipAddress.textContent = xhr.responseText;
  }
};
xhr.open(
  "GET",
  "https://ipv4.icanhazip.com/"
);
xhr.send();
