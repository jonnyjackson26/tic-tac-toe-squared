import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GameStatusProps {
  currentPlayer: string;
  winner: string | null;
}

export default function GameStatus({ currentPlayer, winner }: GameStatusProps) {
  return (
    <View style={styles.container}>
      {winner ? (
        <Text style={styles.status}>Player {winner} Wins!</Text>
      ) : (
        <Text style={styles.status}>Player {currentPlayer}'s Turn</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  status: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
});