package com.example.hms.controller;

import com.example.hms.model.Admin;
import com.example.hms.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    // Simple login endpoint
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin loginData) {
        Admin admin = adminRepository.findByUsername(loginData.getUsername());
        if (admin != null && admin.getPassword().equals(loginData.getPassword())) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.status(401).body("Invalid Credentials");
        }
    }
}
