import { FlatList, StyleSheet, View } from "react-native";
import MyTheme from "../../shared/theme";
import SearchBar from "./components/SearchBar";
import ShopCardItem from "./components/ShopCardItem";
import { useHomeSearch } from "./hooks/useHomeSearch";
import { ShopItem } from "./types";

export default function HomeScreen() {
  const { searchQuery, setSearchQuery, filteredItems } = useHomeSearch({});

  const renderItem = ({ item }: { item: ShopItem }) => (
    <ShopCardItem item={item} />
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={filteredItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
