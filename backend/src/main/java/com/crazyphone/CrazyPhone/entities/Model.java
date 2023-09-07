package com.crazyphone.CrazyPhone.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "model")
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")

    @Column(name = "id")
    private Long id;

    @Column (name = "model_name")
    private String modelName;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_brand__brand_id) "))
    private Brand brand;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }
}
