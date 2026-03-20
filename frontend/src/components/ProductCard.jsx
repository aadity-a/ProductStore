import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="product-image" />}
            <h3>{product.name}</h3>
            <span className="product-category">{product.category}</span>
            <div className="product-price">₹{product.price.toFixed(2)}</div>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
