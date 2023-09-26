package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.ModelService;
import com.crazyphone.CrazyPhone.services.dto.ModelDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/models")
public class ModelController {
    private final ModelService modelService;

    public ModelController(ModelService modelService) {
        this.modelService = modelService;
    }

    @PostMapping
    public ResponseEntity<ModelDTO> save(@RequestBody ModelDTO modelDTO) {
        return new ResponseEntity<>(modelService.save(modelDTO), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ModelDTO>> getAll() {
        return new ResponseEntity<>(modelService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModelDTO> findById(@PathVariable Long id) {
        return new ResponseEntity<>(modelService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        modelService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
