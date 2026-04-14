import { FlatList, View } from "react-native"
import { usePokemonStore } from "./store/usePokemonStore"
import { useCallback, useEffect } from "react";
import { TextComponent } from "../../components/Text/TextComponent";
import { ItemList } from "./components/ItemList/ItemList";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { pokemonListType } from "../../types";
export const Pokemon = () => {
    type PokemonNavigationProp =
        NativeStackNavigationProp<RootStackParamList, "Pokemon">;
    const { pokemons, loading, error } = usePokemonStore();
    const { navigate } = useNavigation<PokemonNavigationProp>();

    const handleClick = useCallback((url: string) => {
        console.log(url);

        const id = url.split("/").filter(Boolean).pop();
        console.log(id);

        if (id) {
            navigate("PokemonDetail", { id });
        }

    }, [navigate])

    const renderItem = useCallback(
        ({ item }: { item: pokemonListType }) => (
            <ItemList pokemon={item} onClickItem={handleClick} />
        ),
        [handleClick]
    );

    return (
        <View>
            <TextComponent variant="h2" title="Pokemon!" />
            <View >
                <FlatList
                    data={pokemons}
                    renderItem={renderItem}
                    keyExtractor={(p) => p.url}
                />

            </View>
        </View>
    )
}