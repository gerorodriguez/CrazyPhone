package com.crazyphone.CrazyPhone;

import com.crazyphone.CrazyPhone.config.rsaKeyProperties.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class CrazyPhoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrazyPhoneApplication.class, args);
	}

}
