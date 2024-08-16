package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.SignUp;
import com.example.demo.repository.SignUpRepo;

@Service
public class SignUpService {
    @Autowired
    private SignUpRepo signUpRepo;

    public SignUp registerService(SignUp signUp) {
        return signUpRepo.save(signUp);
    }
    public SignUp loginService(String email, String password) {
        SignUp user = signUpRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
    }
    
    


