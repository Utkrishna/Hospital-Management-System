package com.example.hms.controller;

import com.example.hms.model.Billing;
import com.example.hms.repository.BillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/billing")
@CrossOrigin(origins = "*")
public class BillingController {

    @Autowired
    private BillingRepository billingRepository;

    @PostMapping("/create")
    public Billing createBilling(@RequestBody Billing billing) {
        return billingRepository.save(billing);
    }
}
