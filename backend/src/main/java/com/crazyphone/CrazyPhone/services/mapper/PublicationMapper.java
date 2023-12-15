package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.entities.Brand;
import com.crazyphone.CrazyPhone.services.dto.BrandDTO;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.entities.Publication;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring", uses = { BrandMapper.class })
public interface PublicationMapper extends EntityMapper<PublicationDTO, Publication>{

  @Mapping(target = "brand", source = "brand", qualifiedByName = "brand")
  PublicationDTO toDto(Publication publication);

  @Named("brand")
  @BeanMapping(ignoreByDefault = true)
  @Mapping(target = "models", ignore = true)
  @Mapping(target = "brandName", source = "brandName")
  @Mapping(target = "id", source = "id")
  BrandDTO toDto(Brand brand);

}
