import { ShopItem } from "@/src/shared/types";
import { Image, StyleSheet, Text } from "react-native";

import Card from "@components/elements/Card";

const ShopCardItem = ({ item }: { item: ShopItem }) => (
  <Card style={styles.item}>
    <Image id={item.id} source={{ uri: item.imageUrl }} style={styles.image} />
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
  </Card>
);

const styles = StyleSheet.create({
  item: {
    width: "48%",
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: "contain",
  },
});

export default ShopCardItem;
