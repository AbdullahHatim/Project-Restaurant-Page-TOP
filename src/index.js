import "./styles.css";
import Home from "./Home-page/home.js";
import Menu from "./Menu-page/menu.js";
import Contact from "./Contact-page/contact.js";
import About from "./About-page/about.js";

Contact();

document.querySelector(".home").onclick = Home;
document.querySelector(".menu").onclick = Menu;
document.querySelector(".contact").onclick = Contact;
document.querySelector(".about").onclick = About;