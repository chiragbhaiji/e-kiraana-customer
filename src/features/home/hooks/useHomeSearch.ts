import { useEffect, useState } from "react";

type HomeSearchProps = {
  filters?: Array<string>;
  sortingOption?:
    | "relevance"
    | "priceLowToHigh"
    | "priceHighToLow"
    | "distance";
};

const useHomeSearch = ({
  filters = [],
  sortingOption = "relevance",
}: HomeSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Simulate fetching and filtering data based on searchQuery
    const fetchData = async () => {
      // Replace with actual data fetching logic
      const allItems = [
        { id: "1", name: "Item 1" },
        { id: "2", name: "Item 2" },
        { id: "3", name: "Shop A" },
        { id: "4", name: "Shop B" },
      ];

      const filtered = allItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredItems(filtered);
    };

    fetchData();
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
  };
};

export { useHomeSearch };
