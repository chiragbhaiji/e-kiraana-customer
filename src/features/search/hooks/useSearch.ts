import { useEffect, useState } from "react";

import { searchProducts } from "../apis/search";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      if (searchQuery) {
        const results = await searchProducts(searchQuery);
        setFilteredItems(results);
      } else {
        setFilteredItems([]);
      }
    };

    fetchItems();
  }, [searchQuery]);

  return { searchQuery, setSearchQuery, filteredItems };
};

export { useSearch };
