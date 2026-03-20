import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api/productService';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './index.css';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        sort: 'asc'
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            loadProducts();
        }, 500);
        return () => clearTimeout(timer);
    }, [filters]);

    const loadProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchProducts(filters);
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const handleAddToCart = (product) => {
        setCartItems(prev => [...prev, product]);
    };

    return (
        <div className="app-container">
            <header>
                <h1>Products Store</h1>
            </header>
            
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
            
            <main className="main-content">
                
                <div className="product-list-container">
                    {loading && <div className="loading" style={{ position: 'absolute', background: 'rgba(255,255,255,0.7)', padding: '5px 10px', borderRadius: '4px' }}>Updating...</div>}
                    {error && <div className="error">Error: {error}</div>}
                    {!loading && !error && products.length === 0 && (
                        <div className="no-products">No products found.</div>
                    )}
                    
                    {products.length > 0 && (
                        <div className="product-grid" style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.2s' }}>
                            {products.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={handleAddToCart} 
                                />
                            ))}
                        </div>
                    )}
                </div>

                <Cart cartItems={cartItems} />
            </main>
        </div>
    );
}

export default App;
