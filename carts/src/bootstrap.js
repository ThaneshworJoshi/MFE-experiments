import faker from 'faker';


const mount = (ele) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
    ele.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#dev-cart');

    if(ele) {
        mount(ele);
    }
}

export { mount };