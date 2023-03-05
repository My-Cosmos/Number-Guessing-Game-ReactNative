import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export const Title = ({children}) => {
  return <Text style={styles._title}>{children}</Text>;
};
const styles = StyleSheet.create({
    _title:{
      // fontFamily: 'Pacifico',
      fontSize: 30,
      // fontWeight: 'bold',
      color: 'cyan',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: Colors.accent700,
      padding: 12,
      maxWidth: '80%',
      width: 300
    }
  });
