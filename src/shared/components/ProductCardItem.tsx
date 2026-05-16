import { ProductItem } from "@/src/shared/types";
import { Image, StyleSheet, Text, View } from "react-native";

import Card from "@components/elements/Card";

const ProductCardItem = ({ item }: { item: ProductItem }) => (
  <Card style={styles.item}>
    <View style={styles.body}>
      <Image
        id={item.id}
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <Text numberOfLines={2} style={styles.title}>
        {item.name}
      </Text>
      <Text numberOfLines={2} style={styles.description}>
        {item.description}
      </Text>
    </View>
    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
  </Card>
);

const styles = StyleSheet.create({
  item: {
    width: 120,
    gap: 6,
    padding: 8,
  },
  body: {
    gap: 4,
    flex: 1,
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

export default ProductCardItem;
