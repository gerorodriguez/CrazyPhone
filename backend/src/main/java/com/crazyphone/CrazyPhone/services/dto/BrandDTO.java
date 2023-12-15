package com.crazyphone.CrazyPhone.services.dto;

import jakarta.validation.constraints.NotNull;

import java.util.List;

    public record BrandDTO(Long id, @NotNull String brandName, List<ModelDTO> models) {

    }

