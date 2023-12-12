package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.UserService;
import com.crazyphone.CrazyPhone.services.dto.AdminUserDTO;
import com.crazyphone.CrazyPhone.services.dto.RegisterDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AccountController {

    private final UserService userService;

    public AccountController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerUser(@Valid @RequestBody RegisterDTO registerDTO) {
        userService.registerUser(registerDTO);
    }

    @GetMapping("/account")
    public AdminUserDTO getAccount() {
        var v = userService.getUserWithAuthorities();
        return userService
                .getUserWithAuthorities()
                .map(AdminUserDTO::new)
                .orElseThrow(() -> new UsernameNotFoundException("User could not be found"));
    }
}
