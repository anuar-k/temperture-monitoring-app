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

    private float temperature;

    private String city;
}