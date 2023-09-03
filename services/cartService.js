import config from "../config.json" assert { type: "json" };

export async function getCart() {
  try {
    const response = await fetch(`${config.baseUrl}${config.cartApiUrl}`);
    return await response.json();
  } catch (error) {
    console.log("Unable to fetch:", error);
  }
}
