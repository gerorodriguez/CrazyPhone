package com.crazyphone.CrazyPhone.config;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.repositories.AuthorityRepository;
import com.crazyphone.CrazyPhone.repositories.UserRepository;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Configuration
public class DataInitializer  {

    @Bean
    public CommandLineRunner initAuthorities(AuthorityRepository authorityRepository) {
        return args -> {
            if (authorityRepository.findById(AuthoritiesConstants.ADMIN).isEmpty()) {
                Authority adminAuthority = new Authority();
                adminAuthority.setName(AuthoritiesConstants.ADMIN);
                authorityRepository.save(adminAuthority);
            }

            if (authorityRepository.findById(AuthoritiesConstants.USER).isEmpty()) {
                Authority userAuthority = new Authority();
                userAuthority.setName(AuthoritiesConstants.USER);
                authorityRepository.save(userAuthority);
            }
        };
    }

    @Bean
    @DependsOn("initAuthorities")
    public CommandLineRunner loadUserAdmin(UserRepository userRepository, AuthorityRepository authorityRepository, PasswordEncoder passwordEncoder)  {
        return args -> {
            User userAdmin = new User();
            userAdmin.setId(1L);
            userAdmin.setEmail("admin@localhost.com");
            String encryptedPassword = passwordEncoder.encode("admin");
            userAdmin.setPassword(encryptedPassword);
            userAdmin.setFullName("admin");
            List<Authority> authorities = authorityRepository.findAll();
            Set<Authority> authoritySet = new HashSet<>(authorities);
            userAdmin.setAuthorities(authoritySet);
            userRepository.save(userAdmin);
        };
    }
}