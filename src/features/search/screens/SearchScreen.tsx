import { FlatList, StyleSheet, View } from "react-native";

import ShopCardItem from "@/src/shared/components/ShopCardItem";
import MyTheme from "@/src/shared/theme";
import { ShopItem } from "@/src/shared/types";
import SearchBar from "../components/SearchBar";

import { useSearch } from "../hooks/useSearch";

export default function SearchScreen() {
  const { searchQuery, setSearchQuery, filteredItems } = useSearch();

  const keyExtractor = (item: ShopItem) => item.id;

  const itemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }: { item: ShopItem }) => (
    <ShopCardItem item={item} />
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
});
