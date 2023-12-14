package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.PublicationService;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/publications")
public class PublicationController {

    private final PublicationService publicationService;

    private final ObjectMapper objectMapper;


    public PublicationController(PublicationService publicationService, ObjectMapper objectMapper) {
        this.publicationService = publicationService;
        this.objectMapper = objectMapper;
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<PublicationDTO> save(@RequestParam("data") String publicationDTOString, @RequestParam MultipartFile[] files) throws JsonProcessingException {
        PublicationDTO publicationDTO = objectMapper.readValue(publicationDTOString, PublicationDTO.class);
        return new ResponseEntity<>(publicationService.save(publicationDTO, files), HttpStatus.CREATED);
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
