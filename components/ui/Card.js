import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    // flex: 1,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Adding shadow
    //-->for android
    elevation: 12, //Android only property
    //-->for IOS
    shadowColor: "black", // IOS only property
    shadowOffset: { width: 0, height: 2 }, // IOS only property, in pixel
    shadowRadius: 6, // IOS only property, in pixel
    shadowOpacity: 0.25, // IOS only property, in pixel
  },
});
