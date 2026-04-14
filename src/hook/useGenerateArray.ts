import { useMemo } from "react";
import { Product } from "../types";
export const useGenerateArray = (count: number): Product[] => {
    return useMemo(() => {
        const categories = ["Tech", "Clothes", "Books", "Sports"];
        return Array.from(({ length: count }), (_, i) => ({
            id: i,
            name: `Product ${i}`,
            price: Math.floor(Math.random() * 1000),
            category: categories[Math.floor(Math.random() * categories.length)],
            rating: Math.floor(Math.random() * 5) + 1,
        }));
    },[count])
}