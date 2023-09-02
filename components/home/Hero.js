class Hero extends HTMLElement {
  connectedCallback() {
    const content = DOMPurify.sanitize(`
      <a href="#" class="hero block">
        <img
          class="mx-auto w-full max-h-[1300px]"
          src="./assets/images/Hero.png"
          alt="hero-image" />
      </a>
    `);

    this.innerHTML = content;
  }
}

export default customElements.define("app-hero", Hero);
