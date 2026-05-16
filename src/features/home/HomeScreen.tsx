import { ScrollView, StyleSheet } from "react-native";

import SearchHeader from "./components/SearchHeader";

import { router } from "expo-router";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import SortFilterSection from "./components/SortFilterSection";
import { useCategories } from "./hooks/useCategories";
import { useHomeData } from "./hooks/useHomeData";

export default function HomeScreen() {
  const { filteredItems } = useHomeData();
  const { categories } = useCategories();

  const handleSearchPress = () => {
    router.push("/(app)/search");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchHeader onPress={handleSearchPress} />
      <CategoriesSection categories={categories} />
      <SortFilterSection filters={[]} sortOptions={[]} />
      <ProductsSection shops={filteredItems} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
