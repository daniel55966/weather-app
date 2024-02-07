/** @format */

export function convertKelvinToFahrenheit(tempInKelvin: number): number {
  const tempInFahrenheit =(((tempInKelvin - 273.15) * 1.8) + 32);
  return Math.floor(tempInFahrenheit);
}