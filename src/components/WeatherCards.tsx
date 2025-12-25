import { Suspense } from "react";

import AdditionalInfo from "./cards/AdditionalInfo";
import CurrentWeather from "./cards/CurrentWeather";
import DailyForecast from "./cards/DailyForecast";
import HourlyForecast from "./cards/HourlyForecast";

import AdditionalInfoSkeleton from "./skeletons/AdditionalInfoSkeleton";
import CurrentSkeleton from "./skeletons/CurrentSkeleton";
import DailySkeleton from "./skeletons/DailySkeleton";
import HourlySkeleton from "./skeletons/HourlySkeleton";

import type { Coords } from "@/types.ts";

interface WeatherCardsProps {
  coords: Coords;
}

export default function WeatherCards({ coords }: WeatherCardsProps) {
  return (
    <>
      <div className="col-span-1 2xl:row-span-2 order-2">
        <Suspense fallback={<CurrentSkeleton />}>
          <CurrentWeather coords={coords} />
        </Suspense>
      </div>
      <div className="col-span-1 order-3 2xl:order-4 2xl:row-span-2">
        <Suspense fallback={<DailySkeleton />}>
          <DailyForecast coords={coords} />
        </Suspense>
      </div>
      <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-4 2xl:order-3">
        <Suspense fallback={<HourlySkeleton />}>
          <HourlyForecast coords={coords} />
        </Suspense>
      </div>
      <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-5">
        <Suspense fallback={<AdditionalInfoSkeleton />}>
          <AdditionalInfo coords={coords} />
        </Suspense>
      </div>
    </>
  );
}