package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.repositories.UserRepository;
import com.crazyphone.CrazyPhone.services.dto.UserDTO;
import com.crazyphone.CrazyPhone.services.mapper.UserMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    public UserService(UserRepository userRepository , UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }


    public List<UserDTO> getAll() {
        return userMapper.toDto(userRepository.findAll());
    }

    public UserDTO findById(Long id) {
        User user = userRepository.findById(id).orElseThrow();
        return userMapper.toDto(user);
    }

}
