package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.SignUp;

import com.example.demo.service.SignUpService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
    @Autowired
    private SignUpService signUpService;
   
   @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUp signUp) {
        try{
          SignUp userobj = signUpService.registerService(signUp);
           return new ResponseEntity<>(userobj, HttpStatus.CREATED);
           
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        }
        @PostMapping("/login")
        public ResponseEntity<?> loginUser(@RequestBody SignUp signUp) {
            try {
                SignUp userobj = signUpService.loginService(signUp.getEmail(), signUp.getPassword());
                if (userobj != null) {
                    return new ResponseEntity<>(userobj, HttpStatus.OK);
                } else {
                    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                }
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
      

}
