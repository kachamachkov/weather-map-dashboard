import { useSuspenseQuery } from '@tanstack/react-query'
import Card from './cards/Card'
import { getWeather } from '../api'

type Props = {}

export default function DailyForecast({ }: Props) {
    const { data } = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({ lat: 43, lon: 50 })
    })
    return (
        <Card title="Daily Forecast">
            <div className='flex flex-col gap-4'>
                {data?.daily.map((day) => (
                    <div key={day.dt} className='flex justify-between'>
                        <p>DATE</p>
                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather icon" />
                    </div>
                ))}
            </div>
        </Card>
    )
}