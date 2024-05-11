import { Chess } from 'chess.js';
import { omit, splitEvery } from 'ramda'
import { Either, left, right } from '@haskellian/either'

export type Result = "0-1" | "1-0" | "1/2-1/2" | "*";

/** STR = Seven Tag Roster, as defined by the PGN standard: http://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm */
export type STRHeaders = {
  Event: string,
  Site: string,
  Date: string,
  Round: string,
  White: string,
  Black: string,
  Result: Result
}

/** STR Tag keys, in order */
export const STRTags: (keyof STRHeaders)[] = ['Event', 'Site', 'Date', 'Round', 'White', 'Black', 'Result']

export type PGNHeaders = STRHeaders & {
  [key: string]: string
}

export function tags(headers?: PGNHeaders): string {
  const others = Object.keys(omit(STRTags as any, headers ?? {}))
  const str = [...STRTags, ...others].map(tag => `[${tag} "${headers?.[tag] ?? ''}"]`).join('\n')
  return str
}

export function exportMoves(sans: string[]): string {
  return splitEvery(2, sans)
    .map((e4e5, i) => `${i+1}. ${e4e5.join(' ')}`)
    .join(' ')
}

export function exportPgn(sans: string[], headers?: PGNHeaders) {
  const finished = headers?.Result && headers.Result !== '*'
  return `${tags(headers)}\n\n${exportMoves(sans)}${finished ? '' : ' *'}\n`
}

export function parsePGN(pgn: string): Either<any, Chess> {
  const chess = new Chess()
  try {
    chess.loadPgn(pgn)
    return right(chess)
  }
  catch (e) {
    return left(e)
  }
}