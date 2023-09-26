package com.crazyphone.CrazyPhone.services.dto;

import com.crazyphone.CrazyPhone.entities.Model;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;

    public record BrandDTO(Long id, @NotNull String brandName, List<Model> models) {

    }

