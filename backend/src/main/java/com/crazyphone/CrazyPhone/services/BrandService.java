package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Brand;
import com.crazyphone.CrazyPhone.repositories.BrandRepository;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import com.crazyphone.CrazyPhone.services.mapper.BrandMapper;
import org.springframework.stereotype.Service;

import java.util.List;

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





}
