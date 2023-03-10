import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
export default function PrimaryButton({ children, _onPress }) {
  function presshandler() {
    console.log("Pressed !!!");
  }
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        // Adding visual feedback to the button //12:42
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContainer, style.pressed]
            : style.buttonInnerContainer
        }
        onPress={_onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // it will ensure that if any effect or any styling from inside that container would go outside of that container then that will not shown. So, for example if the ripple effect would go outside of this container it will bw clicked and it will not be visible.
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#a3ffff",
    textAlign: "center",
  },
  // Setting up a dedicated style for IOS
  pressed: {
    opacity: 0.75, // range 0-to-1. And 0.75 means 75% opec and 25% transparent
  },
});
//13:30
