class Footerlinks extends HTMLElement {
  connectedCallback() {
    const content = `
      <div class="footer-links pb-6 pt-16">
        <div class="container flex flex-wrap justify-start gap-12">
          <div class="widget-links">
            <h2 class="widget-title mb-5 text-theme0Sm font-semibold uppercase">
              company info
            </h2>
            <ul class="text-theme0Sm capitalize">
              <li class="mb-5">
                <a class="hover:underline" href="#">About THREADED</a>
              </li>
              <li class="mb-5">
                <a class="hover:underline" href="#">Affiliate</a>
              </li>
              <li class="mb-5"><a class="hover:underline" href="#">Blog</a></li>
              <li class="mb-5">
                <a class="hover:underline" href="#">Careers</a>
              </li>
            </ul>
          </div>
          <!-- widget  -->
          <div class="widget-links">
            <h2 class="widget-title mb-5 text-theme0Sm font-semibold uppercase">
              help & support
            </h2>
            <ul class="text-theme0Sm">
              <li class="mb-5">
                <a class="hover:underline" href="#">FAQ</a>
              </li>
              <li class="mb-5">
                <a class="hover:underline" href="#">Shipping</a>
              </li>
              <li class="mb-5">
                <a class="hover:underline" href="#">Returns</a>
              </li>
              <li class="mb-5">
                <a class="hover:underline" href="#">How to Order</a>
              </li>
              <li class="mb-5">
                <a class="hover:underline" href="#">How to Track</a>
              </li>
            </ul>
          </div>
          <!-- widget  -->
          <div class="widget-links">
            <h2 class="widget-title mb-5 text-theme0Sm font-semibold uppercase">
              customer care
            </h2>
            <ul class="text-theme0Sm">
              <li class="mb-5">
                <a class="hover:underline" href="#">Contact Us</a>
              </li>
              <li class="mb-5">
                <a class="hover:underline" href="#">Payment Methods</a>
              </li>
            </ul>
          </div>
          <!-- widget -->
          <!-- widget -->
          <div class="widget-group w-3/12 lg:ml-[10%]">
            <div class="widget-links">
              <h2
                class="widget-title mb-5 text-theme0Sm font-semibold uppercase">
                follow us
              </h2>
              <ul class="flex flex-wrap items-center gap-4">
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img src="./assets/images/fb.png" alt="facebook" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img
                      src="./assets/images/bx_bxl-instagram.svg"
                      alt="instagram" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img src="./assets/images/twitter.png" alt="twitter" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img src="./assets/images/youtube.png" alt="youtube" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img src="./assets/images/pinterest.png" alt="pinterest" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img src="./assets/images/tiktok.png" alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
            <!-- widget -->
            <div class="widget-links">
              <h2
                class="widget-title mb-5 text-theme0Sm font-semibold uppercase">
                We accept
              </h2>
              <ul class="flex flex-wrap items-center gap-4">
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img
                      class="max-w-[38px]"
                      src="./assets/images/visa.png"
                      alt="visa" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img
                      class="max-w-[38px]"
                      src="./assets/images/card2.png"
                      alt="card2" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img
                      class="max-w-[38px]"
                      src="./assets/images/card3.png"
                      alt="card3" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img
                      class="max-w-[38px]"
                      src="./assets/images/card4.png"
                      alt="card4" />
                  </a>
                </li>
                <li class="mb-5">
                  <a class="hover:opacity-50" href="#">
                    <img
                      class="max-w-[38px]"
                      src="./assets/images/card5.png"
                      alt="card5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- widget -->
        </div>
      </div>
    `;
    this.innerHTML = content;
  }
}

export default customElements.define("app-footerlinks", Footerlinks);
