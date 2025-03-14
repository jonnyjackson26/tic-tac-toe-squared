import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SubBoard from './SubBoard';

const { width } = Dimensions.get('window');
const BOARD_SIZE = Math.min(width - 40, 400);

interface BoardProps {
  gameState: string[][][];
  currentBoard: number | null;
  onMove: (boardIndex: number, cellIndex: number) => void;
  completedBoards: string[];
}

export default function Board({ gameState, currentBoard, onMove, completedBoards }: BoardProps) {
  return (
    <View style={styles.board}>
      {gameState.map((subBoard, boardIndex) => (
        <View key={boardIndex} style={styles.subBoardContainer}>
          <SubBoard
            board={subBoard}
            onCellPress={(cellIndex) => onMove(boardIndex, cellIndex)}
            isActive={currentBoard === null || currentBoard === boardIndex}
            winner={completedBoards[boardIndex]}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#2C3E50',
    padding: 3,
    borderRadius: 8,
  },
  subBoardContainer: {
    width: '33.33%',
    height: '33.33%',
    padding: 3,
  },
});