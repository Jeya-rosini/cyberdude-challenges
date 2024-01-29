const adviceId = document.querySelector("#advice");
const buttonEl = document.querySelector("#button")

const url = `https://api.adviceslip.com/advice`;

buttonEl.addEventListener('click', () => {
    window.location.href="/"
})

// const getAdvice = fetch(url).then(response => {
//     // console.log(response);
//     return response.json()
// })
//     .then(advice => {
//         const message = advice.slip.advice;
//         return message
//     }).catch(error => {
//      console.error("we dont have any advice")
// })
// console.log(getAdvice);

async function getAdvice() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    // console.log(response);
    return json;
  } catch (error) {
    console.log("there is some error");
  }
}
const advice = await getAdvice();
adviceId.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 56 56" class="fill-[#F8F4EC]"><path d="M5.524 49.856c.984 0 1.757-.82 1.757-1.805V7.926a1.76 1.76 0 0 0-1.757-1.782a1.766 1.766 0 0 0-1.782 1.782V48.05c0 .984.774 1.804 1.782 1.804m11.695 0c.984 0 1.758-.82 1.758-1.805V7.926a1.76 1.76 0 0 0-1.758-1.782a1.766 1.766 0 0 0-1.781 1.782V48.05c0 .984.773 1.804 1.78 1.804m11.695 0c.984 0 1.758-.82 1.758-1.805V7.926a1.76 1.76 0 0 0-1.758-1.782a1.766 1.766 0 0 0-1.781 1.782V48.05c0 .984.773 1.804 1.781 1.804m14.18-14.672l7.758-5.18c1.406-.938 1.36-2.93 0-3.867l-7.758-5.274c-1.781-1.218-3.68-.539-3.68 1.617v11.11c0 2.086 1.992 2.719 3.68 1.594"/></svg>
${advice.slip.advice}`;
console.log(advice);

