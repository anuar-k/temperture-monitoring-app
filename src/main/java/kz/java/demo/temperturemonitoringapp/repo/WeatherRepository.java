package kz.java.demo.temperturemonitoringapp.repo;

import kz.java.demo.temperturemonitoringapp.model.Weather;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherRepository extends JpaRepository<Weather, Long> {
}