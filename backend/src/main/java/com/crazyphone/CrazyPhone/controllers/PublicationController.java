package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.PublicationService;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import org.aspectj.weaver.patterns.VoidArrayFinder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/publications")
public class PublicationController {

    private final PublicationService publicationService;

    public PublicationController(PublicationService publicationService) {
        this.publicationService = publicationService;
    }

    @PostMapping
    public ResponseEntity<PublicationDTO> save(@RequestBody PublicationDTO publicationDTO) {
        return new ResponseEntity<>(publicationService.save(publicationDTO), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PublicationDTO>> getAll() {
        return new ResponseEntity<>(publicationService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PublicationDTO> findById(@PathVariable Long id) {
        return new ResponseEntity<>(publicationService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
     public ResponseEntity<Void> deleteById(@PathVariable Long id) {
          publicationService.deleteById(id);
          return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
