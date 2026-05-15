import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

const SearchBar = (props: TextInputProps) => {
  const { value, onChangeText, ...rest } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for items / shops..."
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    height: 40,
    fontSize: 16,
  },
});

export default SearchBar;
