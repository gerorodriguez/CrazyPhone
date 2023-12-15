package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.entities.Publication;
import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.repositories.PublicationRepository;
import com.crazyphone.CrazyPhone.services.dto.PublicationDTO;
import com.crazyphone.CrazyPhone.services.mapper.PublicationMapper;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.CMYKColor;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
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

    public void generate(HttpServletResponse response) throws DocumentException, IOException {

        var publicationList = publicationRepository.findAll();

        Document document = new Document(PageSize.A4.rotate());

        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();

        Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        fontTiltle.setSize(20);

        Paragraph paragraph = new Paragraph("Listado de Publicaciones", fontTiltle);

        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(paragraph);

        PdfPTable table = new PdfPTable(4);

        table.setWidthPercentage(100f);
        table.setWidths(new int[] { 3, 3, 3, 3 });
        table.setSpacingBefore(5);

        PdfPCell cell = new PdfPCell();

        cell.setBackgroundColor(CMYKColor.MAGENTA);
        cell.setPadding(5);

        Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        font.setColor(CMYKColor.WHITE);

        cell.setPhrase(new Phrase("ID", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Titulo", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Precio", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Marca", font));
        table.addCell(cell);

        for (Publication publication : publicationList) {
            table.addCell(String.valueOf(publication.getId()));
            table.addCell(publication.getTitle());
            table.addCell(publication.getPrice().toString());
            table.addCell(publication.getBrand().getBrandName());

        }

        document.add(table);

        document.close();

    }
}
