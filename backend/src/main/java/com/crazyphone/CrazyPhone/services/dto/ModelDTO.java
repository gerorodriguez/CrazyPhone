package com.crazyphone.CrazyPhone.services.dto;

import com.crazyphone.CrazyPhone.entities.Brand;
import org.antlr.v4.runtime.misc.NotNull;

public record ModelDTO (Long id, @NotNull String modelName) {
}
