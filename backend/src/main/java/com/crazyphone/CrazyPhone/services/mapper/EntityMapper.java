package com.crazyphone.CrazyPhone.services.mapper;

public interface EntityMapper<DTO, ENTITY> {
     DTO toDto(ENTITY entity);

     ENTITY toEntity(DTO dto);
}
