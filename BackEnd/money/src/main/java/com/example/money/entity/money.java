package com.example.money.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "money")
public class money {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String description;
    private Double amount;
    private String date;
    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        // Matching your frontend format: "22 Jan • 23:59"
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMM • HH:mm");
        this.date = now.format(formatter);
    }

    public Long getId() {
        return Id;
    }
    public void setId(Long Id){
        this.Id=Id;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getAmount() {
        return amount;
    }
    public void setAmount(Double amount) {
        this.amount = amount;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
}
