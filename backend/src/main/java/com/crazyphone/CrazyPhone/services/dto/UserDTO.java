package com.crazyphone.CrazyPhone.services.dto;

import org.antlr.v4.runtime.misc.NotNull;
import com.crazyphone.CrazyPhone.entities.User;



public record UserDTO(Long id, @NotNull String username, String password, String email, String phoneNumber, String instagramAccount) {
}
