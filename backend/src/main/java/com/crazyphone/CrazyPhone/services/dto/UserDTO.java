package com.crazyphone.CrazyPhone.services.dto;

import com.crazyphone.CrazyPhone.entities.Authority;

import java.util.Set;

public record UserDTO(Long id, String fullName, String email, String password, String phoneNumber,
                      Set<Authority> authorities) {
}
