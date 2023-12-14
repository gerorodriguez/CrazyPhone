package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Publication;
import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.repositories.PublicationRepository;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.services.mapper.PublicationMapper;
import jakarta.persistence.EntityNotFoundException;
import java.util.Objects;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;

@Service
public class PublicationService {
    private final PublicationRepository publicationRepository;

    private final PublicationMapper publicationMapper;
    private final ImageService imageService;

    private final UserService userService;

    public PublicationService(PublicationRepository publicationRepository,
                              PublicationMapper publicationMapper, ImageService imageService,
        UserService userService) {
        this.publicationRepository = publicationRepository;
        this.publicationMapper = publicationMapper;
        this.imageService = imageService;
        this.userService = userService;
    }

    @Transactional
    public PublicationDTO save(PublicationDTO publicationDTO, MultipartFile[] files) {
        User user = userService.getUserWithAuthorities().orElseThrow();
        Publication publication = publicationMapper.toEntity(publicationDTO);
        publication.setUser(user);
        Publication publicationSaved = publicationRepository.save(publication);
        Arrays.stream(files).forEach(f -> imageService.save(f, publicationSaved));
        return publicationMapper.toDto(publicationSaved);
    }


    public PublicationDTO update(Long id, PublicationDTO publicationDTO){
        if (!Objects.equals(id, publicationDTO.getId())) {
            throw new IllegalArgumentException("Id must be the same");
        }
        Publication existingPublication = publicationRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Publication not found with id: " + id));
        Publication publication = publicationRepository.save(publicationMapper.toEntity(publicationDTO));
        return publicationMapper.toDto(publication);
    }

    public List<PublicationDTO> getAll() {
        var publications = publicationRepository.findAll();
        return publicationMapper.toDto(publicationRepository.findAll());
    }

    public PublicationDTO findById(Long id) {
        Publication publication = publicationRepository.findById(id).orElseThrow();
        return publicationMapper.toDto(publication);
    }

    public List<PublicationDTO> getPublicationsForCurrentUser() {
        User user = userService.getUserWithAuthorities().orElseThrow();
        return publicationRepository.findAllByUserId(user.getId()).stream().map(publicationMapper::toDto)
            .collect(Collectors.toList());
    }

    public void deleteById(Long id) {
        publicationRepository.deleteById(id);
    }
}
