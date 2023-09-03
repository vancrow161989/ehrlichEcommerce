class Showcase extends HTMLElement {
  connectedCallback() {
    const content = `
      <div
        class="showcase bg-cover bg-center py-12"
        style="background-image: url('./assets/images/bg-newarrivals.png')">
        <div class="container flex justify-end">
          <div class="showcase-inner lg:w-[495px]">
            <h2 class="mb-9 text-theme2lg font-extrabold uppercase text-white">
              new arrivals
            </h2>
            <p class="mb-12 text-theme3sm font-semibold text-white">
              Get ready for the holidays with us!
            </p>
            <button class="btn btn-secondary">shop now</button>
          </div>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-showcase", Showcase);
