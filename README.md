# 🌦️ Live Weather Map Dashboard

A beautiful, responsive weather dashboard application that displays real-time weather data, forecasts, and air quality information on an interactive map.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

---

## 🧑‍💻 Technologies Used

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI Components
- **TanStack Query** - Data Fetching & Caching
- **Zod** - Schema Validation
- **Leaflet / React Leaflet** - Interactive Maps
- **OpenWeather API** - Weather Data Provider
- **Radix UI** - Accessible Primitives
- **Lucide React** - Icons

---

## ✨ Features

### 🗺️ Interactive Weather Map
- Real-time weather layer overlays (clouds, precipitation, pressure, wind, temperature)
- Click anywhere on the map to get weather data for that location
- Powered by Leaflet & OpenStreetMap

### 🌡️ Current Weather
- Live temperature readings with feels-like temperature
- Weather conditions with dynamic icons
- Humidity and wind speed
- Local time display based on selected location's timezone

### 📅 Forecasts
- **Hourly Forecast** - 24-hour weather predictions
- **Daily Forecast** - 7-day weather outlook with min/max temperatures

### 🌬️ Air Quality Index
- Real-time air pollution data
- Individual pollutant breakdowns (CO, NO, NO₂, O₃, SO₂, PM2.5, PM10, NH₃)
- Color-coded quality indicators
- Interactive sliders showing pollutant levels

### 🎨 User Experience
- **Light & Dark Mode** - Toggle between themes
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Skeleton Loaders** - Smooth loading states for better UX
- **Location Search** - Search for any city worldwide

---

## 🔥 Key Concepts

- **API Fetching** - RESTful API integration with OpenWeather
- **Suspense Queries** - React Suspense with TanStack Query for declarative loading states
- **Skeleton Loaders** - Custom skeleton components for smooth loading experience
- **Schema Validation** - Runtime type safety with Zod schemas
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **State Management** - React hooks for local state management
- **Light/Dark Mode** - Theme toggling with CSS variables
- **Map Layers** - Dynamic weather overlay switching
- **Geolocation** - Click-to-locate and city search functionality

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- OpenWeather API Key ([Get one here](https://openweathermap.org/api))

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/weather-map-dashboard.git
   cd weather-map-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory
   ```env
   VITE_API_KEY=your_openweather_api_key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
src/
├── api.ts              # API functions for weather data
├── App.tsx             # Main application component
├── types.ts            # TypeScript type definitions
├── components/
│   ├── cards/          # Weather card components
│   ├── dropdowns/      # Location & map type selectors
│   ├── skeletons/      # Loading skeleton components
│   └── ui/             # shadcn/ui components
├── constants/          # Air quality constants & mappings
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── schemas/            # Zod validation schemas
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ and React</p>

