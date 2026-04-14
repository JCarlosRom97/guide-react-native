import { memo } from 'react';
import { styles } from './ButtonListStyles';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type exerciseType = {
    id: number,
    name: string,
    url: string
}

type ButtonListProps = {
    exercise: exerciseType
}

const ButtonListComponent = ({ exercise }: ButtonListProps) => {
    const navigation = useNavigation();
    const redirectToPage = (route: string) => navigation.navigate(route as never);

    return (
        <Pressable style={styles.buttonExercise} onPress={() => redirectToPage(exercise.url)}>
            <Text style={styles.textButton}>{exercise.name}</Text>
        </Pressable>
    )
};

export const ButtonList = memo(ButtonListComponent);