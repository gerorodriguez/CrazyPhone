package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Authority;
import com.crazyphone.CrazyPhone.entities.User;
import com.crazyphone.CrazyPhone.exceptions.UserAlreadyExistsException;
import com.crazyphone.CrazyPhone.repositories.AuthorityRepository;
import com.crazyphone.CrazyPhone.repositories.UserRepository;
import com.crazyphone.CrazyPhone.services.dto.RegisterDTO;
import com.crazyphone.CrazyPhone.services.dto.UserDTO;
import com.crazyphone.CrazyPhone.services.mapper.UserMapper;
import com.crazyphone.CrazyPhone.utils.AuthoritiesConstants;
import com.crazyphone.CrazyPhone.utils.SecurityUtils;
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
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final AuthorityRepository authorityRepository;

    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository, AuthorityRepository roleRepository, UserMapper userMapper) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authorityRepository = roleRepository;
        this.userMapper = userMapper;
    }

    public List<UserDTO> getAll() {
        return userMapper.toDto(userRepository.findAll());
    }

    public UserDTO findById(Long id) {
        User user = userRepository.findById(id).orElseThrow();
        return userMapper.toDto(user);
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

    public void generate(HttpServletResponse response) throws DocumentException, IOException {

        var userList = userRepository.findAll();

        Document document = new Document(PageSize.A4);

        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();

        Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        fontTiltle.setSize(20);

        Paragraph paragraph = new Paragraph("Listado de usuarios", fontTiltle);

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
        cell.setPhrase(new Phrase("Nombre", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Email", font));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Rol", font));
        table.addCell(cell);

        for (User user : userList) {
            table.addCell(String.valueOf(user.getId()));
            table.addCell(user.getFullName());
            table.addCell(user.getEmail());
            table.addCell(user.getAuthorities().stream().map(Authority::getName).findFirst().orElse("No tiene rol"));
        }

        document.add(table);

        document.close();

    }
}
