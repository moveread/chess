export type Locale = 'en' | 'ca' | 'fr' | 'de' | 'it' | 'ru' | 'pl' | 'nl' | 'pt' | 'sv' | 'cs' | 'tr' | 'ar' | 'zh' | 'ja' | 'hi' | 'bn' | 'uk' | 'ro' | 'hu' | 'fi' | 'sk' | 'hr' | 'sl' | 'el';
export type PieceType = 'N' | 'B' | 'R' | 'Q' | 'K';
export type ChessTranslation = Record<PieceType, string>;

export const displayNames: Record<Locale, string> = {
  en: 'English',
  ca: 'Spanish/Catalan',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  ru: 'Russian',
  pl: 'Polish',
  nl: 'Dutch',
  pt: 'Portuguese',
  sv: 'Swedish',
  cs: 'Czech',
  tr: 'Turkish',
  ar: 'Arabic',
  zh: 'Chinese',
  ja: 'Japanese',
  hi: 'Hindi',
  bn: 'Bengali',
  uk: 'Ukrainian',
  ro: 'Romanian',
  hu: 'Hungarian',
  fi: 'Finnish',
  sk: 'Slovak',
  hr: 'Croatian/Serbian/Bosnian',
  sl: 'Slovenian',
  el: 'Greek'
};

export const chessTranslations: Record<Locale, ChessTranslation> = {
  en: { K: "K", Q: "Q", R: "R", B: "B", N: "N" },
  ca: { K: "R", Q: "D", R: "T", B: "A", N: "C" }, // Spanish, Catalan
  fr: { K: "R", Q: "D", R: "T", B: "F", N: "C" },
  de: { K: "K", Q: "D", R: "T", B: "L", N: "S" },
  it: { K: "R", Q: "D", R: "T", B: "A", N: "C" },
  ru: { K: "K", Q: "Q", R: "R", B: "B", N: "N" },
  pl: { K: "K", Q: "H", R: "W", B: "G", N: "S" },
  nl: { K: "K", Q: "D", R: "T", B: "L", N: "P" },
  pt: { K: "R", Q: "D", R: "T", B: "B", N: "C" },
  sv: { K: "K", Q: "D", R: "T", B: "L", N: "S" },
  cs: { K: "K", Q: "D", R: "V", B: "S", N: "J" },
  tr: { K: "S", Q: "V", R: "K", B: "F", N: "A" },
  ar: { K: "M", Q: "W", R: "R", B: "F", N: "N" },
  zh: { K: "K", Q: "Q", R: "C", B: "B", N: "N" },
  ja: { K: "K", Q: "Q", R: "R", B: "B", N: "N" },
  hi: { K: "R", Q: "W", R: "T", B: "C", N: "G" },
  bn: { K: "R", Q: "W", R: "T", B: "B", N: "N" },
  uk: { K: "K", Q: "Q", R: "R", B: "B", N: "N" },
  ro: { K: "R", Q: "D", R: "T", B: "N", N: "C" },
  hu: { K: "K", Q: "V", R: "B", B: "F", N: "H" },
  fi: { K: "K", Q: "D", R: "T", B: "L", N: "R" },
  sk: { K: "K", Q: "D", R: "V", B: "S", N: "J" },
  hr: { K: "K", Q: "D", R: "T", B: "L", N: "S" }, // Croatian, Serbian, Bosnian
  sl: { K: "K", Q: "D", R: "T", B: "L", N: "S" },
  el: { K: "K", Q: "Q", R: "R", B: "B", N: "N" }
};

export function translateTable(sanMove: string, table: ChessTranslation) {
  return sanMove.replace(/[NBRQK]/g, p => table[p] ?? p);
}
export function translate(sanMove: string, locale: Locale) {
  const t = chessTranslations[locale]
  return t ? translateTable(sanMove, t) : sanMove;
}