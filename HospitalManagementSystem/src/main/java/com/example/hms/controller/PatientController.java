package com.example.hms.controller;

import com.example.hms.model.Patient;
import com.example.hms.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "*")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerPatient(@RequestBody Patient patient) {
        if (patientRepository.existsByEmail(patient.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email already exists!");
        }
        if (patientRepository.existsByPhone(patient.getPhone())) {
            return ResponseEntity.badRequest().body("Error: Phone number already exists!");
        }
        
        patientRepository.save(patient);
        return ResponseEntity.ok("Patient registered successfully!");
    }
}
