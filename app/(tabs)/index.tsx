import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Board from '@/components/Board';
import GameStatus from '@/components/GameStatus';

const createEmptyBoard = () => Array(9).fill(null).map(() => Array(9).fill(''));

const checkWinner = (board: string[]) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default function Game() {
  const [gameState, setGameState] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [currentBoard, setCurrentBoard] = useState<number | null>(null);
  const [completedBoards, setCompletedBoards] = useState(Array(9).fill(''));
  const [gameWinner, setGameWinner] = useState<string | null>(null);

  const handleMove = (boardIndex: number, cellIndex: number) => {
    if (gameWinner || (currentBoard !== null && currentBoard !== boardIndex)) {
      return;
    }

    const newGameState = [...gameState];
    newGameState[boardIndex] = [...gameState[boardIndex]];
    newGameState[boardIndex][cellIndex] = currentPlayer;

    // Check if the current sub-board is won
    const subBoardWinner = checkWinner(newGameState[boardIndex]);
    if (subBoardWinner) {
      const newCompletedBoards = [...completedBoards];
      newCompletedBoards[boardIndex] = subBoardWinner;
      setCompletedBoards(newCompletedBoards);

      // Check if the main game is won
      const mainGameWinner = checkWinner(newCompletedBoards);
      if (mainGameWinner) {
        setGameWinner(mainGameWinner);
      }
    }

    setGameState(newGameState);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setCurrentBoard(completedBoards[cellIndex] ? null : cellIndex);
  };

  const resetGame = () => {
    setGameState(createEmptyBoard());
    setCurrentPlayer('X');
    setCurrentBoard(null);
    setCompletedBoards(Array(9).fill(''));
    setGameWinner(null);
  };

  return (
    <View style={styles.container}>
      <GameStatus currentPlayer={currentPlayer} winner={gameWinner} />
      <Board
        gameState={gameState}
        currentBoard={currentBoard}
        onMove={handleMove}
        completedBoards={completedBoards}
      />
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E74C3C',
    borderRadius: 8,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});