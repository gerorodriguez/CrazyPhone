package com.crazyphone.CrazyPhone.services.mapper;

import java.util.List;

public interface EntityMapper<DTO, ENTITY> {
     DTO toDto(ENTITY entity);

     ENTITY toEntity(DTO dto);

     List<DTO> toDto(List<ENTITY> entityList);

     List<ENTITY> toEntity(List<DTO> dtoList);
}
