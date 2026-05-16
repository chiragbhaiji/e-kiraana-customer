import { FlatList, StyleSheet, View } from "react-native";

import { CategoryItem } from "@/src/shared/types";
import CategoryCardItem from "./CategoryCardItem";

type CategoriesSectionProps = {
  categories: CategoryItem[];
};

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  const renderItem = ({ item }: { item: CategoryItem }) => (
    <CategoryCardItem item={item} />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={itemSeparator}
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

export default CategoriesSection;
