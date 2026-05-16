import MyTheme from "@/src/shared/theme";
import { useCallback, useEffect, useState } from "react";
import { Image, Pressable, PressableProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const searchIcon = require("@/assets/icons/search_icon.png");

const SearchHints = ["Maya Kirana", "Milk", "Apples", "Fruits", "Nearby Shops"];

const MIN_OPACITY = 0;
const MAX_OPACITY = 0.6;

const SearchHeader = (props: PressableProps) => {
  const [hintIndex, setHintIndex] = useState(0);
  const opacity = useSharedValue(MAX_OPACITY);

  const updateHitIndex = useCallback(() => {
    setHintIndex((prev) => (prev + 1) % SearchHints.length);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      opacity.value = withTiming(MIN_OPACITY, { duration: 1000 });

      timeout = setTimeout(() => {
        opacity.value = withTiming(MAX_OPACITY, { duration: 1000 });
        updateHitIndex();
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [updateHitIndex]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Pressable style={styles.container} {...props}>
      <Image source={searchIcon} style={styles.icon} />
      <Animated.Text style={[styles.input, animatedStyle]}>
        {SearchHints[hintIndex]}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: MyTheme.colors.card,
    borderRadius: 8,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
  },
  input: {
    paddingVertical: 8,
    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: MyTheme.colors.primary,
  },
});

export default SearchHeader;
