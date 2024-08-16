package com.example.demo.service;

import com.example.demo.model.CollectionItem;
import com.example.demo.repository.CollectionItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectionItemService {

    @Autowired
    private CollectionItemRepo repository;

    public List<CollectionItem> getAllItems() {
        return repository.findAll();
    }

    public CollectionItem getItemById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
