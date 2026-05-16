import { ProductItem } from "@/src/shared/types";
import { useEffect, useState } from "react";
import { getProducts } from "../apis/getProducts";

type HomeDataProps = {
  filters: Array<string>;
  sortingOption: "relevance" | "priceLowToHigh" | "priceHighToLow" | "distance";
};

const DEFAULT_HOME_DATA_PROPS: HomeDataProps = {
  filters: [],
  sortingOption: "relevance",
};

const useHomeData = ({
  filters,
  sortingOption,
}: HomeDataProps = DEFAULT_HOME_DATA_PROPS) => {
  const [filteredItems, setFilteredItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allItems = await getProducts();
      // Need to apply filters and sorting here based on the filters and sortingOption
      setFilteredItems(allItems);
    };

    fetchData();
  }, [filters, sortingOption]);

  return { filteredItems };
};

export { useHomeData };
