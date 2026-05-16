import { Image, StyleSheet, Text } from "react-native";

import { CategoryItem } from "@/src/shared/types";
import Card from "@components/elements/Card";

const CategoryCardItem = ({ item }: { item: CategoryItem }) => {
  return (
    <Card style={styles.container}>
      <Image
        style={styles.image}
        defaultSource={{ uri: "https://placehold.co/80" }}
        source={{ uri: item.imageUrl }}
      />
      <Text numberOfLines={2} style={styles.label}>
        {item.name}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 6,
    width: 80,
    padding: 0,
    paddingBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
    paddingHorizontal: 6,
  },
});

export default CategoryCardItem;
