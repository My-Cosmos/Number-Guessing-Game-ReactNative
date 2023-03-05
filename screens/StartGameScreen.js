import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import { InstructionSetComponent } from "../components/ui/InstructionSetComponent";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import Colors from "../constants/colors";

export default function StartGameScreen({ onPickNumber }) {
  /*  --My-Code--        Starts  */
  // const [fontsLoaded] = useFonts({
  //   // "Pacifico": require("./assets/fonts/Pacifico.ttf"),
  //   "lilex-light": require("../assets/fonts/Lilex-Light.otf"),
  //   // "Fira-Medium": require("./assets/fonts/Fira-Code-Medium.ttf"),
  // });
  
  /* Ends */
  const [enteredNumber, setEnteredNumber] = useState("");
  function NumberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    console.log("Pressed !!!");
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be within 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]); //This .alert() function take 3 arguments. 1st) Is the Title, 2nd) Is the message, 3rd) 3rd one allows us to configure the buttons.
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionSetComponent>Enter a Number</InstructionSetComponent>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={NumberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton _onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton _onPress={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  instructionText:{
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent600,
    marginVertical: 8,
    // fontFamily: 'Pacifico',
    fontWeight: '900'
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
