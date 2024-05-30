from typing import Iterable
import chess

def sans2ucis(sans: Iterable[str]) -> Iterable[str]:
  board = chess.Board()
  for san in sans:
    move = board.parse_san(san)
    yield move.uci()
    board.push(move)

def ucis2sans(ucis: Iterable[str]) -> Iterable[str]:
  """Parses UCIs into SAN. Stops whenever it finds an illegal move/UCI."""
  board = chess.Board()
  for uci in ucis:
    try:
      move = chess.Move.from_uci(uci)
    except chess.InvalidMoveError:
      return
    if move not in board.legal_moves:
      return
    yield board.san(move)
    board.push(move)