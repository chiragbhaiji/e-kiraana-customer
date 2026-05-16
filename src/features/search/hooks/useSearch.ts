import { debounce } from "radash";
import { useEffect, useMemo, useState } from "react";

import { searchProducts } from "../apis/search";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce({ delay: 300 }, (value: string) => {
        searchProducts(value).then((data) => {
          setFilteredItems(data);
        });
      }),
    [],
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return { searchQuery, setSearchQuery, filteredItems };
};

export { useSearch };
