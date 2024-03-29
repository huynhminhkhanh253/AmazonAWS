package com.example.addToCart.Entity;



import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name="Cart")
public class Cart {
    @Id
    @GeneratedValue
    public long id;

    public UUID userId;
    
    public UUID productId;

    public Cart(){
        super();
    }
    public Cart(long id, UUID userId, UUID productId) {
        super();
        this.id = id;
        this.userId = userId;
        this.productId = productId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public UUID getProductId() {
        return productId;
    }

    public void setProductId(UUID productId) {
        this.productId = productId;
    }
}
