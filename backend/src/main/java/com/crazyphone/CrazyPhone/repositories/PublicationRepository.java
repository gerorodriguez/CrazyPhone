package com.crazyphone.CrazyPhone.repositories;

import com.crazyphone.CrazyPhone.entities.Publication;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicationRepository extends JpaRepository<Publication, Long> {
  List<Publication> findAllByUserId(Long id);
}
