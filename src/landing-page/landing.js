import image from "./background.jpg";

function Home() {
  content.style.background = "";
  content.style.background = `url(${image})`;
  content.style.backgroundRepeat = "no-repeat";
  content.style.backgroundSize = "cover";
}

export default Home;