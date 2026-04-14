import { exercisesReactHooks } from '../../data/mocks/exercisesReactHooks';
import { exercisesReactWeb } from '../../data/mocks/exercisesReactWeb';
import { TextComponent } from '../../components/Text/TextComponent';
import { SectionList } from 'react-native';
import { ButtonList } from '../../components/ExercisesList/ButtonList';

export const Home = () => {

   return (
    <SectionList
      sections={[
        { title: 'React Core', data: exercisesReactHooks },
        { title: 'React Native', data: exercisesReactWeb },
      ]}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ButtonList exercise={item} />}
      renderSectionHeader={({ section }) => (
        <TextComponent title={section.title} />
      )}
    />
  );
}
