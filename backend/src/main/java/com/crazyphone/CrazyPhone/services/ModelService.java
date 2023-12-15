package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Model;
import com.crazyphone.CrazyPhone.repositories.ModelRepository;
import com.crazyphone.CrazyPhone.services.dto.ModelDTO;
import com.crazyphone.CrazyPhone.services.mapper.ModelMapper;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;

@Service
public class ModelService {
    private final ModelRepository modelRepository;
    private final ModelMapper modelMapper;

    public ModelService(ModelRepository modelRepository , ModelMapper modelMapper) {
        this.modelRepository = modelRepository;
        this.modelMapper = modelMapper;
    }

    public ModelDTO save(ModelDTO modelDTO) {
        Model model = modelRepository.save(modelMapper.toEntity(modelDTO));
        return modelMapper.toDto(model);
    }

    public List<ModelDTO> getAll() {
        return modelMapper.toDto(modelRepository.findAll());
    }

    public ModelDTO findById(Long id) {
        Model model = modelRepository.findById(id).orElseThrow();
        return modelMapper.toDto(model);
    }

    public void deleteById(Long id) {
        modelRepository.deleteById(id);
    }


    public ModelDTO update(Long id, ModelDTO modelDTO) {
        if (modelDTO.id() == null) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "ID NULL");
        }
        if (!Objects.equals(id, modelDTO.id())) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "ID not equal");
        }

        if (!modelRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(404), "model not found");
        }


        return modelMapper.toDto(modelRepository.save(modelMapper.toEntity(modelDTO)));
    }
}
