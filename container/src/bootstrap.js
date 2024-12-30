import { mount as productMount} from 'products/ProductsIndex'; // Import the ProductsIndex from the products project
import { mount as cartMount } from 'cart/CartShow'; // Import the CartShow from the cart project

productMount(document.querySelector('#my-products')); // Mount the ProductsIndex component in the container application
cartMount(document.querySelector('#my-cart'));