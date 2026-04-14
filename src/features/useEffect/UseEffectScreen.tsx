import { memo, useCallback, useEffect, useState } from "react";
import { User } from "../../types";
import { FlatList, ListRenderItemInfo, View, TextInput } from "react-native";
import { TextComponent } from "../../components/Text/TextComponent";
import { globalStyles } from "../../GlobalStyles";

export const UseEffectScreen = () => {
    console.log("UseEffect Screen render");

    const [search, setSearch] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);
    const [logs, setLogs] = useState<string>("");

    const fakeFetchUsers = (search: string): Promise<User[]> => {
        setLogs((prev) => prev + ` Fetching users with search:, ${search}`)
        return new Promise((resolve) => {
            setTimeout(() => {
                const data: User[] = [
                    { id: 1, name: "Carlos" },
                    { id: 2, name: "Ana" },
                    { id: 3, name: "Luis" },
                    { id: 4, name: "Maria" },
                ];

                resolve(data.filter((u) => u.name.toLowerCase().includes(search.toLocaleLowerCase())))
            }, 1000);
        })
    }

    useEffect(() => {
        let isMounted = true;
        fakeFetchUsers(search).then((data) => {
            if (isMounted) {
                setUsers(data);
            }
        })
        return () => {
            setLogs((prev) => prev + ` 🔴 Cleanup ejecutado`)
            isMounted = false;
            setLogs("");
        };
    }, [search])

    const renderItem = useCallback(({ u }: { u: ListRenderItemInfo<User> }) => (
        <View style={{ width: 200, marginTop: 20 }} key={u.item.id} >
            <TextComponent style={globalStyles.elementTitle} title={u.item.name} />
        </View>
    ), [])

    return (
        <View style={globalStyles.Container}>
            <TextComponent variant="h1" title="Use Effect" />
            <TextComponent variant="h2" title="Users" />
            <TextComponent variant="p" title={logs} />
            <SearchInput search={search} setSearch={setSearch} setLogs={setLogs} />
            <FlatList
                data={users}
                keyExtractor={(u) => u.id.toString()}
                renderItem={(u) => renderItem({ u })}
            />
        </View>
    )
};

const SearchInput = memo(function SearchInput({
    search,
    setSearch,
    setLogs
}: {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setLogs: React.Dispatch<React.SetStateAction<string>>
}) {

    setLogs((prev) => prev + ` 🔁 SearchInput render`)
    useEffect(() => {
        setLogs((prev) => prev + ` Search Input UseEffect`)
    }, [])

    return (
        <TextInput
            style={globalStyles.Input}
            value={search}
            onChangeText={setSearch}
            placeholder="Search user..."
        />
    );
});