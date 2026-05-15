import { StyleSheet, Text, View } from "react-native";
import { ShopItem } from "../types";

const ShopCardItem = ({ item }: { item: ShopItem }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 14,
  },
});

export default ShopCardItem;
