const API_KEY = "10de33daa0962c3565e1155d077ef9a2"; // Replace with your OpenWeatherMap API Key

export const getWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();
  return data;
};
