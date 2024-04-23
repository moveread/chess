import { Chess } from "chess.js"

export function uci(fen: string, san: string): string | null {
  try {
    const { from, to, promotion } = new Chess(fen).move(san)
    return `${from}${to}${promotion ?? ''}`
  }
  catch (e) {
    console.error(`Error parsing SAN "${san}" at position "${fen}":`, e)
    return null
  }
}