import { View } from 'react-native';
import './ExerciseListStyles.ts'
import { ButtonList } from "./ButtonList";
import { styles } from './ExerciseListStyles';

type ExercisesType = {
    id: number,
    name: string,
    url: string
}

type ExerciseListProps = {
    list: ExercisesType[];
};

export const ExerciseList = ({ list }: ExerciseListProps) => {
    return (
        <View style={styles.exercisesContainer}>
            {list.map(((exercise:ExercisesType) =>(
                <ButtonList key={exercise.id} exercise={exercise} />
            )))}
        </View>
    )
}