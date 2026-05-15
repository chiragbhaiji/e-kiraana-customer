import { Redirect } from "expo-router";
import { useAuth } from "../src/features/auth/AuthContext";

export default function Index() {
  const { isSignedIn } = useAuth();
  return isSignedIn ? (
    <Redirect href="/(app)/home" />
  ) : (
    <Redirect href="/(auth)/login" />
  );
}
