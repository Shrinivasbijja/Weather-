import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeatherData } from "./components/WeatherSearvice";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeather(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("City not found");
      setWeather(null); // Clear any previous weather data
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
