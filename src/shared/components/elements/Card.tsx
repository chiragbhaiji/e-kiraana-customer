import { StyleSheet, View, ViewProps } from "react-native";

type CardProps = {
  children: React.ReactNode;
} & ViewProps;

const Card = (props: CardProps) => {
  const { children, style, ...rest } = props;
  return (
    <View style={[styles.container, props.style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
  },
});

export default Card;
