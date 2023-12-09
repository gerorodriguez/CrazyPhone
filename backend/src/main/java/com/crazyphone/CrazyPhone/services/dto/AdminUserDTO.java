package com.crazyphone.CrazyPhone.services.dto;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.entities.User;

import java.util.Set;
import java.util.stream.Collectors;

public record AdminUserDTO(String email, String fullName, Set<String> authorities) {

    public AdminUserDTO(User user) {
        this(user.getEmail(), user.getFullName(), user.getAuthorities().stream()
                .map(Authority::getName)
                .collect(Collectors.toSet()));
    }
}
