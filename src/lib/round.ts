export default function round(value: number, decimals: number = 0) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
