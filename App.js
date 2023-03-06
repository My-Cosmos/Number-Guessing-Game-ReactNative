import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { GameOverScreen } from "./screens/GameOverScreen";
import { GameScreen } from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
//027) 05:29
export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  // /**
  //  * useFonts - Returns an array. Where the first element we can extract by Array destructuring
  //  */
  // const [fontsLoaded] = useFonts({
  //   "Pacifico": require("./assets/fonts/Pacifico.ttf"),
  //   "lilex-light": require("./assets/fonts/Lilex-Light.otf"),
  //   "Fira-Medium": require("./assets/fonts/Fira-Code-Medium.ttf"),
  // });
  // if (!fontsLoaded) {
   
  // }

  function pickedNumberHandler(pickedNuber) {
    setUserNumber(pickedNuber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen UserNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }


  
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  return (
    <>
    <StatusBar style="inverted" />
    <LinearGradient
      colors={["#0942bb", "#03bcd4", "#00ffd5"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/iso.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        {/**When we use style in safeAreaView then we ensure that [All the available space - the area that is reserved for the notch] which will be taken care-of automatically is made available for the inner content */}
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15, // 85% transparent
  },
});
