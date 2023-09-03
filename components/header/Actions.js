import CartSummary from "../cart/CartSummary.js";

class Actions extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="header-actions">
        <ul class="list-icons flex items-center gap-6">
          <li>
            <a class="hover:opacity-50" href="#">
              <img src="./assets/images/bx_bx-user.svg" alt="user" />
            </a>
          </li>
          <li class="relative">
            <a class="hover:opacity-50 cursor-pointer" onclick="showCart(this)">
              <img src="./assets/images/bx_bx-shopping-bag.svg" alt="bag" />
            </a>
            <app-cartsummary></app-cartsummary>
          </li>
          <li>
            <a class="hover:opacity-50" href="#">
              <img src="./assets/images/bx_bx-heart.svg" alt="heart" />
            </a>
          </li>
          <a class="hover:opacity-50" href="#">
            <img src="./assets/images/bx_bx-support.svg" alt="support" />
          </a>
          <li>
            <a class="hover:opacity-50" href="#">
              <img src="./assets/images/bx_bx-search.svg" alt="search" />
            </a>
          </li>
          <li>
            <a
              class="flex h-[35px] items-center gap-2 rounded-full border border-[#F2F2F2] px-2  hover:bg-gray-200"
              href="#">
              <img
                class="h-auto w-auto"
                src="./assets/images/us-flag.png"
                alt="language Selector" />
              USD $
              <span>
                <img
                  src="./assets/images/chevron-down.png"
                  alt="language Selector" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    `;
    this.innerHTML = content;
  }
}
export default customElements.define("app-actions", Actions);
