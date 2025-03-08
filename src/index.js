import "./styles.css";
import Home from "./Home-page/home.js";
import Menu from "./Menu-page/menu.js";
import Contact from "./Contact-page/contact.js";
import Find from "./Find-us-page/find.js";

Home();

document.querySelector(".home").onclick = Home;
document.querySelector(".menu").onclick = Menu;
document.querySelector(".contact").onclick = Contact;
document.querySelector(".find").onclick = Find;