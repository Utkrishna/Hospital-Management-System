package com.example.hms.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "billing")
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long patientId;
    private Double amount;
    private Date billingDate;

    // Constructors, Getters and Setters

    public Billing() {}
    public Billing(Long patientId, Double amount, Date billingDate) {
        this.patientId = patientId;
        this.amount = amount;
        this.billingDate = billingDate;
    }
    
    public Long getId() {
        return id;
    }
    public Long getPatientId() {
        return patientId;
    }
    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }
    public Double getAmount() {
        return amount;
    }
    public void setAmount(Double amount) {
        this.amount = amount;
    }
    public Date getBillingDate() {
        return billingDate;
    }
    public void setBillingDate(Date billingDate) {
        this.billingDate = billingDate;
    }
}
