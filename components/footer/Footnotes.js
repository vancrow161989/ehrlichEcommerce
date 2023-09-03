class Footnotes extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="foot-notes pb-14 pt-2">
        <div class="container flex items-center justify-between">
          <span class="copyright">©2021 THREADED All Rights Reserved.</span>
          <div class="foot-brand">
            <a href="/"><img src="./assets/images/logo.svg" alt="" /></a>
          </div>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-footnotes", Footnotes);
