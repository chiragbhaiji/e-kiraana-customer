import { useEffect, useState } from "react";
import { getProducts } from "../apis/getProducts";

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
      const allItems = await getProducts();
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
