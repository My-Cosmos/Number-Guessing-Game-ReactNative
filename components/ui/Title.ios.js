import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

/**
 * For adjusting styles based on underlying platform
 * --> we can use -> Platform API, This api allows us to detect on which platform we are running.
 */

export const Title = ({ children }) => {
  return <Text style={styles._title}>{children}</Text>;
};
const styles = StyleSheet.create({
  _title: {
    // fontFamily: 'Pacifico',
    fontSize: 30,
    // fontWeight: 'bold',
    color: "cyan",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // 👇🏻ALternative
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderColor: Colors.accent700,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
