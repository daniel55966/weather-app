/** @format */

export function convertWindSpeed(speedInMetersPerSecond: number): string {
  const speedInMilesPerHour = speedInMetersPerSecond * 2.236936;

  return `${speedInMilesPerHour.toFixed(0)} mph`;
}