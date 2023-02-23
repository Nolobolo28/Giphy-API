import { apiKey } from "./apikey.js";
const form = document.querySelector("#my-form");
const img = document.querySelector("#img1");
const div1 = document.querySelector("#div1");
let text = "";
let imgSrc;

async function getImg() {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${text}&limit=3&offset=0&rating=pg-13&lang=en`;
    const response1 = await fetch(url);
    const json1 = await response1.json();
    imgSrc = json1.data[0].embed_url;
  } catch (err) {
    console.error(err);
  }
  showImg(imgSrc);
}

function showImg(imgUrl) {
  img.src = imgUrl;
  div1.style.display = "block";
  setTimeout(clear, 5000);
}

function getText(ev) {
  ev.preventDefault();
  let myForm = ev.target;
  let fd = new FormData(myForm);
  for (const [key, value] of fd) {
    text = value;
  }
  getImg();
}

function clear() {
  div1.style.display = "none";
  form.reset();
}

form.addEventListener("submit", getText);
