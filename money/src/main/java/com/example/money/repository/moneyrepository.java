package com.example.money.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.money.entity.money;

@Repository
public interface moneyrepository extends JpaRepository<money, Long> {
    // JPQL query to sum the 'amount' column
    @Query("SELECT SUM(m.amount) FROM money m")
    Double getTotalAmount();
}
