import { Stack } from "expo-router";
import MyTheme from "../../src/shared/theme";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: MyTheme.colors.card },
        headerTintColor: MyTheme.colors.text,
      }}
    />
  );
}
