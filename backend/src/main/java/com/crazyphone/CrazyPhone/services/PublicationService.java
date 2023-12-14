package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Publication;
import com.crazyphone.CrazyPhone.repositories.PublicationRepository;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.services.mapper.PublicationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicationService {
    private final PublicationRepository publicationRepository;

    private final PublicationMapper publicationMapper;

    public PublicationService(PublicationRepository publicationRepository,
        PublicationMapper publicationMapper) {
        this.publicationRepository = publicationRepository;
        this.publicationMapper = publicationMapper;
    }

    public PublicationDTO save(PublicationDTO publicationDTO) {
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

    public void deleteById(Long id) {
        publicationRepository.deleteById(id);
    }
}
