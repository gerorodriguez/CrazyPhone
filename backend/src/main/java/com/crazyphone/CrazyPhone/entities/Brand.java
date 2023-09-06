package com.crazyphone.CrazyPhone.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "brand")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")

    @Column (name = "id")
    private Long id;

    @Column (name = "brand_name")
    private String brandName;

    @OneToMany(mappedBy = "brand")
    private List<Publication> publications;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
