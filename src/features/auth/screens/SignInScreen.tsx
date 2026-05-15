import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import MyTheme from "../../../shared/theme";
import { useAuth } from "../AuthContext";

export default function SignInScreen() {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
    router.replace("/(app)/home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in to continue</Text>
      <Button
        title="Sign in"
        onPress={handleSignIn}
        color={MyTheme.colors.primary}
      />
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
    marginBottom: 16,
  },
});
