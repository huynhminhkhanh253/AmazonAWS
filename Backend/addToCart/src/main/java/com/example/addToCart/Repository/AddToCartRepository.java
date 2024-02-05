package com.example.addToCart.Repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.addToCart.Entity.Cart;


import java.util.ArrayList;
import java.util.UUID;


@Repository
@Transactional
public interface AddToCartRepository extends CrudRepository<Cart,Long> {
    Cart save(Cart cart);
    void deleteByProductId(UUID productId);
    ArrayList<Cart> findByUserId(UUID userId);
}
