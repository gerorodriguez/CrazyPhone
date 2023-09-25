package com.crazyphone.CrazyPhone.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ValidationResponse>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<ValidationResponse> errors = new ArrayList<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((org.springframework.validation.FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            ValidationResponse errorResponse = new ValidationResponse();
            errorResponse.setField(fieldName);
            errorResponse.setMessage(errorMessage);
            errors.add(errorResponse);
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
