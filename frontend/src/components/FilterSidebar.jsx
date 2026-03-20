import React from 'react';

const FilterSidebar = ({ filters, onFilterChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
        }
    };

    return (
        <div className="filter-bar">
            
            <div className="filter-group">
                <label>Category</label>
                <select name="category" value={filters.category} onChange={handleChange}>
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Books">Books</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Min Price</label>
                <input 
                    type="number" 
                    name="minPrice" 
                    value={filters.minPrice} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    placeholder="Min Price" 
                    min="0"
                />
            </div>

            <div className="filter-group">
                <label>Max Price</label>
                <input 
                    type="number" 
                    name="maxPrice" 
                    value={filters.maxPrice} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown}
                    placeholder="Max Price" 
                    min="0"
                />
            </div>

            <div className="filter-group">
                <label>Sort By</label>
                <select name="sort" value={filters.sort} onChange={handleChange}>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
            
        </div>
    );
};

export default FilterSidebar;
