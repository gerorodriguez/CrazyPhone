package com.crazyphone.CrazyPhone.config;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.repositories.AuthorityRepository;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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
}

