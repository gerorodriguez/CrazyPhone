package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.entities.Publication;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
public interface PublicationMapper extends EntityMapper<PublicationDTO, Publication>{

}
