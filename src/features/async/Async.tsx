import { useCallback, useEffect, useState } from "react";
import { User } from "../../types";
import { TextComponent } from "../../components/Text/TextComponent";
import { Product } from "../../types";
import { ProductItem } from "./components/ProductItem";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { globalStyles } from "../../GlobalStyles";

export const Async = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const fakeFetchProducts = (): Promise<Product[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data: Product[] = [{ id: 1, name: 'Refrigerator', price: 100, category: 'Home', rating: 10 }, { id: 2, name: 'Iphone', category: 'Technology', price: 600, rating: 9 }];
                resolve(data)
            }, 1000)
        });
    }

    const fakeFetchUsers = (): Promise<User[]> =>
        new Promise((resolve) => {
            setTimeout(() => {
                const data: User[] = [{ id: 1, name: 'Jose Carlos' }, { id: 2, name: 'Juan Carlos' }, { id: 3, name: 'Luis Carlos' }, { id: 4, name: 'Jose Juan' }];
                resolve(data);
            }, 1000)
        });

    useEffect(() => {
        async function loadData() {
            try {
                const [dataUser, dataProducts] = await Promise.all([
                    fakeFetchUsers(),
                    fakeFetchProducts()
                ])
                setUsers(dataUser);
                setProducts(dataProducts);
            } catch (error) {
                console.error(error);
            }
        }

        loadData();
    }, []);

    const renderItem = useCallback(({ u }: { u: ListRenderItemInfo<User> }) => (
        <View style={{ width: 200, marginTop: 20 }} key={u.item.id} >
            <TextComponent style={globalStyles.elementTitle} title={u.item.name} />
        </View>
    ), [])

    return (
        <View style={globalStyles.Container}>
            <TextComponent variant="h2" title="Async/Await Promises" />
            <TextComponent variant="h3" title="Users" />
            <View style={globalStyles.Container}>
                <FlatList
                    data={users}
                    keyExtractor={(u) => u.id.toString()}
                    renderItem={(u) => renderItem({ u })}
                />
            </View>
            <TextComponent variant="h3" title="Products" />
            <View style={globalStyles.Container} >
                <FlatList
                    data={products}
                    keyExtractor={(p) => p.id.toString()}
                    renderItem={({item}) => <ProductItem product={item} />}
                />
            </View>
        </View>
    )
}