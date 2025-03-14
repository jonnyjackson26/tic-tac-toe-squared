import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HowToPlay() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How to Play Ultimate Tic Tac Toe</Text>
        
        <Text style={styles.heading}>Basic Rules:</Text>
        <Text style={styles.text}>
          1. The game consists of 9 smaller tic-tac-toe boards arranged in a 3x3 grid.
        </Text>
        <Text style={styles.text}>
          2. Each turn, you mark one of the smaller squares in any of the smaller boards.
        </Text>
        <Text style={styles.text}>
          3. When you place your mark, your opponent must play in the corresponding smaller board.
        </Text>
        
        <Text style={styles.heading}>Winning:</Text>
        <Text style={styles.text}>
          • Win smaller boards by getting three in a row (horizontally, vertically, or diagonally).
        </Text>
        <Text style={styles.text}>
          • Win the game by winning three smaller boards in a row.
        </Text>
        
        <Text style={styles.heading}>Special Rules:</Text>
        <Text style={styles.text}>
          • If your opponent sends you to a board that's already won or full, you can play in any open board.
        </Text>
        <Text style={styles.text}>
          • A tie in a small board counts as neither X nor O winning that board.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#34495E',
    marginBottom: 10,
    lineHeight: 24,
  },
});