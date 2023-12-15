package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.entities.Brand;
import com.crazyphone.CrazyPhone.entities.Model;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import com.crazyphone.CrazyPhone.services.dto.ModelDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface BrandMapper extends EntityMapper<BrandDTO, Brand>{

    @Mapping(target = "models", ignore = true)
    BrandDTO toDto(Brand brand);
}
