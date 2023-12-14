package com.crazyphone.CrazyPhone.repositories;

import com.crazyphone.CrazyPhone.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
