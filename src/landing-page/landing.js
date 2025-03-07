import image from "./background.jpg";

export default function Home() {
  content.innerHTML = "";
  const quote = document.createElement("div");
  quote.classList.add("quote")
  quote.innerHTML = 
  `<h1>Welcome To J's Pizza</h1>
  <p>Baking The Best Pizza since 2004</p>
  `;
  content.appendChild(quote);
  content.style.background = "";
  content.style.backgroundImage = `url(${image})`;
  content.style.backgroundRepeat = "no-repeat";
  content.style.backgroundSize = "cover";
}
