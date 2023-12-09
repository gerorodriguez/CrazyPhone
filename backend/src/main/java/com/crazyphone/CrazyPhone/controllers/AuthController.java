package com.crazyphone.CrazyPhone.controllers;

import com.crazyphone.CrazyPhone.services.auth.TokenService;
import com.crazyphone.CrazyPhone.services.dto.AuthenticationResponse;
import com.crazyphone.CrazyPhone.services.dto.LoginDTO;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final TokenService tokenService;

    private final AuthenticationManager authenticationManager;

    public AuthController(TokenService tokenService, AuthenticationManager authenticationManager) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(@RequestBody LoginDTO loginDTO) {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.email(), loginDTO.password()));
        String token = tokenService.generateToken(auth);
        return new AuthenticationResponse(token);
    }
}
