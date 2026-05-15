import { FlatList, StyleSheet, View } from "react-native";
import MyTheme from "../../shared/theme";
import SearchBar from "./components/SearchBar";
import ShopCardItem from "./components/ShopCardItem";
import { useHomeSearch } from "./hooks/useHomeSearch";
import { ShopItem } from "./types";

export default function HomeScreen() {
  const { searchQuery, setSearchQuery, filteredItems } = useHomeSearch({});

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
