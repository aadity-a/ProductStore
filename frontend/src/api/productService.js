export const fetchProducts = async (filters) => {
    let url = new URL('http://localhost:8080/api/products');
    if (filters.category) url.searchParams.append('category', filters.category);
    if (filters.minPrice) url.searchParams.append('minPrice', filters.minPrice);
    if (filters.maxPrice) url.searchParams.append('maxPrice', filters.maxPrice);
    if (filters.sort) url.searchParams.append('sortRule', filters.sort);
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};
