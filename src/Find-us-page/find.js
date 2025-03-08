import "./find.css";

export default function Find() {
  content.innerHTML = /*html*/`
    <div class="map-container"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1511.3556886261135!2d-73.981177!3d40.746376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25907bca93641%3A0x4092de7df32d71fc!2sNew%20York%20Sports%20Club!5e0!3m2!1sen!2sus!4v1741459512744!5m2!1sen!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  `;

  content.style.background = "";
  content.style.backgroundImage = "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,1) 100%)";
}