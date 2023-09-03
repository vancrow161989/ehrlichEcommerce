import { getCart } from "../../services/cartService.js";
import { getAllProducts } from "../../services/productsService.js";
import IconXMark from "../common/iconXMark.js";
import IconMinus from "../common/IconMinus.js";
import IconPlus from "../common/IconPlus.js";

const { cartItems, cartTotalAmount, cartTotalQuantity } = await getCart();
const allProducts = await getAllProducts();

function getProductsInCart() {
  const productsInCart = cartItems.map((cart) => {
    const product = allProducts.find((product) => product.id === cart.id);
    if (product) {
      return {
        ...product,
        qty: cart.quantity
      };
    }
    return null;
  });

  return productsInCart.length > 0
    ? productsInCart
        .map((product) => {
          const { id, name, thumbnail, salePrice, price, qty } = product;
          return `
          <div id="cart-product-id-${id}" class="flex mb-4">
            <div><img class="max-w-[90px] mb-4 mr-4" src="${thumbnail}" /></div>
            <div class="w-full">
              <p className="capitalize mb-3">${name}</p>
              <p class="mt-2 font-semibold mb-3">
                ${
                  salePrice
                    ? `<span class="sale-price mr-4 inline-block font-extrabold text-danger-500">$
                    ${salePrice}
                  </span>
                  <span class="line-through">$${price}</span>`
                    : `$${price}`
                }
              </p>

              <div class="add-to-cart-wrap mt-3">
                <p class="mb-3">Quantity</p>
                <div class="flex items-center mb-4">
                    <button class="w-4/12 btn btn-simple text-center h-7 btn-sm hover:text-white" type="button" onclick="decrementCartQuantity(${id})">
                        ${IconMinus("h-4 w-4 mx-auto")}
                    </button>
                    <div id="cart-quantity-${id}" class="qty h-[24.5px] w-4/12 text-center leading-[1.8] bg-gray-300 text-gray-700">
                        ${qty}
                    </div>
                    <button class="btn btn-simple text-center btn-sm w-4/12 h-7 hover:text-white" type="button" onclick="incrementCartQuantity(${id})">
                        ${IconPlus("h-4 w-4 mx-auto")}
                    </button>
                </div> 
            </div>
        
          </div>
        </div>
        `;
        })
        .reverse()
        .join("")
    : `<p class="text-center text-base py-10">Your shopping cart is empty.</p>`;
}

class CartSummary extends HTMLElement {
  connectedCallback() {
    const content = `
      <div
        id="cart_summary"
        class="hidden cart-summary bg-grayThemeS-500 child-dropdown absolute left-auto right-[-5px] top-[45px] w-[380px] border border-gray-100  px-5 pb-8 pt-4 shadow-lg">
        <div class="mb-4 text-right">
          <button
            class="h-6 w-6 rounded-full bg-gray-400 hover:bg-black"
            onclick="hideCart()"
            type="button">
            ${IconXMark("h-4 w-4 mx-auto text-gray-100")}
          </button>
        </div>
        <div class="mb-4 flex items-center justify-between">
          <p class="text-base font-semibold">
            Item Total: ${cartTotalQuantity}
          </p>
          <p class="text-base ">
            Total Amount: <span class="font-extrabold"> $${cartTotalAmount}</span>
          </p>
        </div>
        <div class="max-h-[65vh] overflow-y-auto pr-2 border-t-2 border-gray-200 pt-4">${getProductsInCart()}</div>
        ${
          cartTotalQuantity
            ? `<div class="pt-7"><a class="btn btn-primary btn-full" href="/cart">Cart Page</a></div>`
            : ""
        }
        
      </div>
    `;

    this.innerHTML = content;
  }
}

export default customElements.define("app-cartsummary", CartSummary);
