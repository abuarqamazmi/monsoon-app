import React from "react";

const WeatherInfoComponent = ({ weatherData }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <h2 className="text-warning" style={{ fontFamily: "'Roboto', sans-serif" }}>Monsoon of {weatherData.name}</h2>
      <p><strong>Description:</strong> {weatherData.weather[0].description}</p>
      <p><strong>Temperature:</strong> {weatherData.main.temp}°C (Feels like: {weatherData.main.feels_like}°C)</p>
      <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
      <p><strong>Sunrise:</strong> {formatTime(weatherData.sys.sunrise)}</p>
      <p><strong>Sunset:</strong> {formatTime(weatherData.sys.sunset)}</p>
    </div>
  );
};

export default WeatherInfoComponent;
