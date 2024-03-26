import { Chess } from "chess.js"

export function randomSAN(game: Chess): string
export function randomSAN(fen: string): string
export function randomSAN(x: Chess | string) {
  const game = typeof x === 'string' ? new Chess(x) : x
  const moves = game.moves()
  const i = Math.floor(Math.random() * moves.length)
  return moves[i]
}