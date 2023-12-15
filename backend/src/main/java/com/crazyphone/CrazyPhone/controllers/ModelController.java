package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.ModelService;
import com.crazyphone.CrazyPhone.services.dto.ModelDTO;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/models")
public class ModelController {
    private final ModelService modelService;

    public ModelController(ModelService modelService) {
        this.modelService = modelService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<ModelDTO> save(@RequestBody ModelDTO modelDTO) {
        return new ResponseEntity<>(modelService.save(modelDTO), HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<ModelDTO> update(@PathVariable  Long id, @RequestBody ModelDTO modelDTO) {
        return new ResponseEntity<>(modelService.update(id, modelDTO), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<ModelDTO>> getAll() {
        return new ResponseEntity<>(modelService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModelDTO> findById(@PathVariable Long id) {
        return new ResponseEntity<>(modelService.findById(id), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        modelService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
