package com.example.addToCart.Service;

import java.util.UUID;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.addToCart.Entity.Product;

@FeignClient(name="product-details", url="http://amazonproductdetails-1304216633.ap-southeast-1.elb.amazonaws.com")


public interface ProductDetailsProxy {
    @GetMapping("/amazon/products/search/{productID}")
    public Product getProductById(@PathVariable UUID productID);
}
