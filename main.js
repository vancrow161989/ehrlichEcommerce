const config = {
  baseUrl: "http://localhost:3000",
  productsApiUrl: "/products",
  cartApiUrl: "/cart"
};

const showCart = () => {
  const cartEl = document.getElementById("cart_summary");
  cartEl.classList.add("showCart");
};

const hideCart = () => {
  const cartEl = document.getElementById("cart_summary");
  cartEl.classList.remove("showCart");
};

async function getCart() {
  try {
    const response = await fetch(`${config.baseUrl}${config.cartApiUrl}`);
    return await response.json();
  } catch (err) {
    console.error("Error fetching the cart:", err);
  }
}

async function getProducts() {
  try {
    const response = await fetch(`${config.baseUrl}${config.productsApiUrl}`);
    return await response.json();
  } catch (err) {
    console.error("Error fetching the cart:", err);
  }
}

async function updateCartItem(cartItems, products) {
  const totalAmount = calculateTotalAmount(cartItems, products);
  const totalQuantity = calculateTotalQuantity(cartItems);

  const updatedCart = {
    cartItems: cartItems,
    cartTotalAmount: parseFloat(totalAmount.toFixed(2)),
    cartTotalQuantity: totalQuantity
  };

  return await fetch(`${config.baseUrl}${config.cartApiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedCart)
  });
}

function calculateTotalAmount(cartItems, products) {
  const totalAmount = cartItems.reduce((accumulator, item) => {
    const currentProduct = products.find((product) => product.id === item.id);
    const productPrice = currentProduct?.salePrice || currentProduct.price;

    if (productPrice !== null) {
      return accumulator + productPrice * item.quantity;
    } else {
      console.error(`Product with id ${item.id} not found`);
      return accumulator;
    }
  }, 0);

  return totalAmount;
}

function calculateTotalQuantity(cartItems) {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
}

async function addToCart(id) {
  const { products, cartItems, cartItem } = await getProductsAndCart(id);
  const { name } = products.find((product) => product.id === id);
  const quantityCounterEl = document.getElementById(`product-quantity-${id}`);
  const quantityCounter = parseInt(quantityCounterEl.innerHTML);

  if (cartItem) {
    const cartItemIndex = cartItems.indexOf(cartItem);
    cartItems[cartItemIndex].quantity += quantityCounter;
  } else {
    cartItems.push({
      id,
      quantity: quantityCounter
    });
  }

  updateCartItem(cartItems, products)
    .then(() => {
      const successMessage = `${quantityCounter} ${name} added to the cart successfully`;
      const message = { message: successMessage, isSuccess: true };

      localStorage.setItem("alertMessage", JSON.stringify(message));
    })
    .catch((error) => {
      console.error("Error updating cart item:", error);
      Toastify({
        text: `There was an error while adding the item to the cart.`,
        close: true,
        gravity: "bottom",
        position: "center",
        duration: 5000,
        stopOnFocus: true,
        style: {
          background: "red ",
          color: "white"
        }
      }).showToast();
    });
}

async function getProductsAndCart(id) {
  const cart = await getCart();
  const products = await getProducts();
  const { cartItems } = cart;
  const cartItem = cartItems?.find((item) => item.id === id);

  return { products, cartItems, cartItem };
}

async function incrementQuantity(id) {
  const quantityCounter = document.getElementById(`product-quantity-${id}`);

  quantityCounter.textContent = parseInt(quantityCounter.innerHTML) + 1;
}

async function decrementQuantity(id) {
  const quantityCounter = document.getElementById(`product-quantity-${id}`);

  if (parseInt(quantityCounter.innerHTML) > 1)
    quantityCounter.textContent = parseInt(quantityCounter.innerHTML) - 1;
  return;
}

async function incrementCartQuantity(id) {
  const { products, cartItems, cartItem } = await getProductsAndCart(id);
  const { name } = products.find((product) => product.id === id);
  if (cartItem) {
    console.log(cartItem);
    const cartItemIndex = cartItems.indexOf(cartItem);
    cartItems[cartItemIndex].quantity += 1;
  } else {
    cartItems.push({
      id,
      quantity: 1
    });
  }
  updateCartItem(cartItems, products)
    .then(() => {
      const successMessage = `1 ${name} successfully added to cart`;
      const message = { message: successMessage, isSuccess: true };

      localStorage.setItem("alertMessage", JSON.stringify(message));
    })
    .catch((error) => {
      console.error("Error updating cart item:", error);
      Toastify({
        text: `There was an error while adding the item to the cart.`,
        close: true,
        gravity: "bottom",
        position: "center",
        duration: 5000,
        stopOnFocus: true,
        style: {
          background: "red ",
          color: "white"
        }
      }).showToast();
    });
}

async function decrementCartQuantity(id) {
  const { products, cartItems, cartItem } = await getProductsAndCart(id);
  const { name } = products.find((product) => product.id === id);
  if (cartItem) {
    const cartItemIndex = cartItems.indexOf(cartItem);
    if (cartItems[cartItemIndex].quantity > 1) {
      cartItems[cartItemIndex].quantity -= 1;

      updateCartItem(cartItems, products)
        .then(() => {
          const successMessage = `1 item for ${name} was successfully removed from cart.`;
          const message = { message: successMessage, isSuccess: true };

          localStorage.setItem("alertMessage", JSON.stringify(message));
        })
        .catch((error) => {
          console.error("Error updating cart item:", error);
          Toastify({
            text: `There was an error while removing the item to the cart.`,
            close: true,
            gravity: "bottom",
            position: "center",
            duration: 5000,
            stopOnFocus: true,
            style: {
              background: "red ",
              color: "white"
            }
          }).showToast();
        });
      return;
    }
    if (cartItems[cartItemIndex].quantity === 1) {
      const { name } = products.find((product) => product.id === id);
      const newCartItems = cartItems.filter(
        (cartItem) => cartItem !== cartItems[cartItemIndex]
      );

      updateCartItem(newCartItems, products)
        .then(() => {
          const successMessage = `${name} successfully removed from cart.`;
          const message = { message: successMessage, isSuccess: true };

          localStorage.setItem("alertMessage", JSON.stringify(message));
        })
        .catch((error) => {
          console.error("Error updating cart item:", error);
          Toastify({
            text: `There was an error while removing the item to the cart.`,
            close: true,
            gravity: "bottom",
            position: "center",
            duration: 5000,
            stopOnFocus: true,
            style: {
              background: "red ",
              color: "white"
            }
          }).showToast();
        });
      return;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const alertMessage = JSON.parse(localStorage.getItem("alertMessage"));
  if (alertMessage) {
    Toastify({
      text: `${alertMessage.message}`,
      close: true,
      gravity: "bottom",
      position: "center",
      duration: 5000,
      stopOnFocus: true,
      style: {
        background: alertMessage.isSuccess ? "green" : "red ",
        color: "white"
      }
    }).showToast();
    localStorage.removeItem("alertMessage"); // Clear the message after displaying
  }
});
