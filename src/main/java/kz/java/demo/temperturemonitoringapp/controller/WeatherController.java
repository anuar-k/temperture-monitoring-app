package kz.java.demo.temperturemonitoringapp.controller;

import kz.java.demo.temperturemonitoringapp.model.Weather;
import kz.java.demo.temperturemonitoringapp.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class WeatherController {

    private final WeatherService weatherService;

    @MessageMapping("/send.weather")
    @SendTo("/topic/public")
    public Weather message(@Payload Weather weather) {
        weatherService.update(weather);
        return weather;
    }
}
