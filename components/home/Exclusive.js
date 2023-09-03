class Exclusive extends HTMLElement {
  connectedCallback() {
    const content = `
      <div
        class="exclusive bg-cover bg-center bg-no-repeat py-6"
        style="background-image: url('./assets/images/bg-exclusive.png')">
        <div class="container">
          <div class="flex flex-wrap items-center gap-12 lg:flex-nowrap">
            <p
              class="w-5/12 text-themeMd font-extrabold uppercase text-white lg:text-right">
              black friday exclusive
            </p>
            <p class="w-4/12 text-themeSm font-semibold uppercase text-white">
              free shipping on all orders for
              <br class="hidden lg:block" />
              VIP 2 and up!
            </p>
            <div class="w-2/12 text-center">
              <button class="btn btn-secondary">shop now</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-exclusive", Exclusive);
