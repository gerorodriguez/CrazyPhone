package com.crazyphone.CrazyPhone.services.dto;

import com.crazyphone.CrazyPhone.entities.Brand;
import jakarta.validation.constraints.NotNull;

public record ModelDTO (Long id, @NotNull String modelName, BrandDTO brand) {
}
