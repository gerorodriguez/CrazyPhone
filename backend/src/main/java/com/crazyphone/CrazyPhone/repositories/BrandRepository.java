package com.crazyphone.CrazyPhone.repositories;

import com.crazyphone.CrazyPhone.entities.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {
}
