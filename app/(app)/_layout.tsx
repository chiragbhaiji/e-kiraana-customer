import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../src/features/auth/AuthContext";
import MyTheme from "../../src/shared/theme";

export default function AppLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Redirect href="/(auth)/login" />;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: MyTheme.colors.card,
        },
        headerTintColor: MyTheme.colors.text,
      }}
    />
  );
}
