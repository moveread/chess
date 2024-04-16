import translations from './translations.json'

export type Language = "CA" | "EN" | "DE" | "RU" | "RO" | "BG" | "FR" | "AZ" | "TR" | "PL" | "IS" | "NL" | "DK"
export type PieceType = 'N' | 'B' | 'R' | 'Q' | 'K';
export type ChessTranslation = Record<PieceType, string>;
export const chessTranslations: Record<Language, ChessTranslation> = translations

export function translateTable(sanMove: string, table: ChessTranslation) {
  return sanMove.replace(/[NBRQK]/g, p => table[p] ?? p);
}
export function translate(sanMove: string, lang: Language) {
  const t = chessTranslations[lang]
  return t ? translateTable(sanMove, t) : sanMove;
}