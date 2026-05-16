import { ProductItem } from "@/src/shared/types";
import { Image, StyleSheet, Text, View } from "react-native";

import Card from "@components/elements/Card";

type ProductCardItemProps = {
  item: ProductItem;
} & React.ComponentProps<typeof Card>;

const ProductCardItem = ({ item, style }: ProductCardItemProps) => (
  <Card style={[styles.item, style]}>
    <Image id={item.id} source={{ uri: item.imageUrl }} style={styles.image} />
    <View style={styles.body}>
      <View style={styles.itemInfo}>
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
      </View>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  item: {
    width: 120,
    padding: 0,
  },
  body: {
    padding: 8,
    flex: 1,
  },
  itemInfo: {
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    aspectRatio: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: "cover",
  },
});

export default ProductCardItem;
