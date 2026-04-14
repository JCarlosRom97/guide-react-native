import { useCallback, useMemo, useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import { useGenerateArray } from "../../hook/useGenerateArray";
import { ProductItem } from "../async/components/ProductItem";

export const ListSorting = () => {
    const data = useGenerateArray(100);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState<"price" | "rating" | "none">("none");

    const handleSearch = useCallback((text: string) => {
        setSearch(text);
    }, []);

    const filteredAndSorted = useMemo(() => {
        let filteredData = [...data]; // 👈 importante (evitar mutación)

        if (search.trim()) {
            filteredData = filteredData.filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category !== "All") {
            filteredData = filteredData.filter((p) => p.category === category);
        }

        if (sortBy !== "none") {
            if (sortBy === "price") {
                filteredData.sort((a, b) => a.price - b.price);
            } else if (sortBy === "rating") {
                filteredData.sort((a, b) => b.rating - a.rating);
            }
        }

        return filteredData;
    }, [data, search, category, sortBy]);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                List Sorting
            </Text>

            {/* 🔎 Search */}
            <TextInput
                placeholder="Search..."
                value={search}
                onChangeText={handleSearch}
                style={{
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 8,
                    borderRadius: 8,
                }}
            />

            {/* ⚠️ RN no tiene select nativo → puedes simularlo */}
            <View style={{ flexDirection: "row", gap: 10 }}>
                
                {/* Category buttons */}
                {["All", "Tech", "Clothes", "Books", "Sports"].map((cat) => (
                    <Text
                        key={cat}
                        onPress={() => setCategory(cat)}
                        style={{
                            padding: 6,
                            backgroundColor: category === cat ? "#333" : "#ccc",
                            color: "#fff",
                            borderRadius: 6,
                        }}
                    >
                        {cat}
                    </Text>
                ))}

            </View>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
                
                {["none", "price", "rating"].map((sort) => (
                    <Text
                        key={sort}
                        onPress={() => setSortBy(sort as any)}
                        style={{
                            padding: 6,
                            backgroundColor: sortBy === sort ? "#333" : "#ccc",
                            color: "#fff",
                            borderRadius: 6,
                        }}
                    >
                        {sort}
                    </Text>
                ))}

            </View>

            {/* 📦 List */}
            <FlatList
                data={filteredAndSorted}
                keyExtractor={(item) => item.id.toString()}
                renderItem={( {item} ) => (
                    <ProductItem product={item} />
                )}
                contentContainerStyle={{ paddingVertical: 10 }}
            />
        </View>
    );
};