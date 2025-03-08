import "./contact.css";

export default function Contact() {
  content.innerHTML = /*html*/`
  <div class="contact-container">
  <div class="container">
    <table>
      <tr>
        <th colspan="2">Owner</th>
      </tr>
      <tr>
        <th>Phone</th>
        <th>+249880035538</th>
      </tr>
      <tr>
        <th>Email</th>
        <th>theowner.123@jpizza.com</th>
      </tr>
    </table>
  </div>

  
  <div class="container">
    <table>
      <tr>
        <th colspan="2">Manager</th>
      </tr>
      <tr>
        <th>Phone</th>
        <th>+249820456238</th>
      </tr>
      <tr>
        <th>Email</th>
        <th>manager.192@jpizza.com</th>
      </tr>
    </table>
  </div>

  
  <div class="container">
    <table>
      <tr>
        <th colspan="2">Manager</th>
      </tr>
      <tr>
        <th>Phone</th>
        <th>+249172930482</th>
      </tr>
      <tr>
        <th>Email</th>
        <th>manager.202@jpizza.com</th>
      </tr>
    </table>
  </div>
  </div>`

  content.style.background = "";
  content.style.backgroundImage = "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,1) 100%)";
}