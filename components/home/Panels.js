class Panels extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="panels py-14 text-center">
        <div class="container lg:max-w-[1100px]">
          <h2 class="mb-10 text-themeLg font-extrabold capitalize">
            now trending
          </h2>
          <p class="mb-6">See what everyone’s wearing right now</p>
          <div class="grid grid-cols-4 flex-wrap gap-12 py-6 text-center">
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/winter.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">
                winter fashion
              </h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/boots.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">boots</h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/night.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">
                night out
              </h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/holidays.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">
                holidays
              </h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/outerwear.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">
                outerwear
              </h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/white.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">
                white dress
              </h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/sweaters.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">
                sweaters
              </h2>
            </a>
            <a href="#" class="mb-4 block">
              <img
                class="inline-block"
                src="./assets/images/party.png"
                alt="cat-image" />
              <h2 class="mt-3 text-theme2Sm font-semibold uppercase">party</h2>
            </a>
          </div>
        </div>

        <ul
          class="panels-tags flex flex-wrap items-center justify-center gap-8">
          <li>
            <a
              class="block rounded-3xl border border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white"
              href="#">
              #Thanksgiving
            </a>
          </li>
          <li>
            <a
              class="block rounded-3xl border border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white"
              href="#">
              #NewYears
            </a>
          </li>
          <li>
            <a
              class="block rounded-3xl border border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white"
              href="#">
              #Knitted
            </a>
          </li>
          <li>
            <a
              class="block rounded-3xl border border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white"
              href="#">
              #Pajamas
            </a>
          </li>
          <li>
            <a
              class="block rounded-3xl border border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white"
              href="#">
              #WFH
            </a>
          </li>
          <li>
            <a
              class="block rounded-3xl border border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white"
              href="#">
              #FallFashion
            </a>
          </li>
        </ul>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-panels", Panels);
