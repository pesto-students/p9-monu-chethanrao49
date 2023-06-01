import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_MAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;
// Common method for making API calls
const fetchWeatherData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from OpenWeatherMap API: ${error}`);
    return null;
  }
};

app.get("/cities", async (req: Request, res: Response) => {
  const { cities, page = 1, limit = 10 } = req.query;
  const cityNames: string[] = cities ? (cities as string).split(",") : [];
  const offset: number = ((page as number) - 1) * (limit as number);
  const cityData: any[] = [];

  for (const city of cityNames.slice(
    offset,
    (offset as number) + (limit as number)
  )) {
    const data = await fetchWeatherData(
      `${OPEN_WEATHER_MAP_URL}/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`
    );
    if (data) {
      cityData.push(data);
    }
  }

  res.json(cityData);
});

app.get("/forecast", async (req: Request, res: Response) => {
  const { city, days = 1 } = req.query;

  const data = await fetchWeatherData(
    `${OPEN_WEATHER_MAP_URL}/forecast/daily?q=${city}&cnt=${days}&appid=${OPEN_WEATHER_MAP_API_KEY}`
  );
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: "Error fetching forecast data" });
  }
});

app.get("/current", async (req: Request, res: Response) => {
  const { city } = req.query;

  const data = await fetchWeatherData(
    `${OPEN_WEATHER_MAP_URL}/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`
  );
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: "Error fetching current weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Data of Multiple Cities: The URL for this API will be
//http://localhost:3000/cities. You can filter the results by city name and city code by passing them as query parameters. For example:
// Endpoints
// For single city:
// http://localhost:3000/cities?cities=London
// For multiple cities:
// http://localhost:3000/cities?cities=London,Paris,Tokyo
// With pagination:
// http://localhost:3000/cities?cities=London,Paris,Tokyo&page=2&limit=1

// Detailed Forecast for the Next X Days: The URL for this API will be http://localhost:3000/forecast. You can specify the city name and the number of days for the forecast as query parameters.
// Endpoints
// http://localhost:3000/forecast?city=London&days=5

//Current Weather Conditions of Any Particular City: The URL for this API will be http://localhost:3000/current. You can specify the city name as a query parameter.
// Endpoints
// http://localhost:3000/current?city=London
