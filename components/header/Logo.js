class Logo extends HTMLElement {
  connectedCallback() {
    const content = DOMPurify.sanitize(`
      <div class="logo mx-auto">
        <h1 class="hidden">Threaded</h1>
        <img src="./assets/images/logo.svg" alt="" />
      </div>
    `);

    this.innerHTML = content;
  }
}

export default customElements.define("app-logo", Logo);
