package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.exceptions.UserAlreadyExistsException;
import com.crazyphone.CrazyPhone.repositories.AuthorityRepository;
import com.crazyphone.CrazyPhone.repositories.UserRepository;
import com.crazyphone.CrazyPhone.services.dto.RegisterDTO;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import com.crazyphone.CrazyPhone.utils.SecurityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
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
        String email = registerDTO.email().toLowerCase();
        if (userRepository.findByEmail(email).isPresent()) {
            throw new UserAlreadyExistsException("El email ya está en uso: " + email);
        }
        User newUser = new User();
        String encryptedPassword = passwordEncoder.encode(registerDTO.password());
        newUser.setPassword(encryptedPassword);
        newUser.setFullName(registerDTO.fullName());
        newUser.setEmail(email);
        newUser.setPhoneNumber(registerDTO.phoneNumber());
        Set<Authority> authorities = new HashSet<>();
        authorityRepository.findById(AuthoritiesConstants.USER).ifPresent(authorities::add);
        newUser.setAuthorities(authorities);
        userRepository.save(newUser);
    }

    public Optional<User> getUserWithAuthorities() {
        return SecurityUtils.getCurrentUserLogin().flatMap(userRepository::findByEmail);
    }

}
