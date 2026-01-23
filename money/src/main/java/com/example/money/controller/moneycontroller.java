package com.example.money.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import com.example.money.entity.money;
import com.example.money.service.moneyservice;

@RestController
@RequestMapping("/money")
@CrossOrigin(origins = "*")
public class moneycontroller {

    @Autowired
    private moneyservice moneyservice;

    @GetMapping
    public Page<money> getAll(@RequestParam(defaultValue = "0") int page,
                              @RequestParam(defaultValue = "10") int size) {
        // We create the Pageable object here
        Pageable pageable = PageRequest.of(page, size, Sort.by("Id").descending());

        // Pass the pageable object to your service
        return moneyservice.getAllMoney(pageable);
    }

    @PostMapping
    public money saveMoney(@RequestBody money money) {
        return moneyservice.saveMoney(money);
    }

    @DeleteMapping("/{Id}")
    public void deleteMoney(@PathVariable Long Id) {
        moneyservice.deleteMoney(Id);
    }

    @GetMapping("/total")
    public Double getTotal() {
        Double total = moneyservice.getTotalAmount();
        return total != null ? total : 0.0; // Return 0 if no records exist
    }
}