package kz.java.demo.temperturemonitoringapp.service;


import kz.java.demo.temperturemonitoringapp.model.Weather;
import kz.java.demo.temperturemonitoringapp.repo.WeatherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WeatherService {

    private final WeatherRepository weatherRepository;

    public void update(Weather weather) {
        weatherRepository.save(weather);
    }
}