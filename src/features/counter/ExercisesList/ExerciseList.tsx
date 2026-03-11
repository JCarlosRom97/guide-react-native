import { FlatList, View, ListRenderItem } from 'react-native';
import { ButtonList } from './ButtonList';
import { styles } from './ExerciseListStyles';
import { useCallback } from 'react';

type ExercisesType = {
    id: number,
    name: string,
    url: string
}

type ExerciseListProps = {
    list: ExercisesType[];
};


export const ExerciseList = ({ list }: ExerciseListProps) => {

    const renderItem: ListRenderItem<ExercisesType> = useCallback(
        ({ item }) => <ButtonList exercise={item} />,
        []
    );

    return (
        <View style={styles.exercisesContainer}>
            <FlatList
                data={list}
                keyExtractor={(list) => list.id.toString()}
                renderItem={renderItem}
                initialNumToRender={8}
                maxToRenderPerBatch={5}
                windowSize={5}
                getItemLayout={(_, index) => ({
                    length: 80,
                    offset: 80 * index,
                    index,
                })}
            />
        </View>
    );
};