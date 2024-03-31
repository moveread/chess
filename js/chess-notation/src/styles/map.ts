import { Check, Mate, Castle, PawnCapture, PieceCapture } from './styles.js';

export type CapturedPiece = 'P' | 'N' | 'B' | 'R' | 'Q';

export function check(san: string, style: Check): string {
  switch (style) {
    case 'NONE':
      return san.endsWith("+") ? san.slice(0, -1) : san;
    case 'CHECK':
      return san;
  }
}

export function mate(san: string, style: Mate): string {
  switch (style) {
    case 'NONE':
      return san.endsWith("#") ? san.slice(0, -1) : san;
    case 'SHARP':
      return san;
    case 'DOUBLE_CHECK':
      return san.replace("#", "++");
  }
}

export function castle(san: string, style: Castle): string {
  switch (style) {
    case 'OO':
      return san.replace("-", "");
    case 'O-O':
      return san;
  }
}

export function pawnCapture(
  san: string,
  style: PawnCapture,
  capturedPiece?: CapturedPiece,
  pawn: string = "P"
): string {
  const [d, x, e, n, ...tail] = san;
  const rest = tail.join("");
  switch (style) {
    case 'de':
      return `${d}${e}${rest}`;
    case 'dxe':
      return `${d}x${e}${rest}`;
    case 'de4':
      return `${d}${e}${n}${rest}`;
    case 'dxe4':
      return san;
    case 'xe4':
      return `x${e}${n}${rest}`;
    case 'PxN':
      if (capturedPiece !== undefined) {
        return `${pawn}x${capturedPiece.toUpperCase()}${rest}`;
      }
      return san;
    default:
      return san;
  }
}

export function pieceCapture(
  san: string,
  style: PieceCapture,
  capturedPiece?: CapturedPiece
): string {
  switch (style) {
    case 'Ne4':
      return san.replace("x", "");
    case 'Nxe4':
      return san;
    case 'NxN':
      if (capturedPiece !== undefined) {
        const [N, eOrX, dOrE, nOrX, ...tail] = san;
        const rest = tail.join("");
        if (eOrX === 'x') {
          return `${N}x${capturedPiece.toUpperCase()}${rest}`;
        } else {
          return `${N}${eOrX}x${capturedPiece.toUpperCase()}${rest}`;
        }
      }
      return san;
    default:
      return san;
  }
}
