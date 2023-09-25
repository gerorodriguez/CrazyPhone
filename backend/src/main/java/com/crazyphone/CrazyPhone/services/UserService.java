package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.repositories.AuthorityRepository;
import com.crazyphone.CrazyPhone.repositories.UserRepository;
import com.crazyphone.CrazyPhone.services.dto.RegisterDTO;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;

    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository, AuthorityRepository roleRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authorityRepository = roleRepository;
    }

    public void registerUser(RegisterDTO registerDTO) {
        //TODO: Validate if Email already exists
        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(registerDTO.password());
        newUser.setPassword(encryptedPassword);
        newUser.setFullName(registerDTO.fullName());
        newUser.setEmail(registerDTO.email().toLowerCase());
        newUser.setPhoneNumber(registerDTO.phoneNumber());
        Set<Authority> authorities = new HashSet<>();
        //TODO: check set authority
        authorityRepository.findById(AuthoritiesConstants.USER).ifPresent(authorities::add);
        authorityRepository.findById(AuthoritiesConstants.ADMIN).ifPresent(authorities::add);
        newUser.setAuthorities(authorities);
        userRepository.save(newUser);
    }
}
