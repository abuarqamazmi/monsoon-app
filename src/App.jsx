import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherInfoComponent from "./components/WeatherInfoComponent";
import SearchComponent from "./components/SearchComponent";
import ErrorMessage from "./components/ErrorComponent";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`
      );
      const data = await response.json();
      console.log("Data from API:", data);
      if (data.cod === 200) {
        setWeatherData(data);
        setCity("");  // Clear the search field after successful search
      } else {
        console.error("Invalid response:", data);
        setWeatherData(null);
        setCity(""); 
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    if (city !== "") {
      fetchWeatherData();
    }
  };

  useEffect(() => {
    console.log("WeatherData state updated:", weatherData);
  }, [weatherData]);

  return (
    <div className="weather-app d-flex align-items-center justify-content-center text-center"
         style={{ 
            minHeight: "100vh", 
            backgroundImage: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1471&auto=format&fit=crop")',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            padding: '20px'
         }}>
      <div className="container bg-dark text-white p-3 rounded" style={{ maxWidth: "500px", opacity: 0.85 }}>
        <h1 className="mb-3" style={{ fontFamily: "'Roboto', sans-serif", color: "#FFD700" }}>Monsoon App</h1>
        <SearchComponent city={city} setCity={setCity} handleSearch={handleSearch} />
        {weatherData ? (
          <WeatherInfoComponent weatherData={weatherData} />
        ) : (
          <ErrorMessage />
        )}
      </div>
    </div>
  );
};

export default App;
