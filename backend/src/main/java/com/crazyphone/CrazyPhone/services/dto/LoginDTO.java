package com.crazyphone.CrazyPhone.services.dto;

import jakarta.validation.constraints.NotNull;

public record LoginDTO(@NotNull String email, @NotNull String password) { }
