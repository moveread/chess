import { DEFAULT_POSITION, Chess } from "chess.js"

/** Fens after each SAN move  */
export function fens(sans: string[], startFen = DEFAULT_POSITION) {
  const fens: string[] = []
  const game = new Chess(startFen)
  for (const san of sans) {
    try { game.move(san) }
    catch { return fens }
    fens.push(game.fen())
  }
  return fens
}

export type FEN = {
  position: string;
  turn: 'w' | 'b';
  castling: string;
  passant: string;
  plyClock: number;
  fullMoves: number;
}

export function parse(fen: string): FEN {
  const [position, turn, castling, passant, plyClock, fullMoves] = fen.split(' ');
  return {
    position, turn: turn as 'w' | 'b', castling, passant,
    plyClock: parseInt(plyClock), fullMoves: parseInt(fullMoves)
  }
}

/** Index of a given position, 0-indexed (starting position -> 0) */
export function positionIdx(fen: string | FEN): number {
  const { turn, fullMoves } = typeof fen === 'string' ? parse(fen) : fen
  return 2*(fullMoves - 1) + (turn === 'w' ? 0 : 1)
}