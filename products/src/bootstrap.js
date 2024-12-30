import faker from 'faker';

const mount = (ele) => {
  let products = '<div class="products-container">';
  
  for (let i = 0; i < 20; i++) {
    products += `
      <div class="product-card">
        <div class="product-name">${faker.commerce.productName()}</div>
      </div>
    `;
  }
  
  products += '</div>';
  ele.innerHTML = products;

  // Inject styles directly for simplicity
  const style = document.createElement('style');
  style.innerHTML = `
    .products-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
      padding: 20px;
      background-color: #f8f9fa;
    }
    .product-card {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
    .product-name {
      font-family: 'Arial', sans-serif;
      font-size: 14px;
      font-weight: bold;
      color: #333;
      text-align: center;
    }
  `;
  document.head.appendChild(style);
};

if (process.env.NODE_ENV === 'development') {
  const ele = document.querySelector('#dev-products');

  if (ele) {
    mount(ele);
  }
}

/**
 * This script generates a list of 20 random product names using the Faker library
 * and inserts them into an HTML element with the ID 'dev-products'.
 * 
 * Situation 1: Running in Development in Isolation
 * - This script can be run directly in a development environment where the HTML element
 *   with the ID 'dev-products' is present in the DOM.
 * - Useful for local development and testing of the product list generation feature.
*/

if(process.env.NODE_ENV === 'development') {
  const ele = document.querySelector('#dev-products');
  
  if(ele) {
    mount(ele);
  }       
}
/**
 * Situation 2: Running through Container App
 * - When running as part of a larger container application, ensure that the container
 *   application provides the necessary HTML structure, including the element with the ID 'dev-products'.
 * - This script assumes that the container application will handle the mounting and unmounting
 *   of this micro-frontend.
 * 
 *   No guarantees are made about the presence of the 'dev-products' element in the container application.
 *   We do not want try to immediately render the products list in this script because the container application
*/
export { mount };