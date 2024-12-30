import faker from 'faker';

const mount = (ele) => {
    // Add cart text with a styled container
    const cartText = `
        <div class="cart-container">
            <div class="cart-text">
                You have <span class="cart-number">${faker.random.number()}</span> items in your cart
            </div>
        </div>
    `;
    ele.innerHTML = cartText;

    // Inject styles directly for simplicity
    const style = document.createElement('style');
    style.innerHTML = `
        .cart-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .cart-text {
            font-family: 'Arial', sans-serif;
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
        .cart-number {
            color: #007bff;
            font-size: 20px;
        }
    `;
    document.head.appendChild(style);
};

if (process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#dev-cart');

    if (ele) {
        mount(ele);
    }
}

export { mount };
