package com.example.sampleproject;

import com.example.sub.A;
import com.example.sub.B;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SampleProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(SampleProjectApplication.class, args);
    }

    @GetMapping("/a")
    public String returnA() {
        return A.getValue();
    }

    @GetMapping("/b")
    public String returnB() {
        return B.getValue();
    }
}
