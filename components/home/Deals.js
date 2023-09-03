class Deals extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="deals py-8 lg:py-0">
        <div class="container">
          <div class="lg:flex lg:items-center lg:justify-between">
            <ul
              class="deals-list flex flex-wrap items-center justify-between lg:w-9/12 lg:flex-nowrap">
              <li class="w-6/12 py-10 text-center lg:w-full">
                <p class="text-themeMd font-semibold">
                  $5
                  <span
                    class="-mt-[2px] inline-block align-middle text-themeSm font-extrabold uppercase">
                    off
                  </span>
                </p>
                <p class="mt-3 text-themeXs uppercase">on orders above $50</p>
              </li>
              <li class="w-6/12 py-10 text-center lg:w-full">
                <p class="text-themeMd font-semibold">
                  $15
                  <span
                    class="-mt-[2px] inline-block align-middle text-themeSm font-extrabold uppercase">
                    off
                  </span>
                </p>
                <p class="mt-3 text-themeXs uppercase">on orders above $75</p>
              </li>
              <li class="w-6/12 py-10 text-center lg:w-full">
                <p class="text-themeMd font-semibold">
                  $20
                  <span
                    class="-mt-[2px] inline-block align-middle text-themeSm font-extrabold uppercase">
                    off
                  </span>
                </p>
                <p class="mt-3 text-themeXs uppercase">on orders above $150</p>
              </li>
              <li class="w-6/12 py-10 text-center lg:w-full">
                <p class="text-themeMd font-semibold">
                  $30
                  <span
                    class="-mt-[2px] inline-block align-middle text-themeSm font-extrabold uppercase">
                    off
                  </span>
                </p>
                <p class="mt-3 text-themeXs uppercase">on orders above $200</p>
              </li>
            </ul>
            <div class="text-center lg:w-4/12 lg:text-center">
              <a class="btn" href="#">check out all site-wide deals</a>
            </div>
          </div>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-deals", Deals);
