import { getLocalStorage, setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam('product');
const product = new ProductDetails(productId, dataSource);

product.init();

console.log(dataSource.findProductById("880RR"));

// function addProductToCart(product) {
//   const items = getLocalStorage("so-cart") || [];
//   items.push(product)
//   setLocalStorage("so-cart", items);
// }
// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
