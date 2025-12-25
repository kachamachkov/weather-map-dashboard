import { Suspense } from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { getAirPollution } from "@/api.ts";
import {
  airQualityRanges,
  getQualityLevel,
  pollutantNameMapping,
  QUALITY_COLORS,
  type AirQualityLevel,
  type Pollutant,
  type Range,
} from "@/constants/airQuality";

import Card from "./cards/Card";
import SidePanelSkeleton from "./skeletons/SidePanelSkeleton";
import { Slider } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import Chevron from '/src/assets/chevronLeft.svg?react';
import Information from '/src/assets/information.svg?react';

import type { Coords } from "@/types.ts";
import type { Dispatch, SetStateAction } from "react";

type SidePanelProps = {
  coords: Coords;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidePanel({
  coords,
  isSidePanelOpen,
  setIsSidePanelOpen,
}: SidePanelProps) {
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 h-screen w-(--sidebar-width) shadow-md bg-sidebar z-1001 py-8 px-4 overflow-y-scroll transition-transform duration-300 lg:translate-x-0!",
        isSidePanelOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <button
        onClick={() => setIsSidePanelOpen(false)}
        aria-label="Close side panel"
      >
        <Chevron className="size-8 -ml-2 lg:hidden" />
      </button>
      <Suspense fallback={<SidePanelSkeleton />}>
        <AirPollution coords={coords} />
      </Suspense>
    </div>
  );
}

type AirPollutionProps = Pick<SidePanelProps, "coords">;

function AirPollution({ coords }: AirPollutionProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["pollution", coords],
    queryFn: () => getAirPollution(coords),
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Air Pollution</h1>
      <p className="text-5xl font-semibold">{data!.list[0].main.aqi}</p>
      <AQIHeader />
      {Object.entries(data!.list[0].components).map(([key, value]) => (
        <PollutantCard key={key} pollutantKey={key} value={value} />
      ))}
    </div>
  );
}

function AQIHeader() {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-2xl font-semibold">AQI</h2>
      <Tooltip>
        <TooltipTrigger>
          <Information className="size-4" />
        </TooltipTrigger>
        <TooltipContent className="z-2000">
          <p className="max-w-xs">
            Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2
            = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

type PollutantCardProps = {
  pollutantKey: string;
  value: number;
};

function PollutantCard({ pollutantKey, value }: PollutantCardProps) {
  const pollutant = airQualityRanges[pollutantKey.toUpperCase() as Pollutant];
  const max = Math.max(pollutant["Very Poor"].min, value);
  const currentLevel = getQualityLevel(pollutant, value);
  const qualityColor = QUALITY_COLORS[currentLevel] ?? "bg-zinc-500";

  return (
    <Card
      childrenClassName="flex flex-col gap-3"
      className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60 gap-0!"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold capitalize">{pollutantKey}</span>
          <Tooltip>
            <TooltipTrigger>
              <Information className="size-4" />
            </TooltipTrigger>
            <TooltipContent className="z-2000">
              <p className="max-w-xs">
                Concentration of{" "}
                {pollutantNameMapping[pollutantKey.toUpperCase() as Pollutant]}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <span className="text-lg font-semibold">{value}</span>
      </div>
      <Slider min={0} max={max} value={[value]} disabled />
      <div className="flex justify-between text-xs">
        <p>0</p>
        <p>{max}</p>
      </div>
      <QualityLevelBadges
        pollutant={pollutant}
        currentLevel={currentLevel}
        qualityColor={qualityColor}
      />
    </Card>
  );
}

type QualityLevelBadgesProps = {
  pollutant: Record<AirQualityLevel, Range>;
  currentLevel: AirQualityLevel;
  qualityColor: string;
};

function QualityLevelBadges({
  pollutant,
  currentLevel,
  qualityColor,
}: QualityLevelBadgesProps) {
  return (
    <div className="flex justify-between">
      {Object.keys(pollutant).map((quality) => (
        <span
          key={quality}
          className={clsx(
            "px-2 py-1 rounded-md text-xs font-medium",
            quality === currentLevel
              ? qualityColor
              : "bg-muted text-muted-foreground"
          )}
        >
          {quality}
        </span>
      ))}
    </div>
  );
}