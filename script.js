window.addEventListener('load', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    });
  } else {
    console.error('Geolocation is not supported by your browser');
  }
});

function displayWeather(data) {
  const location = data.name;
  const temperature = `${data.main.temp}°C`;
  const description = data.weather[0].description;

  document.getElementById('location').textContent = `Location: ${location}`;
  document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
  document.getElementById('description').textContent = `Description: ${description}`;
}
