import { FlatList, StyleSheet, View } from "react-native";

import MyTheme from "@/src/shared/theme";
import { ProductItem } from "@/src/shared/types";
import ProductCardItem from "@components/ProductCardItem";
import SearchBar from "../components/SearchBar";

import { useSearch } from "../hooks/useSearch";

export default function SearchScreen() {
  const { searchQuery, setSearchQuery, filteredItems } = useSearch();

  const keyExtractor = (item: ProductItem) => item.id;

  const itemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }: { item: ProductItem }) => (
    <ProductCardItem item={item} style={styles.productCard} />
  );

  return (
    <FlatList
      data={filteredItems}
      numColumns={2}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparator}
      ListHeaderComponent={
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: MyTheme.colors.background,
  },
  separator: {
    height: 16,
  },
  title: {
    color: MyTheme.colors.text,
    fontSize: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
  },
});
