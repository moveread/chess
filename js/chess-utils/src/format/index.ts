/** Print 0-indexed ply as '1.', '1...', '2.', ... */
export function printIdx(ply: number): string {
  const idx = Math.floor(ply/2) + 1
  return ply % 2 === 0
    ? `${idx}.`
    : `${idx}...`
}