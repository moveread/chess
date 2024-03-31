import { Check, Mate, Castle, PawnCapture, PieceCapture } from './styles.js';
import { isCastle, isCheck, isMate, isPawnCapture, isPieceCapture } from './classify.js';
import { castle, check, mate, pawnCapture, pieceCapture, CapturedPiece } from './map.js';

export type KingEffects = {
  check?: Check;
  mate?: Mate;
}

export type Motions = {
  castle?: Castle;
  pawnCapture?: PawnCapture;
  pieceCapture?: PieceCapture;
}

export type Styles = KingEffects & Motions

export function styleMotions(san: string, motions: Motions, capturedPiece?: CapturedPiece): string {
  if (isPawnCapture(san)) {
    return pawnCapture(san, motions.pawnCapture ?? 'dxe4', capturedPiece);
  } else if (isPieceCapture(san)) {
    return pieceCapture(san, motions.pieceCapture ?? 'Nxe4', capturedPiece);
  } else if (isCastle(san)) {
    return castle(san, motions.castle ?? 'O-O');
  } else {
    return san;
  }
}

export function styleEffects(san: string, effects: KingEffects): string {
  if (isCheck(san)) {
    return check(san, effects.check ?? 'NONE');
  } else if (isMate(san)) {
    return mate(san, effects.mate ?? 'NONE');
  } else {
    return san;
  }
}

export function style(san: string, styles: Styles, capturedPiece?: CapturedPiece): string {
  return styleEffects(styleMotions(san, styles, capturedPiece), styles);
}
