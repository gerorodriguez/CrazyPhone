package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.UserService;
import com.crazyphone.CrazyPhone.services.dto.RegisterDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    private final UserService userService;

    public AccountController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerUser(@RequestBody RegisterDTO registerDTO) {
        userService.registerUser(registerDTO);
    }
}
