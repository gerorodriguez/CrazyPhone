package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.BrandService;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/brands")

public class BrandController {
    private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @PostMapping
    public ResponseEntity<BrandDTO> save(@RequestBody BrandDTO brandDTO) {
        return new ResponseEntity<>(brandService.save(brandDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BrandDTO> update(@PathVariable Long id, @RequestBody BrandDTO brandDTO) {
        return new ResponseEntity<>(brandService.update(id, brandDTO), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<BrandDTO>> getAll() {
        return new ResponseEntity<>(brandService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BrandDTO> findById(@PathVariable Long id) {
        return new ResponseEntity<>(brandService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        brandService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
