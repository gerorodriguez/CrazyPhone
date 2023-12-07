package com.crazyphone.CrazyPhone.services.dto;

import com.crazyphone.CrazyPhone.entities.Authority;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record RegisterDTO(Long id, @NotNull String fullName, @NotNull String email, @NotNull String password,
                          String phoneNumber, List<Authority> authorities) {
}
