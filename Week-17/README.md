# Weather API Server

This is a Node.js server built with Express.js and TypeScript that fetches weather data from OpenWeatherMap API.

## Features

- Get weather data for multiple cities.
- Get a detailed forecast for the next X days.
- Get current weather conditions of any particular city.

## Setup and Installation

To run this project, you will need to follow these steps:

### Step 1: Install dependencies

In the project root directory, run:

### Step 2: Add OpenWeatherMap API key

Sign up on [OpenWeatherMap](https://openweathermap.org/) and get an API key.

Create a `.env` file in the project root directory, and add your API key like so:

Remember to replace `your_openweathermap_api_key_here` with your actual API key.

### Step 3: Start the server

In the project root directory, run: npm start

Your server will start on `http://localhost:3000`.

## Usage

Once the server is running, you can use the following endpoints:

- **GET /cities?cities={cityNames}&page={pageNumber}&limit={limit}**  
  Fetch weather data for multiple cities. You can paginate the result with `page` and `limit` parameters.
- **GET /forecast?city={cityName}&days={numberOfDays}**  
  Get a detailed forecast for the next X days of a particular city.
- **GET /current?city={cityName}**  
  Fetch current weather conditions of any particular city.

## Scripts

- `npm start` : Start the server.
- `npm run lint` : Lint the TypeScript code.
- `npm run lint:fix` : Automatically fix as many linting issues as possible.

## License

MIT
