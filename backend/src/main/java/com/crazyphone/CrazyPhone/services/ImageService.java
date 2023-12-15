package com.crazyphone.CrazyPhone.services;

import com.crazyphone.CrazyPhone.entities.Image;
import com.crazyphone.CrazyPhone.entities.Publication;
import com.crazyphone.CrazyPhone.repositories.ImageRepository;
import com.google.auth.Credentials;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.UUID;

@Service
public class ImageService {

    private final ImageRepository imageRepository;

    @Value("${firebase.bucket.name}")
    private String firebaseBucketName;

    @Value("${firebase.json.path}")
    private String firebaseJsonPath;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    private String uploadFile(File file, String fileName) throws IOException {
        BlobId blobId = BlobId.of("crazyphone-a311e.appspot.com", fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("media").build();
        InputStream inputStream = ImageService.class.getClassLoader().getResourceAsStream("crazyphone-a311e-firebase-adminsdk-9nohh-29bbd63247.json");
        assert inputStream != null;
        Credentials credentials = GoogleCredentials.fromStream(inputStream);
        Storage storage = StorageOptions.newBuilder().setCredentials(credentials).build().getService();
        storage.create(blobInfo, Files.readAllBytes(file.toPath()));

        String DOWNLOAD_URL = "https://firebasestorage.googleapis.com/v0/b/crazyphone-a311e.appspot.com/o/%s?alt=media";
        return String.format(DOWNLOAD_URL, URLEncoder.encode(fileName, StandardCharsets.UTF_8));
    }

    private String getExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf("."));
    }

    private File convertToFile(MultipartFile multipartFile, String fileName) throws IOException {
        File tempFile = new File(fileName);
        try (FileOutputStream fos = new FileOutputStream(tempFile)) {
            fos.write(multipartFile.getBytes());
        }
        return tempFile;
    }

    public String save(MultipartFile multipartFile, Publication publication) {
        try {
            String fileName = multipartFile.getOriginalFilename();                        // to get original file name
            fileName = UUID.randomUUID().toString().concat(getExtension(fileName));  // to generated random string values for file name.

            File file = convertToFile(multipartFile, fileName);                      // to convert multipartFile to File
            String URL = uploadFile(file, fileName);                                   // to get uploaded file link
            Image image = new Image();
            image.setName(fileName);
            image.setFilePath(URL);
            image.setType(multipartFile.getContentType());
            image.setPublication(publication);
            imageRepository.save(image);
            file.delete();
            return URL;
        } catch (Exception e) {
            e.printStackTrace();
            return "Image couldn't upload, Something went wrong";
        }
    }
}
