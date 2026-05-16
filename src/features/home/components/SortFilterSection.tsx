import { FilterOption, SortOption } from "@/src/shared/types";
import { FlatList, StyleSheet, View } from "react-native";

type SortFilterSectionProps = {
  filters: FilterOption;
  sort: SortOption;
};

const SortFilterSection = ({
  filters,
  sortOptions,
}: SortFilterSectionProps) => {
  const combinedData = filters.map((option) => ({
    id: option,
    name: option,
  }));

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <View>{item.name}</View>
  );

  return (
    <FlatList
      horizontal
      data={combinedData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SortFilterSection;
