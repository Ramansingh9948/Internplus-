let url = "https://api.adviceslip.com/advice";

let quote = document.querySelector(".quote");
let button = document.querySelector(".dice");
let head = document.querySelector(".head");

button.addEventListener("click", async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    quote.innerText = `"${data.slip.advice}"`;
    head.innerText = `ADVICE #${data.slip.id}`;
  } catch (err) {
    console.log(err);
  }
});

// Remove the window.addEventListener code, as it's not needed