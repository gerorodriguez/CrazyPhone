package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Brand;
import com.crazyphone.CrazyPhone.repositories.BrandRepository;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import com.crazyphone.CrazyPhone.services.mapper.BrandMapper;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;

@Service

public class BrandService {
    private final BrandRepository brandRepository;

    private final BrandMapper brandMapper;

    public BrandService(BrandRepository brandRepository , BrandMapper brandMapper) {
        this.brandRepository = brandRepository;
        this.brandMapper = brandMapper;
    }

    public BrandDTO save(BrandDTO brandDTO) {
        Brand brand = brandRepository.save(brandMapper.toEntity(brandDTO));
        return brandMapper.toDto(brand);
    }

    public List<BrandDTO> getAll() {
        return brandMapper.toDto(brandRepository.findAll());
    }

    public BrandDTO findById(Long id) {
        Brand brand = brandRepository.findById(id).orElseThrow();
        return brandMapper.toDto(brand);
    }

    public void deleteById(Long id) {
        brandRepository.deleteById(id);
    }


    public BrandDTO update(Long id, BrandDTO brandDTO) {

        if (brandDTO.id() == null) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "ID NULL");
        }
        if (!Objects.equals(id, brandDTO.id())) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "ID not equal");
        }

        if (!brandRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(404), "brand not found");
        }

        return brandMapper.toDto(brandRepository.save(brandMapper.toEntity(brandDTO)));
    }
}
