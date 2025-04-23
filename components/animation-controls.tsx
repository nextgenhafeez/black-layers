"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface AnimationControlsProps {
  duration: number
  setDuration: (value: number) => void
  easing: string
  setEasing: (value: string) => void
  easingOptions: string[]
  delay?: number
  setDelay?: (value: number) => void
  iterations?: number
  setIterations?: (value: number) => void
  infinite?: boolean
  setInfinite?: (value: boolean) => void
  direction?: string
  setDirection?: (value: string) => void
  directionOptions?: string[]
}

export function AnimationControls({
  duration,
  setDuration,
  easing,
  setEasing,
  easingOptions,
  delay,
  setDelay,
  iterations,
  setIterations,
  infinite,
  setInfinite,
  direction,
  setDirection,
  directionOptions,
}: AnimationControlsProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label>Duration: {duration}ms</Label>
        <Slider value={[duration]} min={100} max={2000} step={100} onValueChange={(value) => setDuration(value[0])} />
      </div>

      {delay !== undefined && setDelay && (
        <div>
          <Label>Delay: {delay}ms</Label>
          <Slider value={[delay]} min={0} max={2000} step={100} onValueChange={(value) => setDelay(value[0])} />
        </div>
      )}

      <div>
        <Label>Easing Function</Label>
        <Select value={easing} onValueChange={setEasing}>
          <SelectTrigger>
            <SelectValue placeholder="Select an easing function" />
          </SelectTrigger>
          <SelectContent>
            {easingOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {iterations !== undefined && setIterations && !infinite && (
        <div>
          <Label>Iterations: {iterations}</Label>
          <Slider value={[iterations]} min={1} max={10} step={1} onValueChange={(value) => setIterations(value[0])} />
        </div>
      )}

      {infinite !== undefined && setInfinite && (
        <div className="flex items-center space-x-2">
          <Switch id="infinite" checked={infinite} onCheckedChange={setInfinite} />
          <Label htmlFor="infinite">Infinite</Label>
        </div>
      )}

      {direction !== undefined && setDirection && directionOptions && (
        <div>
          <Label>Direction</Label>
          <Select value={direction} onValueChange={setDirection}>
            <SelectTrigger>
              <SelectValue placeholder="Select a direction" />
            </SelectTrigger>
            <SelectContent>
              {directionOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}
