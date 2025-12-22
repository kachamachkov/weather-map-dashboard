import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

import DailyForecast from "./components/DailyForecast"
import HourlyForecast from "./components/HourlyForecast"
import CurrentWeather from "./components/cards/CurrentWeather"

function App() {
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 43, lon: 50 })
  })

  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App
