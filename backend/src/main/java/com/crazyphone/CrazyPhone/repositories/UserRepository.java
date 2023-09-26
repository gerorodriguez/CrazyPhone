package com.crazyphone.CrazyPhone.repositories;

import com.crazyphone.CrazyPhone.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}
