class Navbar extends HTMLElement {
  connectedCallback() {
    const content = `
      <nav role="navigation" class="main-nav">
        <ul class="bold-shadow flex gap-6 uppercase items-center">
          <li><a href="#">women</a></li>
          <li><a href="#">plus</a></li>
          <li><a href="#">men</a></li>
          <li><a href="#">accessories</a></li>
        </ul>
      </nav>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-navbar", Navbar);
