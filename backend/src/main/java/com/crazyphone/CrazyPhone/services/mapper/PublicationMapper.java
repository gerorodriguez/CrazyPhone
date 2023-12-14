package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.entities.Publication;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { BrandMapper.class })
public interface PublicationMapper extends EntityMapper<PublicationDTO, Publication>{

}
