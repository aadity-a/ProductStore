package com.example.products.controller;

import com.example.products.model.Product;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final List<Product> products = new ArrayList<>();

    public ProductController() {
        products.add(new Product(1L, "UltraBook Laptop xyz", new BigDecimal("104000"), "Electronics", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop"));
        products.add(new Product(2L, "Smartphone Pro Gen", new BigDecimal("72000"), "Electronics", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop"));
        products.add(new Product(3L, "Wireless Headphones", new BigDecimal("20000"), "Electronics", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop"));
        products.add(new Product(4L, "Ergonomic Office Chair", new BigDecimal("16000"), "Furniture", "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&h=400&fit=crop"));
        products.add(new Product(5L, "Standing Desk", new BigDecimal("36000"), "Furniture", "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=400&fit=crop"));
        products.add(new Product(6L, "Clean Code Book", new BigDecimal("3600"), "Books", "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=400&fit=crop"));
        products.add(new Product(7L, "Spring Boot in Action", new BigDecimal("3200"), "Books", "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=400&fit=crop"));
        products.add(new Product(8L, "Designer Sunglasses", new BigDecimal("12000"), "Fashion", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=400&fit=crop"));
        products.add(new Product(9L, "Running Shoes", new BigDecimal("8000"), "Fashion", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop"));
        products.add(new Product(10L, "Ceramic Coffee Mug", new BigDecimal("1160"), "Accessories", "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=500&h=400&fit=crop"));
    }

    @GetMapping
    public List<Product> getProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false, defaultValue = "asc") String sortRule) {
        
        return products.stream()
                .filter(p -> category == null || category.isEmpty() || p.getCategory().equalsIgnoreCase(category))
                .filter(p -> minPrice == null || p.getPrice().compareTo(minPrice) >= 0)
                .filter(p -> maxPrice == null || p.getPrice().compareTo(maxPrice) <= 0)
                .sorted((p1, p2) -> "desc".equalsIgnoreCase(sortRule) 
                        ? p2.getPrice().compareTo(p1.getPrice()) 
                        : p1.getPrice().compareTo(p2.getPrice()))
                .collect(Collectors.toList());
    }
}
