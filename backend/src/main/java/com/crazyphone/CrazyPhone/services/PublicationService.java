package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Publication;
import com.crazyphone.CrazyPhone.repositories.PublicationRepository;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.services.mapper.PublicationMapper;
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

    public PublicationService(PublicationRepository publicationRepository,
                              PublicationMapper publicationMapper, ImageService imageService) {
        this.publicationRepository = publicationRepository;
        this.publicationMapper = publicationMapper;
        this.imageService = imageService;
    }

    @Transactional
    public PublicationDTO save(PublicationDTO publicationDTO, MultipartFile[] files) {
        Publication publicationSaved = publicationRepository.save(publicationMapper.toEntity(publicationDTO));
        Arrays.stream(files).forEach(f -> imageService.save(f, publicationSaved));
        return publicationMapper.toDto(publicationSaved);
    }

    public List<PublicationDTO> getAll() {
        return publicationMapper.toDto(publicationRepository.findAll());
    }

    public PublicationDTO findById(Long id) {
        Publication publication = publicationRepository.findById(id).orElseThrow();
        return publicationMapper.toDto(publication);
    }

    public void deleteById(Long id) {
        publicationRepository.deleteById(id);
    }
}
