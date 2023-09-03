import { getAllProducts } from "../../services/productsService.js";
import IconPlus from "../common/IconPlus.js";
import IconMinus from "../common/IconMinus.js";
const allProducts = await getAllProducts();

const productHtml = allProducts
  .map((product) => {
    const { id, name, thumbnail, salePrice, price } = product;

    return `
      <div id="product-id-${id}" class="recent-box">
        <a href="#"><img src="${thumbnail}" /></a>
        <h3 class="my-3 lg:h-[37px] lg:overflow-hidden">
          <a href="#">${name}</a>
        </h3>
        <p class="mt-2 font-semibold">
          ${
            salePrice
              ? `<span class="sale-price mr-4 inline-block font-extrabold text-danger-500">$
                ${salePrice}
              </span>
              <span class="line-through">$${price}</span>`
              : `$${price}`
          }
        </p>
        <div class="add-to-cart-wrap mt-6">
          <div class="mb-4 flex items-center">
            <button
              class="btn btn-simple btn-sm h-10 w-4/12 text-center hover:text-white"
              type="button"
              onclick="decrementQuantity(${id})">
              ${IconMinus("h-4 w-4 mx-auto")}
            </button>
            <div
              id="product-quantity-${id}"
              class="qty h-[35px] w-4/12 bg-gray-300 text-center leading-[2.5] text-gray-700">
              1
            </div>
            <button
              class="btn btn-simple btn-sm h-10 w-4/12 text-center hover:text-white"
              type="button"
              onclick="incrementQuantity(${id})">
              ${IconPlus("h-4 w-4 mx-auto")}
            </button>
          </div>
          <button
            class="btn block h-[35px] w-full px-3 py-0 text-base"
            onclick="addToCart(${id})"
            type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    `;
  })
  .join("");

class RecentProducts extends HTMLElement {
  connectedCallback() {
    const content = `
        <div class="recent-products py-14">
          <div class="container">
            <h2
              class="mb-10 text-center text-themeLg font-extrabold capitalize">
              recently bought
            </h2>
            <div
              class="recent-list grid grid-cols-5 flex-wrap gap-12 py-6">${productHtml}</div>
          </div>
        </div>
      `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-recent-products", RecentProducts);
