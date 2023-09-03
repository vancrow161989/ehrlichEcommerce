import config from "../config.json" assert { type: "json" };

export async function getAllProducts() {
  try {
    const response = await fetch(`${config.baseUrl}${config.productsApiUrl}`);
    return await response.json();
  } catch (error) {
    console.log("Unable to fetch:", error);
  }
}
