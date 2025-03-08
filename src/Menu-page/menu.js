import "./menu.css";

export default function Menu(){
  content.innerHTML = "";
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  
  menu.appendChild(menuItem("Pizza",
    ["Margherita (S)", "Margherita (M)", "Margherita (L)",
     "Pepperoni (S)", "Pepperoni (M)", "Pepperoni (L)",
     "Vegetarian (S)", "Vegetarian (M)", "Vegetarian (L)",
     "Hawaiian (S)", "Hawaiian (M)", "Hawaiian (L)",
     "Meat Lovers (S)", "Meat Lovers (M)", "Meat Lovers (L)"],
    ["10.99$", "12.99$", "14.99$",
     "12.99$", "14.99$", "16.99$",
     "11.99$", "13.99$", "15.99$",
     "13.99$", "15.99$", "17.99$",
     "14.99$", "16.99$", "18.99$"]));
  menu.appendChild(menuItem("Burgers",
    ["Classic Burger", "Cheeseburger", "Bacon Burger", "Mushroom Swiss", "BBQ Burger"],
    ["8.99$", "9.99$", "10.99$", "11.99$", "12.99$"]));
  menu.appendChild(menuItem("Pasta",
    ["Spaghetti Bolognese", "Fettuccine Alfredo", "Penne Arrabbiata", "Lasagna", "Carbonara"],
    ["10.99$", "11.99$", "12.99$", "13.99$", "14.99$"]));
  menu.appendChild(menuItem("Salads",
    ["Caesar Salad", "Greek Salad", "Caprese Salad", "Cobb Salad", "Spinach Salad"],
    ["7.99$", "8.99$", "9.99$", "10.99$", "11.99$"]));
  menu.appendChild(menuItem("Desserts",
    ["Chocolate Cake", "Cheesecake", "Apple Pie", "Ice Cream", "Tiramisu"],
    ["6.99$", "7.99$", "8.99$", "5.99$", "9.99$"]));
  menu.appendChild(menuItem("Drinks",
    ["Coke", "Sprite", "Iced Tea", "Lemonade", "Water"],
    ["2.99$", "2.99$", "3.99$", "3.99$", "1.99$"]));

  content.appendChild(menu);
  content.style.background = "";
  content.style.backgroundImage = "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,1) 100%)";
}
//TODO: set name and price against each other
function menuItem(category, names = [], prices = []) {
  const table = document.createElement("table");
  table.classList.add("menu-item");

  let tableHTML = /*html*/ `
    <thead>
      <tr>
        <th colspan="2">${category}</th>
      </tr>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
  `;

  for (let i = 0; i < names.length; i++) {
    tableHTML += /*html*/ `
      <tr>
        <td>${names[i]}</td>
        <td>${prices[i]}</td>
      </tr>
    `;
  }

  tableHTML += /*html*/ `
    </tbody>
  `;

  table.innerHTML = tableHTML;
  return table;
}