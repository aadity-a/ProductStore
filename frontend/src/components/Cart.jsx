import React from 'react';

const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <aside className="cart-sidebar">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="cart-item-info">
                                {item.imageUrl && <img src={item.imageUrl} alt={item.name} className="cart-item-thumbnail" />}
                                <span className="cart-item-name">{item.name}</span>
                            </div>
                            <span className="cart-item-price">₹{item.price.toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Cart;
