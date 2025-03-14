import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface SubBoardProps {
  board: string[];
  onCellPress: (index: number) => void;
  isActive: boolean;
  winner: string;
}

export default function SubBoard({ board, onCellPress, isActive, winner }: SubBoardProps) {
  if (winner) {
    return (
      <View style={[styles.subBoard, styles.completedBoard]}>
        <Text style={styles.winnerText}>{winner}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.subBoard, !isActive && styles.inactiveBoard]}>
      {board.map((cell, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cell}
          onPress={() => isActive && !cell && onCellPress(index)}
          disabled={!isActive || !!cell}
        >
          <Text style={[styles.cellText, { color: cell === 'X' ? '#E74C3C' : '#3498DB' }]}>
            {cell}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subBoard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#34495E',
    borderRadius: 4,
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C3E50',
  },
  cellText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inactiveBoard: {
    opacity: 0.5,
  },
  completedBoard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ECF0F1',
  },
});