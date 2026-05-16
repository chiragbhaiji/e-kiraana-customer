import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

const SearchBar = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Search for shops, products..."
        {...props}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    color: "#888",
    fontSize: 16,
  },
});
