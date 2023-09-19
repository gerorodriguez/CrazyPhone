package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.PublicationService;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
