package com.example.productdetailsservice.Entity;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.GeneratedValue;

@Document
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
    public ArrayList<String> about;
    public String review;
    public String delivery;
    public String status;
    public String emi;
    public Product(BigInteger id, UUID productID, String name, double price, double rating, String image, String soldby,
        ArrayList<String> about, String review, String delivery, String status, String emi) {
        this.id = id;
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.image = image;
        this.soldby = soldby;
        this.about = about;
        this.review = review;
        this.delivery = delivery;
        this.status = status;
        this.emi = emi;
    }
    public BigInteger getId() {
        return id;
    }
    public void setId(BigInteger id) {
        this.id = id;
    }
    public UUID getProductID() {
        return productID;
    }
    public void setProductID(UUID productID) {
        this.productID = productID;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public double getRating() {
        return rating;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getSoldby() {
        return soldby;
    }
    public void setSoldby(String soldby) {
        this.soldby = soldby;
    }
    public ArrayList<String> getAbout() {
        return about;
    }
    public void setAbout(ArrayList<String> about) {
        this.about = about;
    }
    public String getReview() {
        return review;
    }
    public void setReview(String review) {
        this.review = review;
    }
    public String getDelivery() {
        return delivery;
    }
    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getEmi() {
        return emi;
    }
    public void setEmi(String emi) {
        this.emi = emi;
    }

}
