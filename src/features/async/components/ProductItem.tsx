import { memo } from "react";
import { Product } from "../../../types";
import { ListRenderItemInfo, View } from "react-native";
import { TextComponent } from "../../../components/Text/TextComponent";
import { globalStyles } from "../../../GlobalStyles";

type Props = {
    product: Product
}

export const ProductItem = memo(({ product }: Props) => {
    return (
        <View style={globalStyles.Container} >
            <TextComponent style={globalStyles.elementTitle} variant="h4" title={product.name} />
            <TextComponent variant="p" title={product.price} />
            <TextComponent variant="p" title={product.category} />
            <TextComponent variant="p" title={`⭐ ${product.rating}`} />
        </View>
    )
})