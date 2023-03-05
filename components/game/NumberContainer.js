import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  /**
   * Now I want to reduce the padding margin and fontSize If the Screen Size is Small.
   * --> For this reason we have to use *Dimensions* API
   */
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
console.log(
  `DimensionsAPI From "components\\game\\NumberContainer.js" Where deviceWidth: ${deviceWidth}`
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 450 ? 26 : 36,
    fontWeight: "bold",
  },
});
