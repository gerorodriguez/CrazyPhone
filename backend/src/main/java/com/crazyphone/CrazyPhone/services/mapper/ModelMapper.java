package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.entities.Model;
import com.crazyphone.CrazyPhone.services.dto.ModelDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ModelMapper extends EntityMapper<ModelDTO, Model>{
}
