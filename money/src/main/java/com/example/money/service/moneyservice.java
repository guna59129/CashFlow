package com.example.money.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.money.entity.money;
import com.example.money.repository.moneyrepository;


@Service
public class moneyservice {
    @Autowired
    private  moneyrepository moneyrepository;
    public Page<money> getAllMoney(Pageable pageable) {
        return moneyrepository.findAll(pageable);
    }
    public money saveMoney(money money) {
        return moneyrepository.save(money);
    }
    public void deleteMoney(Long Id) {
        moneyrepository.deleteById(Id);
    }
    public Double getTotalAmount(){return moneyrepository.getTotalAmount();}

}
