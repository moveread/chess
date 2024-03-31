import { Check, Mate, Castle, PawnCapture, PieceCapture } from './styles.js';

export function isCheck(san: string): boolean {
  return san.includes("+");
}

export function isMate(san: string): boolean {
  return san.includes("#");
}

const isUpper = (s: string) => s.toUpperCase() === s

export function isPawnCapture(san: string): boolean {
  return san.includes("x") && !isUpper(san[0])
}

export function isPieceCapture(san: string): boolean {
  return san.includes("x") && isUpper(san[0])
}

export function isCastle(san: string): boolean {
  return san.includes("-");
}

export type KingEffect = 'mate' | 'check';

export function kingEffect(sanMove: string): KingEffect | null {
  if (isMate(sanMove)) {
    return 'mate';
  } else if (isCheck(sanMove)) {
    return 'check';
  }
  return null;
}

export type Motion = 'castle' | 'piece-capture' | 'pawn-capture';

export function motion(sanMove: string): Motion | null {
  if (isCastle(sanMove)) {
    return 'castle';
  } else if (isPawnCapture(sanMove)) {
    return 'pawn-capture';
  } else if (isPieceCapture(sanMove)) {
    return 'piece-capture';
  }
  return null;
}

