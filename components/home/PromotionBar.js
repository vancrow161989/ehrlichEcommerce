class PromotionBar extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="promotion-bar bg-grayTheme-500 py-3">
        <div class="container">
          <ul class="promotion-list flex items-center justify-between gap-6">
            <li>
              <a class="flex items-center gap-4" href="#">
                <img src="./assets/images/crown.svg" alt="crown" />
                <span>Exclusive Deals for VIP 2 and up!</span>
              </a>
            </li>
            <li>
              <a class="flex items-center gap-4" href="#">
                <img src="./assets/images/star.svg" alt="" />
                <span>Weekly New Arrivals</span>
              </a>
            </li>
            <li>
              <a class="flex items-center gap-4" href="#">
                <img src="./assets/images/ship.svg" alt="" />
                <span>Free Shipping On Orders Over $100</span>
              </a>
            </li>
            <li>
              <a class="flex items-center gap-4" href="#">
                <img src="./assets/images/tracks.svg" alt="" />
                <span>Track Your Order</span>
              </a>
            </li>
            <li>
              <a class="flex items-center gap-4" href="#">
                <img src="./assets/images/tag.svg" alt="" />
                <span>10% Off On Your First Order!</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-promotion-bar", PromotionBar);
