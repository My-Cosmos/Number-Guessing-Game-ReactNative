import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NumberContainer } from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import { InstructionSetComponent } from "../components/ui/InstructionSetComponent";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);


  //04/29-Adding Logic to (Re-)start Games/4:58
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])
  



  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You Lied to the AI...", [
        { text: "Try Again", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    // console.log(minBoundary, maxBoundary);
    const newRandNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionSetComponent style={styles.instructionSet}>
          Higher or lower?
        </InstructionSetComponent>
        <View style={{ flexDirection: "row" }}>
          {/**
           * .bind() => This allows us to preconfigure the parameter value That will be used in a future function execution
           */}
          <View style={{ flex: 1 }}>
            <PrimaryButton _onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton _onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <Text>LOG Rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionSet: {
    marginBottom: 12,
  },
  _title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "cyan",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#00ccff",
    padding: 12,
  },
});
