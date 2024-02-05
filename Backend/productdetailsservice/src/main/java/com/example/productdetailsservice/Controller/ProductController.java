package com.example.productdetailsservice.Controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.productdetailsservice.Entity.Product;
import com.example.productdetailsservice.Service.ProductService;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin
@RestController
@RequestMapping("/amazon/products")

public class ProductController {
    @Autowired
    ProductService productService; 

    @PostMapping("/save")
    public Product saveData(@RequestBody Product product){
        return productService.saveDataToDB(product);
    }
    @GetMapping("/getAllProducts")
    public ArrayList<Product> getAllProducts(){
        return productService.findAllProducts();
    }
    @GetMapping("/search/{productID}")
    public Product getProductById(@PathVariable UUID productID){
        return productService.getProductDetails(productID);
    }
    @GetMapping("/getProductApple")
    public ArrayList<Product> getAppleProduct(String soldby) {
        soldby = "Apple";
        return productService.findBrandProducts(soldby);
    }
    @GetMapping("/getProductSamsung")
    public ArrayList<Product> getSamsungProduct(String soldby) {
        soldby = "Samsung";
        return productService.findBrandProducts(soldby);
    }
    

}
