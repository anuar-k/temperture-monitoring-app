package kz.java.demo.temperturemonitoringapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "weathers")
public class Weather {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int temperature;

    private String city;

    private String status;
}