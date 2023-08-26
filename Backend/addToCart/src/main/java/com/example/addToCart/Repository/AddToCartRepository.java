package com.example.addToCart.Repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.addToCart.Entity.Cart;

import java.util.ArrayList;
import java.util.UUID;


@Repository
public interface AddToCartRepository extends CrudRepository<Cart,Long> {
    Cart save(Cart cart);
    void delete(Cart cart);
    ArrayList<Cart> findByUserId(UUID userId);
}
