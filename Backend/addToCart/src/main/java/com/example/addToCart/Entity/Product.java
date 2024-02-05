package com.example.addToCart.Entity;

import java.math.BigInteger;
import java.util.UUID;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue
    public BigInteger id;
    public UUID productID;
    public String name;
    public double price;
    public double rating;
    public String image;
    public String soldby;
}

