// type for data object
interface WeatherData {
    main?: {
      temp?: number;
    };
    weather?: {
      description?: string;
    }[];
  }
  
  async function getHofstraWeather() {
    // Hofstra University coordinates (SIC building)
    const lat = 40.713741206171385;
    const lon = -73.59641639631612;
  
    // My OpenWeatherMap API key
    const apiKey = '9c324a015eee7cf96dec4d04a9a70b1d';
  
    // API endpoint
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    try {
      // import node-fetch
      const fetch = require('node-fetch');
  
      // fetch data from the API
      const response = await fetch(apiUrl);
  
      // parse response
      const data: WeatherData = await response.json();
  
      // print data
      console.log('Received data:', data);
  
      // check if the properties are available before accessing them
      if (data.main && data.main.temp && data.weather && data.weather[0] && data.weather[0].description) {
        // display the current weather information
        console.log('Current Weather at Hofstra University:');
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Description: ${data.weather[0].description}`);
      } else {
        console.log('Weather data not available');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  // test
  getHofstraWeather();
  