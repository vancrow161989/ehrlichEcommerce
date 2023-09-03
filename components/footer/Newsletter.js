class Newsletter extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="newsletter bg-black px-4 py-6 text-center">
        <div class="container flex items-center justify-center gap-14">
          <p class="text-themeMd font-extrabold uppercase text-white">
            sign up for exclusive deals and updates
          </p>

          <form class="w-[26%]" action="/" method="POST">
            <div class="input-group relative">
              <input
                class="pr-12"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address" />
              <button
                class="absolute right-0 top-0 h-[35px] w-[35px] bg-white text-center"
                type="submit">
                <img
                  class="inline-block"
                  src="./assets/images/chevron-right.png"
                  alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-newsletter", Newsletter);
