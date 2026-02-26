import { styles } from './ButtonListStyles';
import { Pressable, Text } from 'react-native';

/* import { useNavigate } from 'react-router-dom' */
type exerciseType = {
    id: number,
    name: string,
    url: string
}

type ButtonListProps = {
    exercise: exerciseType
}

export const ButtonList = ({ exercise }: ButtonListProps) => {
    /* const navigate = useNavigate(); */
    const redirectToPage = (route: string) =>{};

    return (
        <Pressable style={styles.buttonExercise} onPress={() => redirectToPage(exercise.url)}>
            <Text>{exercise.name}</Text>
        </Pressable>
    )
}