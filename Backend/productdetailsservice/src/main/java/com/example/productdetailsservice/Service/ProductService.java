package com.example.productdetailsservice.Service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.productdetailsservice.Entity.Product;
import com.example.productdetailsservice.Repository.ProductRepo;

@Service
public class ProductService {
    
    @Autowired
    ProductRepo productRepo;

    public Product saveDataToDB(Product product){
        product.setProductID(UUID.randomUUID());
        return productRepo.save(product);
    }
    public ArrayList<Product> findAllProducts(){
        return productRepo.findAll();
    }
    public Product getProductDetails(UUID productid){
        return productRepo.findByProductID(productid);
    }
    public ArrayList<Product> findBrandProducts(String soldby){
        return productRepo.findAllBysoldby(soldby);
    }
}
