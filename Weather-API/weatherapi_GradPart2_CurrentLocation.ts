import fetch from 'node-fetch';

// type for data object
interface WeatherData {
  main?: {
    temp?: number;
  };
  weather?: {
    description?: string;
  }[];
}

async function getWeatherForApproximateLocation() {
  try {
    // get approximate location based on IP address using "ip-api"
    const locationResponse = await fetch('http://ip-api.com/json/');
    const locationData = await locationResponse.json();

    if (locationData.status === 'fail') {
      throw new Error('failed location from ip-api');
    }

    const { lat, lon } = locationData;

    // My OpenWeatherMap API key
    const apiKey = '9c324a015eee7cf96dec4d04a9a70b1d';

    // API endpoint
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // fetch data from the API
    const response = await fetch(apiUrl);

    // parse response
    const data: WeatherData = await response.json();

    // print data
    console.log('Received data:', data);

    // check if the properties are available before accessing them
    if (data.main?.temp && data.weather?.[0]?.description) {
      // display the current weather information
      console.log('Current Weather at Approximate Location:');
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
getWeatherForApproximateLocation();
