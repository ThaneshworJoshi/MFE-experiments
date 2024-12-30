import faker from 'faker';


const mount =  (ele => {    
  let products = '';
  
  for (let i = 0; i < 20; i++) {
    products += `<div>${faker.commerce.productName()}</div>`;
  }

  ele.innerHTML = products;
})



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