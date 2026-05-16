import { FlatList, StyleSheet, View } from "react-native";

import { ProductItem } from "@/src/shared/types";
import ProductCardItem from "@components/ProductCardItem";

const ProductsSection = ({ items }: { items: ProductItem[] }) => {
  const renderShopItem = ({ item }: { item: ProductItem }) => (
    <ProductCardItem item={item} />
  );

  const ItemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <FlatList
      horizontal
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderShopItem}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  itemSeparator: {
    width: 16,
  },
});

export default ProductsSection;
