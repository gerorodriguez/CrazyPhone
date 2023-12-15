package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.PublicationService;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lowagie.text.DocumentException;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    @GetMapping("/by-user")
    public ResponseEntity<List<PublicationDTO>> getPublicationsForCurrentUser() {
        return new ResponseEntity<>(publicationService.getPublicationsForCurrentUser(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PublicationDTO> update(@PathVariable Long id, @RequestBody PublicationDTO updatedPublicationDTO) {
        PublicationDTO updatedPublication = publicationService.update(id, updatedPublicationDTO);
        return new ResponseEntity<>(updatedPublication, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
     public ResponseEntity<Void> deleteById(@PathVariable Long id) {
          publicationService.deleteById(id);
          return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/pdf")
    public void generatePdf(HttpServletResponse response) throws DocumentException, IOException {

        response.setContentType("application/pdf");
        DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-DD:HH:MM:SS");
        String currentDateTime = dateFormat.format(new Date());
        String headerkey = "Content-Disposition";
        String headervalue = "attachment; filename=ListadoPublicaciones_" + currentDateTime + ".pdf";
        response.setHeader(headerkey, headervalue);

        publicationService.generate(response);

    }


}
