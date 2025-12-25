import { Switch } from "./ui/switch.tsx"
import Sun from '/src/assets/sun.svg?react';
import Moon from '/src/assets/moon.svg?react';

type Props = {}

export default function LightDarkToggle({ }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Sun className="size-5 invert" />
      <Switch />
      <Moon className="size-5 invert" />
    </div>
  )
}