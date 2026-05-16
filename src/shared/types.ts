export type ProductItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  imageUrl: string;
  description: string;
};

export type CategoryItem = {
  id: string;
  name: string;
  imageUrl: string;
};

export type SortOption =
  | "relevance"
  | "priceLowToHigh"
  | "priceHighToLow"
  | "distance";

export type FilterOption =
  | "vegetarian"
  | "vegan"
  | "glutenFree"
  | "dairyFree"
  | "dryFruits";
