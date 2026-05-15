import { StyleSheet, Text, View } from "react-native";
import MyTheme from "../../../shared/theme";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MyTheme.colors.background,
  },
  title: {
    color: MyTheme.colors.text,
    fontSize: 20,
  },
});
