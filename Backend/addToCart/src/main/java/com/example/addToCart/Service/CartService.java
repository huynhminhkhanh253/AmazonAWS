package com.example.addToCart.Service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.addToCart.Entity.Cart;
import com.example.addToCart.Entity.CartDetails;
import com.example.addToCart.Entity.Product;
import com.example.addToCart.Repository.AddToCartRepository;

@Service
public class CartService {

    @Autowired
    AddToCartRepository addToCartRepository;

    @Autowired
    ProductDetailsProxy productDetailsProxy;


    public void addItemToCartSerivce(Cart cart){
        addToCartRepository.save(cart);
    }
    public void removeItemFromCartService(long id){
        addToCartRepository.deleteById(id);
    }
    public CartDetails displayAllProducts(UUID userId){
        CartDetails cartDetails = new CartDetails();
        cartDetails.setUserId(userId);
        ArrayList<Product> productList = new ArrayList<>();
        ArrayList<Cart> cartlist = addToCartRepository.findByUserId(userId);

        for(int i = 0; i < cartlist.size(); i++){
            Product product = productDetailsProxy.getProductById(cartlist.get(i).getProductId());
            product.setId2(cartlist.get(i).getId());
            productList.add(product);
        }

        cartDetails.setList(productList);
        return cartDetails;
    }
    public ArrayList<Cart> showAll(){
        return addToCartRepository.findAll();
    }
    public ArrayList<Cart> showAllByUser(UUID userId){
        return addToCartRepository.findByUserId(userId);
    }
}
