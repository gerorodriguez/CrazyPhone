package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.entities.Brand;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BrandMapper extends EntityMapper<BrandDTO, Brand>{
}
