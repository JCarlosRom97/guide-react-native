import { memo } from "react";
import { pokemonListType } from "../../../../types";
import { Pressable, View } from "react-native";
import { TextComponent } from "../../../../components/Text/TextComponent";

type pokemonItemProps = {
    pokemon:pokemonListType,
    onClickItem:(url:string) => void
}

export const ItemList = memo(({pokemon, onClickItem}: pokemonItemProps)=>{
    console.log('pokemonItem');
    
    return(
        <View>
            <TextComponent title={pokemon.name}/>
            <Pressable  onPress={() => onClickItem(pokemon.url)}><TextComponent title="Go!"/></Pressable>
        </View>
    )
});