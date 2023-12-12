package com.crazyphone.CrazyPhone.services.mapper;

import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.services.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper extends EntityMapper<UserDTO, User>{

    @Mapping(target = "publications", ignore = true)
    User toEntity(UserDTO u);

}
