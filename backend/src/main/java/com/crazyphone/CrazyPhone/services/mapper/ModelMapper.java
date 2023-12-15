package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.entities.Brand;
import com.crazyphone.CrazyPhone.entities.Model;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import com.crazyphone.CrazyPhone.services.dto.ModelDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface ModelMapper extends EntityMapper<ModelDTO, Model>{

    @Mapping(target = "brand", source = "brand", qualifiedByName = "brand")
    ModelDTO toDto(Model model);

    @Named("brand")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "models", ignore = true)
    @Mapping(target = "brandName", source = "brandName")
    @Mapping(target = "id", source = "id")
    BrandDTO toDto(Brand brand);
}
