package com.crazyphone.CrazyPhone.repositories;

import com.crazyphone.CrazyPhone.entities.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepository extends JpaRepository<Model, Long> {
}
