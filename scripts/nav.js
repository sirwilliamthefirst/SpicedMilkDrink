// create an HTML template element
const navTemplate = document.createElement('template')

navTemplate.innerHTML = `
<link href=".scripts/nav.css" rel="stylesheet" type="text/css">
<script src=".scripts/scripts.js" async></script>
<nav> <!-- interactive nav bar -->
  <ul class = "sidebar">
      <li onclick=hideSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">About</a></li>
      
      </ul>
    <ul>
      <li class="hideOnMobile"><a href="/">Spiced Milk Drink</a></li>
      <li class="hideOnMobile"><a href="#">Contact</a></li>
      <li class="hideOnMobile"><a href="#">About</a></li>
      <li class="hideOnMobile"><a href="#">About</a></li>
      <li class="hideOnMobile"><a href="#">About</a></li>
      <li class="hideOnMobile"><a href="#">About</a></li>
      <li class="menu-button" onClick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -50 960 960" width="40">
 <path d="m88.7 133.2c4.8 109.6 66.91 388.6 138.29 458.3h364.9c29.2-29.1 41.5-116.6 71.5-192 12.2-30.5 48.1-167.6 54.6-165.3 146.5-28.2 94.4 201.9-63.8 190.4-19.5 37.9-34.1 76.9-35.2 76.1 290.3-80.2 282.5-287.7 115.97-313.4-8.8-13.48 8.1-41.6 3.5-55.9l-329.1-0.9zm-108.69 464.7c22.17 51.17 102.2 80.6 146.5 89.8h588.13c44.3-9.19 122.1-36.2 144.29-87.4l-412.1 4.7z"/>
</svg></a></li>
      </ul>
      </nav>

`
// create a navBar class, and clone the content of the template into it
class navBar extends HTMLElement {
 
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(navTemplate.content.cloneNode(true))
        
    }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define('nav-bar', navBar)

  