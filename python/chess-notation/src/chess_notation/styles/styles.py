from typing import Literal
from pydantic import BaseModel

Check = Literal["NONE", "CHECK"]
Mate = Literal["NONE", "SHARP", "DOUBLE_CHECK"]
Castle = Literal["OO", "O-O"]
PawnCapture = Literal["de", "dxe", "de4", "dxe4", "xe4", "PxN"]
PieceCapture = Literal["Ne4", "Nxe4", "NxN"]

"""Pawn capture styles that convey unique information (start file only, end file only, both files, etc.)
I.e. no two styles include the same info
"""
UNIQ_PAWN_CAPTURES: list[PawnCapture] = ['de', 'dxe4', 'xe4', 'PxN']
"""
Piece capture styles that convey unique information (start file only, end file only, both files, etc.)
I.e. no two styles include the same info
"""
UNIQ_PIECE_CAPTURES: list[PieceCapture] = ['Ne4', 'Nxe4', 'NxN']

NA = Literal['N/A']

def no_na(value):
  if value != 'N/A':
    return value

class KingEffects(BaseModel):
  check: Check | NA | None = None
  mate: Mate | NA | None = None

class Motions(BaseModel):
  castle: Castle | NA | None = None
  pawn_capture: PawnCapture | NA | None = None
  piece_capture: PieceCapture | NA | None = None

class Styles(KingEffects, Motions):
  ...